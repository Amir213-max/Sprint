"use client";

import Image from "next/image";
import { useTranslation } from "../hooks/useTranslation";
import { useState } from "react";

export default function Clients() {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const clientImages = [
    "/customers/download (1).png",
    "/customers/download (2).png",
    "/customers/download (3).png",
    "/customers/download (4).png",
    "/customers/download.jpg",
    "/customers/download.png",
  ];

  return (
    <section
      id="clients"
      className="py-16 lg:py-24 bg-[var(--bg-primary)] relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-[var(--accent)] rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-[var(--primary)] rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[var(--text-primary)] mb-4 uppercase tracking-tight animate-slide-in-up">
            {t("clients.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {clientImages.map((imagePath, index) => (
            <div
              key={index}
              className="group perspective-1000"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`bg-[var(--bg-secondary)] rounded-xl p-6 flex items-center justify-center h-32 border-2 border-[var(--border-primary)] transform-3d transition-all duration-500 animate-zoom-in overflow-hidden shadow-3d hover-3d relative ${
                  hoveredIndex === index ? 'border-[var(--accent)] shadow-3d-lg' : ''
                }`}
                style={{
                  transform: hoveredIndex === index 
                    ? 'perspective(1000px) rotateY(10deg) rotateX(-5deg) translateZ(30px)' 
                    : 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-[var(--primary)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Image */}
                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                  <Image
                    src={imagePath}
                    alt={`Client ${index + 1}`}
                    width={120}
                    height={80}
                    className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-500"
                  />
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
