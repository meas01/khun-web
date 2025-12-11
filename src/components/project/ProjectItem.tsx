interface Props{
        name: string
        description: string
        tech:string[]
}
export default function ProjectItem({name,description,tech}: Props){
      return (
    <div className="mb-4 last:mb-0">
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
      <p className="text-gray-700 mb-2">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((technology) => (
          <span
            key={technology}
            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
          >
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
}