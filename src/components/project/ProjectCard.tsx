import { ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string[];
  link?: string;
  ClickOpenImage?: () => void;
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  link,
  ClickOpenImage,
}: ProjectCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!image || image.length === 0) {
    image = [""];
  }

  // Auto-play carousel
  useEffect(() => {
    if (image.length <= 1) return; // No need to auto-play if only 1 image

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === image!.length - 1 ? 0 : prev + 1));
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [image]);

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition border border-gray-100 group">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <ExternalLink
              className="text-gray-400 group-hover:text-blue-600 transition"
              size={20}
            />
          </a>
        )}
      </div>

      {/* Auto Carousel */}
      <div className="relative mb-4">
        <img
          src={image[currentIndex]}
          alt={title}
          className="w-full h-48 object-cover rounded-md cursor-pointer"
          onClick={ClickOpenImage}
        />

        {/* Dots Indicator */}
        {image.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {image.map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full ${
                  idx === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        )}
      </div>

      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
