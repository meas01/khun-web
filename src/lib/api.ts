import axios from "axios";
import { useEffect, useState } from "react";

interface Project {
  id: string | number;
  name: string;
  description: string;
  tech: string[];
}
export default function useProjectFetcher() {
  const [data, setData] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get<Project[]>("/api/projects");
        console.log("get data", res.data)
        setData(res.data);
      } catch (e) {
        console.log("Error fetching projects:", e);
        setError("Failed to fetch projects");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { data, isLoading, error };
}
