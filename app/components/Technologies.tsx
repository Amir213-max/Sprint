"use client";

import { useTranslation } from "../hooks/useTranslation";
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Technologies() {
  const { t } = useTranslation();
  const technologies = t("whyUsPage.technologies.items") as any[];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-16 lg:py-24 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[var(--text-primary)] mb-4 uppercase tracking-tight">
            {t("whyUsPage.technologies.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            {t("whyUsPage.technologies.description")}
          </p>
        </div>
        <div 
          ref={ref}
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
          }`}
        >
          {technologies.map((tech: any, index: number) => (
            <div
              key={tech.id}
              className="group perspective-1000"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`bg-[var(--bg-card)] p-6 rounded-xl shadow-3d border border-[var(--border-primary)] transform-3d transition-all duration-500 hover-3d relative overflow-hidden text-center ${
                  hoveredIndex === index ? 'shadow-3d-lg' : ''
                }`}
                style={{
                  transform: hoveredIndex === index 
                    ? 'perspective(1000px) rotateY(10deg) rotateX(-5deg) translateZ(20px) scale(1.1)' 
                    : 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px) scale(1)',
                  animationDelay: `${index * 0.05}s`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-[var(--primary)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-4xl mb-3 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10">
                  {tech.icon}
                </div>
                <h3 className="text-sm font-heading font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300 relative z-10">
                  {tech.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
