import { useState } from "react";
import useProjectCards from "@/lib/api/projectcard";
import ProjectCard from "./ProjectCard";

export default function ProjectCardList() {
  const { data, isLoading, error } = useProjectCards();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (isLoading) return <div>Loading projects...</div>;

  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div>
      {/* {data.map((item) => (
        <ProjectCard
          key={item.id}
          title={item.title}
          description={item.description}
          tags={item.tags}
          image={item.image}
          link={item.link}
        />
      ))} */}

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-lg"
          />
        </div>
      )}
      {data.map((item) => (
        <ProjectCard
          key={item.id}
          title={item.title}
          description={item.description}
          tags={item.tags}
          image={item.image ? [item.image[0]] : undefined}
          link={item.link}
          ClickOpenImage={() =>
            setSelectedImage(item.image ? item.image[0] : "")
          }
        />
      ))}
    </div>
  );
}
