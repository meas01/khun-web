import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    image?: string[];
    link?: string;
    ClickOpenImage?: () => void;
}

export default function ProjectCard({ title, description, tags, image ,link,ClickOpenImage}: ProjectCardProps) {
   return (
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition border border-gray-100 group">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
   <a href={link} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="text-gray-400 group-hover:text-blue-600 transition" size={20} />
   </a>
      </div>
      <img src={image ? image[0] : undefined} alt={title} className=" w-fit" onClick={ClickOpenImage} />
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}