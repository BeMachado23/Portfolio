import Image from "next/image";
import { TechItem } from "@/data/showcaseData";

interface TechCardProps {
  tech: TechItem;
  animationClass?: string;
}

export default function TechCard({ tech, animationClass = '' }: TechCardProps) {
  return (
    <div className={`flex flex-col items-center justify-center gap-3 p-4 bg-[#0d0d0d] rounded-xl border border-neutral-800 hover:border-[#966dce] hover:shadow-[0_0_20px_rgba(150,109,206,0.15)] transition-all ${animationClass}`}>
      {/* Tech Icon */}
      <div className="relative w-12 h-12">
        <Image
          src={tech.icon}
          alt={tech.name}
          fill
          className="object-contain"
        />
      </div>
      
      {/* Tech Name */}
      <span className="text-white text-sm font-medium">{tech.name}</span>
    </div>
  );
}
