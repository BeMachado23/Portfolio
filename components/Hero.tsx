"use client";

import { ChevronDown } from "lucide-react";

export default function Hero() {
  const handleArrowClick = () => {
    document.body.style.overflowY = "auto";
  };

  return (
    <section id="start" className="relative h-screen w-full bg-black overflow-hidden">
      
      {/* Container centralizado - Mobile: sobreposição, Desktop: layout original */}
      <div className="absolute inset-0 flex items-center justify-center lg:block">
        
        {/* Imagem GIF - Mobile: centralizada com opacidade, Desktop: metade direita */}
        <div className="absolute inset-0 flex items-center justify-center z-10 opacity-50 animate-fade-blur sm:opacity-100 lg:inset-auto lg:absolute lg:left-3/7 lg:top-1/2 lg:-translate-y-1/2 lg:w-1/2 lg:h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/glitch-head.gif" 
            alt="Glitch Art Animation"
            width={1024}
            height={768}
            className="w-[350px] h-auto sm:w-[300px] md:w-[680px] lg:w-[880px] lg:h-auto opacity-50 md:opacity-100"
          />
        </div>

        {/* Texto - Mobile: centralizado sobre a imagem, Desktop: esquerda */}
        <div className="relative z-20 text-center lg:absolute lg:left-[8%] lg:top-4/9 lg:-translate-y-1/2 lg:text-left">
          <h1 className="select-none uppercase font-inter text-[2.5rem] font-bold italic tracking-tighter leading-[0.85] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem]">
            <span className="text-white text-stroke-black inline-block mb-[0.3em] animate-slide-in-1 lg:ml-[1em]">DIGITAL</span><br />
            <span className="text-stroke-purple animate-slide-in-2">SOLUTIONS</span><br />
            <span className="text-white text-stroke-black inline-block mt-[0.3em] animate-slide-in-3 lg:ml-[0.7em]">DEVELOPER</span>
          </h1>
        </div>

      </div>

      {/* Seta - Inferior central */}
      <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 z-50 animate-arrow-entrance lg:bottom-[10%]">
        <a 
          href="#about" 
          aria-label="Scroll to About section"
          onClick={handleArrowClick}
          className="flex items-center justify-center w-[50px] h-[50px] rounded-full border-[2px] border-[#966DCE] hover:border-[#966DCE] hover:bg-[#966DCE]/10 transition-colors duration-300 cursor-pointer sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px]"
        >
          <ChevronDown className="text-[#966DCE] w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] lg:w-[6rem] lg:h-[6rem]" strokeWidth={2.3}/>
        </a>
      </div>

    </section>
  );
}