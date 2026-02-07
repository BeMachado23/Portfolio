"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Certificate } from "@/data/showcaseData";

interface CertificateCardProps {
  certificate: Certificate;
  animationClass?: string;
}

export default function CertificateCard({ certificate, animationClass = '' }: CertificateCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Card */}
      <div 
        onClick={openModal}
        className={`relative bg-[#0d0d0d] rounded-2xl border border-neutral-800 overflow-hidden hover:border-[#966DCE] transition-colors p-4 cursor-pointer group ${animationClass}`}
      >
        {/* Tablet/iPad frame effect */}
        <div className="relative w-full aspect-[4/3] bg-neutral-900 rounded-lg overflow-hidden">
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-modal-backdrop"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          
          {/* Modal Content */}
          <div 
            className="relative z-10 max-w-4xl w-full max-h-[90vh] animate-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors p-2"
              aria-label="Fechar"
            >
              <X className="w-8 h-8" />
            </button>
            
            {/* Certificate Image */}
            <div className="relative w-full aspect-[4/3] bg-neutral-900 rounded-xl overflow-hidden">
              <Image
                src={certificate.image}
                alt={certificate.title}
                fill
                className="object-contain"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
            
            {/* Certificate info */}
            <div className="mt-4 text-center">
              <h3 className="text-white text-lg font-semibold">{certificate.title}</h3>
              <p className="text-neutral-400 text-sm">{certificate.issuer}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
