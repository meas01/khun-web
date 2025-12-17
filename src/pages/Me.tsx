import useProjectCards from "@/lib/api/projectcard";
import { ClipLoader } from "react-spinners";

export default function Me() { 
    const { data, isLoading, error } = useProjectCards();
    if (isLoading) return <div>
    <ClipLoader color="#3B82F6" size={64} />
  </div>;

  if (error) return <div className="text-red-600">{error}</div>;

    return (
        <div className="p-6"
        >
            {
                data.map((item)=>(
                    <div key={item.id} className="mb-4 p-4 border border-gray-200 rounded">
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <img src={item.image && item.image.length > 0 ? item.image[0] : ''} alt={item.title} className="w-full h-auto mb-2"/>
                    </div>
                ))
            }

{/*             
        <h2 className="text-2xl font-bold mb-4">Me Page</h2>
        <p>This is the Me page content.</p>
        <img src="http://localhost:8080/images/download/2" alt="Italian Trulli" /> */}
        </div>
    );
    } 