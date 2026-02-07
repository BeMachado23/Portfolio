import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Project } from "@/data/showcaseData";

interface ProjectCardProps {
  project: Project;
  animationClass?: string;
  onClick?: () => void;
}

export default function ProjectCard({ project, animationClass = '', onClick }: ProjectCardProps) {
  return (
    <div 
      className={`flex flex-col bg-[#0d0d0d] rounded-2xl border border-neutral-800 overflow-hidden hover:border-[#966DCE] transition-colors cursor-pointer ${animationClass}`}
      onClick={onClick}
    >
      {/* Project Image */}
      <div className="relative w-full aspect-[16/8] bg-neutral-900">
        <Image
        
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        {/* Tags overlay */}
        {project.tags.length > 0 && (
          <div className="absolute bottom-3 left-3 flex gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-[#171717] text-primary rounded-md border border-[#966DCE]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col p-5 gap-3">
        <h3 className="text-white text-lg font-semibold">{project.title}</h3>
        <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* More button */}
        <button className="flex items-center gap-2 text-white text-sm mt-2 hover:text-primary transition-colors group self-start">
          <span>More</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
