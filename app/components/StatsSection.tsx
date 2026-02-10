"use client";

import { useTranslation } from "../hooks/useTranslation";
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function StatsSection() {
  const { t } = useTranslation();
  const stats = t("aboutPage.stats.items") as any[];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[var(--primary-dark)] via-[var(--primary)] to-[var(--accent)] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent-light)] rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 uppercase tracking-tight drop-shadow-lg">
            {t("aboutPage.stats.title")}
          </h2>
          <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
        </div>
        <div 
          ref={ref}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
          }`}
        >
          {stats.map((stat: any, index: number) => (
            <div
              key={stat.id}
              className="group perspective-1000"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`text-center p-6 rounded-xl glass transform-3d transition-all duration-500 ${
                  hoveredIndex === index ? 'shadow-3d-lg' : ''
                }`}
                style={{
                  transform: hoveredIndex === index 
                    ? 'perspective(1000px) rotateY(10deg) rotateX(-5deg) translateZ(20px) scale(1.05)' 
                    : 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px) scale(1)',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[var(--accent-light)] mb-2 transform group-hover:scale-110 transition-transform duration-500 drop-shadow-lg">
                  {stat.number}
                </div>
                <div className="text-lg sm:text-xl text-white font-medium group-hover:text-[var(--accent-light)] transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
