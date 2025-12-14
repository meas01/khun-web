import ProjectItem from "@/components/project/ProjectItem";
import useProjectFetcher from "@/lib/api";
import { ClipLoader } from "react-spinners";

export default function ProjectFetcher() {
  const { data, isLoading, error } = useProjectFetcher();
  if (isLoading) return <div>
    <ClipLoader color="#3B82F6" size={64} />
  </div>;

  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="space-y-4">
      {data.map((item) => (
        <ProjectItem
          key={item.id}
          name={item.name}
          description={item.description}
          tech={item.tech}
        />
      ))}
    </div>
  );
}
