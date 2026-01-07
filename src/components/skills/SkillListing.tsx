import useSkillApi from "@/lib/api/skill";
import SkillCard from "./SkillCard";
import { SyncLoader } from "react-spinners";

export default function SkillListing(){
    const {data,isLoading,error} = useSkillApi(); // Placeholder for actual data fetching logic
    return (
        <>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-8">
               {isLoading && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-20">
        <SyncLoader color="#6B7280"  size={8}/>
      </div>
    )}
    {data.map((skills, index)=>(
        <SkillCard key={index} technology_name={skills.technology_name} image={skills.image}/>
    ))}
        </div>
        </>
    )
}