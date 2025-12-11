import { useState } from "react";
import useProjectCards from "@/lib/api/projectcard";
import ProjectCard from "./ProjectCard";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function ProjectCardList() {
  const { data, isLoading, error } = useProjectCards();
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  if (isLoading) return <div>Loading projects...</div>;

  if (error) return <div className="text-red-600">{error}</div>;
  
  const closeImage = () => {
    setSelectedProjectIndex(null);
    setSelectedImage(0);
  };
  
  const OpenImage = (index: number, imageIndex: number) => {
    setSelectedProjectIndex(index);
    setSelectedImage(imageIndex);
  };
  const nextImage = () => {
    if (selectedProjectIndex === null) return;
    const images = data[selectedProjectIndex].image || [];
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  
  const prevImage = () => {
    if (selectedProjectIndex === null) return;
    const images = data[selectedProjectIndex].image || [];
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
 return (
    <div>
      {/* Modal */}
      {selectedProjectIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={closeImage}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-white hover:text-gray-300"
              onClick={closeImage}
            >
              <X size={24} />
            </button>

            {/* Prev / Next */}
            <button
              onClick={prevImage}
              className="absolute left-[-40px] top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-[-40px] top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
            >
              <ChevronRight size={32} />
            </button>

            {/* Image */}
            <img
              src={
                data[selectedProjectIndex].image
                  ? data[selectedProjectIndex].image[selectedImage]
                  : ""
              }
              alt={data[selectedProjectIndex].title}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

      {/* Project Cards */}
      <div>
        {data.map((item, projectIndex) => (
          <ProjectCard
            key={item.id}
            title={item.title}
            description={item.description}
            tags={item.tags}
            image={item.image }
            link={item.link}
            ClickOpenImage={() => OpenImage(projectIndex, 0)}
          />
        ))}
      </div>
    </div>
  );

}
