"use client";

import Image from "next/image";
import { useTranslation } from "../hooks/useTranslation";
import { useState } from "react";

export default function Clients() {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const clientImages = [
    "/customers/1.png",
    "/customers/2.png",
    "/customers/3.png",
    "/customers/5.png",
    "/customers/6.png",
    "/customers/7.png",
    "/customers/8.png",
    "/customers/9.png",
    "/customers/11.png",
    "/customers/12.png",
    "/customers/13.png",
    "/customers/14.png",
    "/customers/348258049_257315513655218_2118163845715870427_n.png",
    "/customers/588817523_1508528140842693_6503820176450315642_n.jpg.jpeg",
    "/customers/Untitled-1.png",
  ];

  return (
    <section
      id="clients"
      className="py-8 sm:py-12 md:py-16 lg:py-24 bg-[var(--bg-primary)] relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-[var(--accent)] rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-[var(--primary)] rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[var(--text-primary)] mb-3 sm:mb-4 uppercase tracking-tight animate-slide-in-up px-2">
            {t("clients.title")}
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {clientImages.map((imagePath, index) => (
            <div
              key={index}
              className="group perspective-1000 flex items-center justify-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="relative transform-3d transition-all duration-700 ease-out animate-zoom-in overflow-visible"
                style={{
                  transform: hoveredIndex === index 
                    ? 'perspective(1000px) rotateY(5deg) rotateX(-3deg) translateZ(40px) scale(1.15)' 
                    : 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px) scale(1)',
                  animationDelay: `${index * 0.05}s`,
                  filter: hoveredIndex === index 
                    ? 'drop-shadow(0 20px 40px rgba(41, 95, 117, 0.4))' 
                    : 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1))'
                }}
              >
                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"
                  style={{
                    background: `radial-gradient(circle, var(--accent) 0%, transparent 70%)`,
                    transform: 'scale(1.5)',
                    zIndex: -1
                  }}
                />
                
                {/* Image Container */}
                <div className="relative z-10 transform transition-all duration-700 ease-out">
                  <Image
                    src={imagePath}
                    alt={`Client ${index + 1}`}
                    width={160}
                    height={100}
                    className="w-full h-auto object-contain transition-all duration-700 ease-out"
                    style={{
                      filter: hoveredIndex === index 
                        ? 'brightness(1.1) contrast(1.05)' 
                        : 'brightness(1) contrast(1)'
                    }}
                  />
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-2xl">
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12"
                    style={{
                      transform: hoveredIndex === index 
                        ? 'translateX(200%) skewX(-12deg)' 
                        : 'translateX(-200%) skewX(-12deg)',
                      transition: 'transform 1s ease-out'
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
