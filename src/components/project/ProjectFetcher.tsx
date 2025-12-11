import ProjectItem from "@/components/project/ProjectItem";
import useProjectFetcher from "@/lib/api";

export default function ProjectFetcher() {
  const { data, isLoading, error } = useProjectFetcher();
  if (isLoading) return <div>Loading projects...</div>;

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
