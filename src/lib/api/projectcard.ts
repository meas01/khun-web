import axios from "axios";
import { useEffect, useState } from "react";
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
useEffect(()=>{
  const fetchProjectCards =async()=>{
    // Fetch project cards logic here
    try{
     const res = await axios.get<ProjectCard[]>("/api/project-cards");
     setData(res.data);
    }catch(e){
        console.log("Error fetching project cards:", e);
        setError("Failed to fetch project cards");
    }finally{
        setLoading(false);
    }
  }
    fetchProjectCards();
},[]);
  return { data, isLoading, error };
}

