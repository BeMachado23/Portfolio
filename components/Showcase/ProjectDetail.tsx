"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, Wrench } from "lucide-react";
import { Project } from "@/data/showcaseData";

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // Match animation duration
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center ${isClosing ? 'animate-modal-backdrop-out' : 'animate-modal-backdrop'}`}
      onClick={handleClose}
    >
      <div
        className="absolute inset-0 bg-black"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-30 pointer-events-none"
          style={{ backgroundImage: "url('/images/showcaseBG.png')" }}
        />
      </div>

      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-6 left-6 z-60 text-white hover:text-[#966DCE] transition-colors"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      {/* Content Container */}
      <div 
        className={`relative z-10 w-full h-full overflow-y-auto py-20 px-6 md:px-12 lg:px-20 ${isClosing ? 'animate-modal-content-out' : 'animate-modal-content'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-[1400px] mx-auto">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Column */}
            <div className="flex flex-col gap-8">
              {/* Title with underline */}
              <div className="animate-slide-in-1">
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold italic tracking-tight uppercase w-fit pb-3 rounded border-b-4 border-[#966DCE]">
                  {project.title}
                </h1>
              </div>

              {/* Full Description */}
              <div className="animate-slide-in-2">
                {project.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p 
                    key={index}
                    className="text-neutral-300 text-sm md:text-base leading-relaxed mb-4"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* GitHub Link */}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-[#966DCE] transition-colors animate-slide-in-2 w-fit"
                >
                  <Image 
                    src="/images/github_logo.png" 
                    alt="GitHub" 
                    width={24} 
                    height={24}
                    className="invert"
                  />
                  <span className="text-base font-medium">Repositório</span>
                </a>
              )}

              {/* Technologies Section */}
              <div className="animate-slide-in-3">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#966DCE] text-lg">&lt;/&gt;</span>
                  <h3 className="text-white text-lg font-semibold">Technologies Used</h3>
                </div>
                
                {/* Tech Grid 4x3 */}
                <div className="grid grid-cols-4 gap-3">
                  {project.technologies.slice(0, 12).map((tech, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2 bg-[#1a1a1a] border border-neutral-700 rounded-full px-3 py-2 hover:border-[#966DCE] transition-colors"
                    >
                      <Image 
                        src={tech.icon} 
                        alt={tech.name} 
                        width={20} 
                        height={20}
                        className="object-contain"
                      />
                      <span className="text-white text-xs font-medium truncate">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-8">
              {/* Project Media (Image/Video) */}
              <div className="animate-slide-from-right">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border-2 border-[#966DCE] bg-neutral-900">
                  {project.projectMedia && project.mediaType === 'video' ? (
                    <video
                      src={project.projectMedia}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : project.projectMedia ? (
                    <Image
                      src={project.projectMedia}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : null}
                </div>
              </div>

              {/* Key Features */}
              <div className="relative flex animate-slide-from-bottom w-[450px] mx-auto py-6 min-h-[280px]">
                {/* Left purple bar */}
                <div className="w-1 bg-[#966DCE] rounded-full mr-6 h-[380px]" />
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-6 mt-4">
                    <Wrench className="w-5 h-5 text-[#966DCE]" />
                    <h3 className="text-white text-lg font-semibold">Key Features</h3>
                  </div>
                  
                  <ul className="space-y-4">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-white ">•</span>
                        <span className="text-neutral-300 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right purple bar */}
                <div className="w-1 bg-[#966DCE] rounded-full ml-6 h-[380px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
