"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("start");
  const [hasLeftStart, setHasLeftStart] = useState(false);

  const sections = ["start", "about", "showcase", "contact"];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
            // Marca que saiu do start pela primeira vez
            if (sectionId !== "start") {
              setHasLeftStart(true);
            }
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Navbar oculta apenas se estiver no start E nunca tiver saído dele
  const isHidden = activeSection === "start" && !hasLeftStart;

  // Logo aparece apenas após a seção About (showcase, contact, etc.)
  const showLogo = activeSection !== "start" && activeSection !== "about";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-2 transition-all duration-500 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-black/40 backdrop-blur-md border-b border-white/5 ${
        isHidden ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        {/* Logo - aparece apenas após a seção About */}
        <span
          className={`text-white font-bold italic text-lg tracking-tight transition-opacity duration-300 sm:text-xl ${
            showLogo ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          BERNARDO.
        </span>

        {/* Navigation Links */}
        <ul className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`transition-all duration-300 text-xs pb-1 border-b-2 sm:text-sm md:text-base ${
                  activeSection === section
                    ? "text-[#966DCE] opacity-100 border-[#966DCE]"
                    : "text-white opacity-50 border-transparent hover:text-[#966DCE] hover:opacity-100"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
