import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../config";

// API Response Interface
interface ApiProjectCard {
    projectId: string;
    projectName: string;
    projectDescription: string;
    linkedInUrl?: string;
    teamMembers: string[];
    imageUrls: string[];
    technologiesUsed: string[];
    createdAt: string;
}

// Frontend Interface (what components expect)
interface ProjectCard {
    id: string | number;
    title: string;
    description: string;
    tags: string[];
    image?: string[];
    link?: string;
}
export default function useProjectCards() {
 const [data, setData] = useState<ProjectCard[]>([]);
 const [isLoading, setLoading] = useState(true);
 const [error, setError] = useState<string | null>(null);
const projects = async ()=>{
  try{
    setLoading(true);
    setError(null);

    // Use proxy setup from vite.config.ts (/api -> VITE_BASE_URL)
    const res = await axios.get<ApiProjectCard[]>("/api/projects");
    console.log("API Response:", res.data);
    if(error) setError(null);
    // Get base URL for image transformation
    const baseUrl = config.baseUrl;

    // Transform API response to match frontend interface
    const transformedData: ProjectCard[] = res.data.map(project => ({
      id: project.projectId,
      title: project.projectName,
      description: project.projectDescription,
      tags: project.technologiesUsed,
      image: project.imageUrls.map(url =>
        url.startsWith('/') ? `${baseUrl}${url}` : url
      ),
      link: project.linkedInUrl
    }));
    setData(transformedData);
  }catch(e){
    
    // Better error handling
    let errorMessage = "Failed to fetch project cards";
    if (axios.isAxiosError(e)) {
      if (e.response && e.response.status === 404) {
        errorMessage = "Projects not found (404)";
      } else if (e.response && e.response.status !== undefined && e.response.status >= 500) {
        errorMessage = "Server error. Please try again later.";
      } else if (e.response && e.response.status !== undefined && e.response.status >= 400) {
        errorMessage = "Request failed. Please check your connection.";
      } else if (!e.response) {
        errorMessage = "Network error. Please check your connection.";
      }
    }

    setError(errorMessage);
    setData([]); 
    // Clear data on error
  }finally{
    setLoading(false);
  }
}

useEffect(()=>{
  // fetchProjectCards();
  projects();
},[]);

  // Add refetch function for manual refresh
  const refetch = () => {
    projects();
  };

  return { data, isLoading, error, refetch };
}

