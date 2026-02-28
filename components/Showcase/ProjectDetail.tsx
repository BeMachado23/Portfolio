"use client";

import { useEffect, useState, useRef } from "react"; // Adicionado useRef
import Image from "next/image";
import { ChevronLeft, Wrench, X, Maximize2 } from "lucide-react";
import { Project } from "@/data/showcaseData";

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [isMediaExpanded, setIsMediaExpanded] = useState(false);
  
  // Ref para controlar o vídeo que fica ao fundo
  const bgVideoRef = useRef<HTMLVideoElement>(null);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isMediaExpanded) {
          setIsMediaExpanded(false);
        } else {
          handleClose();
        }
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isMediaExpanded]);

  // Efeito para PAUSAR o vídeo de fundo quando o expandido abrir
  useEffect(() => {
    if (bgVideoRef.current) {
      if (isMediaExpanded) {
        bgVideoRef.current.pause();
      } else {
        // Tenta dar play novamente quando fechar o expandido
        bgVideoRef.current.play().catch(() => {
          // Ignora erros caso o navegador bloqueie o autoplay silenciosamente
        });
      }
    }
  }, [isMediaExpanded]);

  return (
    <>
      {/* OVERLAY DA MÍDIA EXPANDIDA */}
      {isMediaExpanded && project.projectMedia && (
        <div 
          // Removido o backdrop-blur-sm para poupar a GPU
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8 animate-fade-in"
          onClick={() => setIsMediaExpanded(false)}
        >
          <button
            onClick={() => setIsMediaExpanded(false)}
            className="absolute top-6 right-6 z-[110] text-white hover:text-[#966DCE] transition-colors bg-black/50 p-2 rounded-full"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div 
            className="relative w-full h-full max-w-6xl max-h-[85vh] animate-modal-content flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {project.mediaType === 'video' ? (
              <video
                src={project.projectMedia}
                autoPlay
                loop
                muted
                controls
                playsInline // Importante para fluidez em alguns navegadores
                style={{ transform: 'translateZ(0)' }} // Força aceleração de hardware (GPU)
                className="w-full h-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            ) : (
              <Image
                src={project.projectMedia}
                alt={project.title}
                fill
                className="object-contain"
              />
            )}
          </div>
        </div>
      )}

      {/* MODAL PRINCIPAL */}
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center ${isClosing ? 'animate-modal-backdrop-out' : 'animate-modal-backdrop'}`}
        onClick={handleClose}
      >
        <div className="absolute inset-0 bg-black">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-30 pointer-events-none"
            style={{ backgroundImage: "url('/images/showcaseBG.png')" }}
          />
        </div>

        <button
          onClick={handleClose}
          className="absolute top-6 left-6 z-60 text-white hover:text-[#966DCE] transition-colors"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <div 
          className={`relative z-10 w-full h-full overflow-y-auto py-20 px-6 md:px-12 lg:px-20 ${isClosing ? 'animate-modal-content-out' : 'animate-modal-content'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Left Column (Text & Tech) - Omitido as mudanças visuais aqui para focar na lógica */}
              <div className="flex flex-col gap-8">
                <div className="animate-slide-in-1">
                  <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold italic tracking-tight uppercase w-fit pb-3 rounded border-b-4 border-[#966DCE]">
                    {project.title}
                  </h1>
                </div>

                <div className="animate-slide-in-2">
                  {project.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-neutral-300 text-sm md:text-base leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-[#966DCE] transition-colors animate-slide-in-2 w-fit">
                    <Image src="/images/github_logo.png" alt="GitHub" width={24} height={24} className="invert" />
                    <span className="text-base font-medium">Repositório</span>
                  </a>
                )}

                <div className="animate-slide-in-3">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#966DCE] text-lg">&lt;/&gt;</span>
                    <h3 className="text-white text-lg font-semibold">Technologies Used</h3>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {project.technologies.slice(0, 12).map((tech, index) => (
                      <div key={index} className="flex items-center gap-2 bg-[#1a1a1a] border border-neutral-700 rounded-full px-3 py-2 hover:border-[#966DCE] transition-colors">
                        <Image src={tech.icon} alt={tech.name} width={20} height={20} className="object-contain" />
                        <span className="text-white text-xs font-medium truncate">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-8">
                <div className="animate-slide-from-right">
                  <div 
                    className="group relative w-full aspect-video rounded-lg overflow-hidden border-2 border-[#966DCE] bg-neutral-900 cursor-pointer"
                    onClick={() => setIsMediaExpanded(true)}
                  >
                    {project.projectMedia && project.mediaType === 'video' ? (
                      <video
                        ref={bgVideoRef} // Vinculamos a ref aqui!
                        src={project.projectMedia}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : project.projectMedia ? (
                      <Image
                        src={project.projectMedia}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : null}
                    
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-[#966DCE] text-white p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <Maximize2 className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="relative flex animate-slide-from-bottom w-full max-w-[450px] mx-auto py-6 min-h-[280px]">
                  <div className="w-1 bg-[#966DCE] rounded-full mr-3 sm:mr-4 md:mr-6 h-auto" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-4 sm:mb-6 mt-4">
                      <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-[#966DCE]" />
                      <h3 className="text-white text-base sm:text-lg font-semibold">Key Features</h3>
                    </div>
                    <ul className="space-y-3 sm:space-y-4">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 sm:gap-3">
                          <span className="text-white ">•</span>
                          <span className="text-neutral-300 text-xs sm:text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-1 bg-[#966DCE] rounded-full ml-3 sm:ml-4 md:ml-6 h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}