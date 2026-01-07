import axios from "axios";
import { useEffect, useState } from "react";
interface Skill{
    technology_name: string;
    image?: string;
}
export default function useSkillApi(){
   const [ data,setData] = useState<Skill[]>([]);
   const [error,setError]= useState<string |null>(null);
   const [isLoading,setLoading]= useState<boolean>(true);
   useEffect(()=>{
    const fetchSkills = async()=>{
        try{
            const res = await axios.get<Skill[]>("/api/skills");
            setData(res.data);
        }catch(e){
            console.log("Error fetching skills:", e);
            setError("Failed to fetch skills");
        }finally{
            console.log("Fetch skills completed");
            setLoading(false);
        }
    }
    fetchSkills();
   },[]);
   return {data,isLoading,error};
}