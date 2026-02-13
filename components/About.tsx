"use client";

import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useEffect, useRef, useState } from 'react';

export default function About(){
    const [expanded, setExpanded] = useState(false);
    const [imageVisible, setImageVisible] = useState(false);
    const [nameVisible, setNameVisible] = useState(false);
    const sectionRef = useRef<HTMLElement | null>(null);

    const baseText = "Olá! Sou estudante de Analise e Desenvolvimento de Sistemas, busco oportunidade desafiadoras para aplicar o que aprendi e crescer como desenvolvedor. ";
    const extraText = "\n\nTenho interesse em desenvolvimento web, analise de dados e inteligencia artificial. Sou dedicado, curioso e sempre disposto a aprender novas tecnologias. \n\nEstou animado para contribuir com projetos reais e evoluir profissionalmente.";

    useEffect(() => {
        const element = sectionRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setImageVisible(true);
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

    return(
        <section
            id="about"
            ref={sectionRef}
            className="relative w-full min-h-screen overflow-hidden py-16 lg:py-0 lg:h-screen"
        >
            {/* Mobile: Layout em coluna / Desktop: Layout absoluto original */}
            <div className="relative z-30 flex flex-col items-center px-4 lg:block lg:px-0">
                
                {/* Header - About label */}
                <div className={`flex items-center gap-3 mb-6 self-start ml-4 sm:ml-8 lg:absolute lg:top-20 lg:left-14 lg:gap-4 lg:mb-0 lg:ml-0 ${nameVisible ? 'animate-slide-in-1' : ''}`}>
                    <h2 className="text-neutral-500 text-lg font-bold tracking-wider sm:text-xl md:text-4xl">About</h2>
                    <div className="h-0.5 w-16 bg-neutral-600 sm:w-20 md:w-24"></div>
                </div>

                {/* Title BERNARDO MACHADO - Mobile: centralizado / Desktop: esquerda */}
                <div className={`text-center mb-6 lg:absolute lg:top-40 lg:left-12 lg:text-left lg:mb-0 ${nameVisible ? 'animate-slide-in-2' : ''}`}>
                    <h1 className="text-white text-2xl font-bold italic tracking-tighter leading-tight select-none sm:text-3xl md:text-4xl lg:text-5xl">
                        BERNARDO
                        <br />
                        MACHADO
                    </h1>
                </div>
            </div>

            {/* Center - Statue Image */}
            <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 z-20 ${imageVisible ? 'animate-fade-scale' : ''}`}>
                <Image 
                    unoptimized
                    src="/images/statue_back.gif" 
                    alt="Statue Back"
                    width={360}
                    height={339}
                    className="object-contain w-auto h-[60vh] max-h-[60vh] opacity-50 sm:h-[70vh] sm:max-h-[70vh] sm:opacity-70 md:max-h-[85vh] md:h-screen md:opacity-100 lg:max-h-[90vh]"
                    priority
                />
            </div>

            {/* Text + Button - Mobile: sobreposto à imagem / md+: direita da imagem */}
            <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 w-[85%] max-w-xs z-30 text-center px-4 sm:max-w-sm md:top-1/4 md:left-auto md:right-8 md:translate-x-0 md:w-56 md:text-left md:px-0 lg:right-12 lg:w-64 xl:right-24 xl:w-72 2xl:right-32 2xl:w-80 ${nameVisible ? 'animate-slide-in-3' : ''}`}>
                <p className="text-xs leading-relaxed mb-6 whitespace-pre-line text-white/90 sm:text-sm md:text-base lg:mb-8 lg:text-white">
                    {baseText}
                    {expanded && <span className="animate-fade-in">{extraText}</span>}
                </p>
                <Button
                  text={expanded ? "Read less" : "Read more"}
                  onClick={() => setExpanded((prev) => !prev)}
                />
            </div>

            {/* Marquee - full width at bottom */}
            <div className="absolute bottom-[3%] left-0 w-full z-40 select-none pointer-events-none sm:bottom-[5%]">
                <div className="animate-marquee whitespace-nowrap flex w-max">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <span key={index} className="text-[3.5rem] font-normal italic tracking-tighter sm:text-[5rem] md:text-[6.75rem] lg:text-[7rem] xl:text-[8rem]">
                            <span className="text-outline-purple-solid">PROBLEM</span>
                            <span className="text-white">&nbsp;SOLVER&nbsp;</span> 
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
