interface SkillCard {
    technology_name: string;
    image?: string;
}
export default function SkillCard({
    technology_name,
    image,
}:SkillCard) {
    return (
    <>
    <div className="group  flex flex-col items-center justify-center p-6 bg-white border border-gray-100 rounded-2xl shadow-sm transition-all duration-100 hover:shadow-xl hover:-translate-y-1">
            {/* Image Container */}
            <div className="w-16 h-16 mb-4 flex items-center justify-center p-2 rounded-xl bg-gray-50 group-hover:bg-blue-50 transition-colors">
                {image ? (
                    <img 
                        src={image} 
                        alt={technology_name} 
                        className="w-full h-full object-contain"
                    />
                ) : (
                    /* Fallback icon if image is missing */
                    <div className="text-gray-300 text-xs text-center">No Logo</div>
                )}
            </div>

            {/* Technology Name */}
            <p className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                {technology_name}
            </p>
        </div>
    </>
    );
}