"use client";

import { useTranslation } from "../hooks/useTranslation";
import { useState } from "react";

export default function WhyChooseUs() {
  const { t } = useTranslation();
  const advantages = t("whyChooseUs.items") as any[];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--accent)]/5 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--primary)]/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[var(--text-primary)] mb-3 sm:mb-4 uppercase tracking-tight animate-slide-in-up px-2">
            {t("whyChooseUs.title")}
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {advantages.map((advantage: any, index: number) => (
            <div
              key={advantage.id}
              className="group perspective-1000"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`flex items-start space-x-3 sm:space-x-4 rtl:space-x-reverse p-4 sm:p-6 md:p-8 rounded-xl bg-[var(--bg-card)] shadow-3d border border-[var(--border-primary)] transform-3d transition-all duration-500 animate-slide-in-up hover-3d relative overflow-hidden ${
                  hoveredIndex === index ? 'shadow-3d-lg' : ''
                }`}
                style={{
                  transform: hoveredIndex === index 
                    ? 'perspective(1000px) rotateX(5deg) rotateY(-5deg) translateZ(20px)' 
                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-[var(--primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon with 3D Effect */}
                <div className="flex-shrink-0 relative z-10">
                  <div 
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-xl sm:text-2xl md:text-3xl font-bold text-[var(--accent)] transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-3d"
                    style={{ 
                      backgroundColor: 'rgba(0, 188, 212, 0.1)',
                      transform: hoveredIndex === index ? 'scale(1.1) rotate(6deg) translateZ(20px)' : 'scale(1) rotate(0deg) translateZ(0px)'
                    }}
                  >
                    {advantage.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 relative z-10">
                  <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold text-[var(--text-primary)] mb-1 sm:mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed group-hover:text-[var(--text-primary)] transition-colors duration-300">
                    {advantage.description}
                  </p>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
