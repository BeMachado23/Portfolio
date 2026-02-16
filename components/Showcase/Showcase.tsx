"use client";

import { useEffect, useRef, useState } from "react";
import {
  ShowcaseTab,
  Project,
  projects,
  certificates,
  techStack,
} from "@/data/showcaseData";
import ShowcaseTabs from "./ShowcaseTabs";
import ProjectCard from "./ProjectCard";
import CertificateCard from "./CertificateCard";
import TechCard from "./TechCard";
import ProjectDetail from "./ProjectDetail";

export default function Showcase() {
  const [activeTab, setActiveTab] = useState<ShowcaseTab>("projects");
  const [nameVisible, setNameVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNameVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="showcase"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black overflow-hidden py-16 sm:py-24 md:py-32 lg:py-50"
    > 
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-30 pointer-events-none"
        style={{ backgroundImage: "url('/images/showcaseBG.png')" }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className={`flex items-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-10 md:mb-15 lg:-translate-x-0 lg:-translate-y-6 xl:-translate-y-10 ${nameVisible ? 'animate-slide-in-1' : ''}`}>
          <h2 className="text-neutral-500 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wider">
            Showcase
          </h2>
          <div className="h-0.5 w-12 sm:w-16 md:w-20 lg:w-24 bg-neutral-600" />
        </div>

        {/* Tabs */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <ShowcaseTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {/* Grid Content */}
        <div className="mt-8">
          {/* Projects Grid - 3 columns */}
          {activeTab === "projects" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-16 md:gap-x-12 md:gap-y-16 lg:gap-x-8 lg:gap-y-12 xl:gap-x-20 xl:gap-y-24 2xl:gap-x-50 2xl:gap-y-40 mt-8 sm:mt-12 md:mt-20">
              {projects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  animationClass={nameVisible ? `animate-card-${index + 1}` : ''}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          )}

          {/* Certificates Grid - 3 columns */}
          {activeTab === "certificates" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-8 sm:mt-12 md:mt-20">
              {certificates.map((certificate, index) => (
                <CertificateCard 
                  key={certificate.id} 
                  certificate={certificate} 
                  animationClass={nameVisible ? `animate-card-${index + 1}` : ''}
                />
              ))}
            </div>
          )}

          {/* Tech Stack Grid - 6 columns */}
          {activeTab === "techstack" && (
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mt-8 sm:mt-12 md:mt-20">
              {techStack.map((tech, index) => (
                <TechCard 
                  key={tech.id} 
                  tech={tech} 
                  animationClass={nameVisible ? `animate-card-${index + 1}` : ''}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
