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
            className="relative w-full h-screen overflow-hidden"
        >
            <div className='absolute left-15 top-20 z-30'>
            {/* Header - About label */}
            <div className={`absolute top-20 left-9 md:left-14 z-30 flex items-center gap-4 ${nameVisible ? 'animate-slide-in-1' : ''}`}>
                <h2 className="text-neutral-500 text-xl md:text-4xl font-bold tracking-wider">About</h2>
                <div className="h-0.5 w-24 bg-neutral-600"></div>
            </div>

            {/* Left - Title BERNARDO MACHADO */}
            <div className={`absolute top-40 left-8 md:left-12 z-30 ${nameVisible ? 'animate-slide-in-2' : ''}`}>
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold italic tracking-tighter leading-tight select-none">
                    BERNARDO
                    <br />
                    MACHADO
                </h1>
            </div>
            </div>

            {/* Right - Text + Button */}
            <div className={`absolute top-1/4 right-12 lg:right-24 xl:right-32 w-64 md:w-72 lg:w-80 z-30 text-left${nameVisible ? 'animate-slide-in-3' : ''}`}>
                <p className="text-sm md:text-base leading-relaxed mb-8 whitespace-pre-line">
                    {baseText}
                    {expanded && <span className="animate-fade-in">{extraText}</span>}
                </p>
                <Button
                  text={expanded ? "Read less" : "Read more"}
                  onClick={() => setExpanded((prev) => !prev)}
                />
            </div>

            {/* Center - Statue Image (positioned at bottom center) */}
            <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 z-20 ${imageVisible ? 'animate-fade-scale' : ''}`}>
                <Image 
                    unoptimized
                    src="/images/statue_back.gif" 
                    alt="Statue Back"
                    width={360}
                    height={339}
                    className="object-contain w-auto h-screen max-h-[85vh] md:max-h-[90vh]"
                    priority
                />
            </div>

            {/* Marquee - full width at bottom, in front of statue */}
            <div className="absolute bottom-[5%] left-0 w-full z-40 select-none pointer-events-none">
                <div className="animate-marquee whitespace-nowrap flex w-max">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <span key={index} className="text-[6.75rem] md:text-[7rem] lg:text-[8rem] font-normal italic tracking-tighter ">
                            
                            <span className="text-outline-purple-solid">PROBLEM</span>
                            <span className="text-white">&nbsp;SOLVER&nbsp;</span> 
                        
                        </span>
                    ))}

                    {/* Opção alternativa sem JavaScript (mantida como referência pra registro): */}
                    {/**
                    <span className="text-[6.75rem] md:text-[7rem] lg:text-[9rem] font-normal italic tracking-tighter mx-8">
                        <span className="text-outline-purple-solid">PROBLEM</span>
                        <span className="text-white">&nbsp;SOLVER&nbsp;</span>
                    </span>
                    <span className="text-[6.75rem] md:text-[7rem] lg:text-[9rem] font-normal italic tracking-tighter mx-8">
                        <span className="text-outline-purple-solid">PROBLEM</span>
                        <span className="text-white">&nbsp;SOLVER&nbsp;</span>
                    </span>
                    <span className="text-[6.75rem] md:text-[7rem] lg:text-[9rem] font-normal italic tracking-tighter mx-8">
                        <span className="text-outline-purple-solid">PROBLEM</span>
                        <span className="text-white">&nbsp;SOLVER&nbsp;</span>
                    </span>
                    <span className="text-[6.75rem] md:text-[7rem] lg:text-[9rem] font-normal italic tracking-tighter mx-8">
                        <span className="text-outline-purple-solid">PROBLEM</span>
                        <span className="text-white">&nbsp;SOLVER&nbsp;</span>
                    </span>
                    */}
                </div>
            </div>
        </section>
    )
}
