import { useCallback, useEffect, useState } from "react";
import { SquareLoader, SyncLoader } from "react-spinners";
import { toast } from "react-toastify";
import useProjectCards from "@/lib/api/projectcard";
import ProjectCard from "./ProjectCard";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function ProjectCardList() {
  const { data, isLoading, error } = useProjectCards();
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [imageLoading, setImageLoading] = useState(true);

  const closeImage = () => {
    setSelectedProjectIndex(null);
    setSelectedImage(0);
  };
  
  const OpenImage = (index: number, imageIndex: number) => {
    setSelectedProjectIndex(index);
    setSelectedImage(imageIndex);
  };
  const nextImage = useCallback(() => { // useCallback to memoize the function
    if (selectedProjectIndex === null) return;
    const images = data[selectedProjectIndex].image || [];
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  },[selectedProjectIndex,data]);
  
  const prevImage =useCallback(() => {
    if (selectedProjectIndex === null) return;
    const images = data[selectedProjectIndex].image || [];
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  },[selectedProjectIndex,data]);

useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedProjectIndex === null) return;

    if (e.key === "ArrowRight") {
      nextImage();
    }

    if (e.key === "ArrowLeft") {
      prevImage();
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [selectedProjectIndex, nextImage, prevImage]);
useEffect(()=>{
  if(selectedProjectIndex !== null){
    setImageLoading(true);
  }
}, [selectedImage, selectedProjectIndex])

useEffect(() => {
  if (error) {
    toast.error('Error loading projects', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
}, [error]);

return (
  <>
    {/* Floating Loading Spinner */}
    {isLoading && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-20">
        <SyncLoader color="#6B7280"  size={8}/>
      </div>
    )}
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

            {/* Image + Spinner */}
            <div className="relative min-w-[400px] min-h-[400px] flex items-center justify-center">
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <SquareLoader color="#FFFFFF" size={40} />
                </div>
              )}

              <img
                src={data[selectedProjectIndex].image?.[selectedImage]}
                alt={data[selectedProjectIndex].title}
                loading="lazy"
                onLoad={() => setImageLoading(false)}
                className={`max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-lg transition-opacity duration-300 ${
                  imageLoading ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>
          </div>
        </div>
      )}

      {/* Project Cards */}
      {data.map((item, projectIndex) => (
        <ProjectCard
          key={item.id}
          title={item.title}
          description={item.description}
          tags={item.tags}
          image={item.image }
          link={item.link}
          ClickOpenImage={(imageIndex) => OpenImage(projectIndex, imageIndex)}
        />
      ))}
    </>
  );

}
