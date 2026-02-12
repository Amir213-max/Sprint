"use client";

import { useTranslation } from "../hooks/useTranslation";
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function ServicesGrid() {
  const { t } = useTranslation();
  const services = t("services.items") as any[];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-16 lg:py-24 bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[var(--accent)]/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[var(--text-primary)] mb-3 sm:mb-4 uppercase tracking-tight px-2">
            {t("services.title")}
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] mx-auto rounded-full"></div>
        </div>
        <div 
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {services.map((service: any, index: number) => (
            <div
              key={service.id}
              className="group perspective-1000"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`bg-[var(--bg-card)] p-4 sm:p-6 md:p-8 rounded-xl shadow-3d border border-[var(--border-primary)] transform-3d transition-all duration-500 hover-3d relative overflow-hidden ${
                  hoveredIndex === index ? 'shadow-3d-lg' : ''
                }`}
                style={{
                  transform: hoveredIndex === index 
                    ? 'perspective(1000px) rotateY(5deg) rotateX(-5deg) translateZ(30px)' 
                    : 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-[var(--primary)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">{service.icon}</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-[var(--text-primary)] mb-2 sm:mb-3 group-hover:text-[var(--accent)] transition-colors duration-300 relative z-10">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed group-hover:text-[var(--text-primary)] transition-colors duration-300 relative z-10">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
