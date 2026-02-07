"use client";

import { ChevronDown } from "lucide-react";

export default function Hero() {
  const handleArrowClick = () => {
    document.body.style.overflowY = "auto";
  };

  return (
    <section id="start" className="relative h-screen w-full bg-black overflow-hidden">
      
      {/* Texto - Esquerda, centralizado verticalmente */}
      <div className="absolute left-[8%] top-4/9 -translate-y-1/2 z-20">
        <h1 className="select-none uppercase font-inter text-[3.5rem] md:text-[4rem] font-bold italic tracking-tighter leading-[0.85]">
          <span className="text-white text-stroke-black ml-[1em] inline-block mb-[0.3em] animate-slide-in-1">DIGITAL</span><br />
          <span className="text-stroke-purple animate-slide-in-2">SOLUTIONS</span><br />
          <span className="text-white text-stroke-black ml-[0.7em] inline-block mt-[0.3em] animate-slide-in-3">DEVELOPER</span>
        </h1>
      </div>
      {/* Imagem GIF - Centralizada na metade direita da tela */}
      <div className="absolute left-3/7 top-1/2 -translate-y-1/2 z-10 w-1/2 h-full flex items-center justify-center animate-fade-blur">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/images/glitch-head.gif" 
          alt="Glitch Art Animation"
          width={1024}
          height={768}
        />
      </div>

      {/* Seta - Inferior central */}
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 z-50 animate-arrow-entrance">
        <a 
          href="#about" 
          aria-label="Scroll to About section"
          onClick={handleArrowClick}
          className="flex items-center justify-center w-[70px] h-[70px] rounded-full border-[2px] border-[#966DCE] hover:border-[#966DCE] hover:bg-[#966DCE]/10 transition-colors duration-300 cursor-pointer"
        >
          <ChevronDown className="text-[#966DCE] w-[6rem] h-[6rem]" strokeWidth={2.3}/>
        </a>
      </div>

    </section>
  );
}