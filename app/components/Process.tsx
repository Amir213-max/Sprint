"use client";

import { useTranslation } from "../hooks/useTranslation";
import { useState } from "react";

export default function Process() {
  const { t } = useTranslation();
  const steps = t("process.steps") as any[];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="process"
      className="py-16 lg:py-24 bg-[var(--bg-secondary)] relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[var(--text-primary)] mb-3 sm:mb-4 uppercase tracking-tight animate-slide-in-up px-2">
            {t("process.title")}
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] mx-auto rounded-full"></div>
        </div>
        <div className="max-w-5xl mx-auto">
          {/* Desktop: Horizontal Timeline with 3D */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8 relative perspective-1000">
            {/* Animated Timeline Line */}
            <div className="absolute top-16 left-0 right-0 h-1 z-0">
              <div className="h-full bg-gradient-to-r from-[var(--accent)]/30 via-[var(--accent)] to-[var(--accent)]/30 rounded-full"></div>
            </div>
            {steps.map((step: any, index: number) => (
              <div
                key={step.id}
                className="relative group perspective-1000"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* 3D Step Circle */}
                <div
                  className={`bg-[var(--bg-card)] rounded-full w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-3d border-2 md:border-4 border-[var(--accent)] z-10 transform-3d transition-all duration-500 animate-zoom-in relative overflow-hidden ${
                    hoveredIndex === index ? 'shadow-3d-lg' : ''
                  }`}
                  style={{
                    transform: hoveredIndex === index 
                      ? 'perspective(1000px) rotateY(15deg) rotateX(-10deg) translateZ(40px) scale(1.1)' 
                      : 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px) scale(1)',
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 to-[var(--primary)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Number */}
                  <span className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-[var(--text-primary)] relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                    {step.number}
                  </span>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-[var(--accent)] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                </div>

                {/* Content Card */}
                <div
                  className={`bg-[var(--bg-card)] p-6 rounded-xl shadow-3d border border-[var(--border-primary)] transform-3d transition-all duration-500 ${
                    hoveredIndex === index ? 'shadow-3d-lg' : ''
                  }`}
                  style={{
                    transform: hoveredIndex === index 
                      ? 'perspective(1000px) rotateY(5deg) rotateX(-5deg) translateZ(20px)' 
                      : 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)'
                  }}
                >
                  <h3 className="text-xl font-heading font-bold text-[var(--text-primary)] mb-3 text-center group-hover:text-[var(--accent)] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-center leading-relaxed group-hover:text-[var(--text-primary)] transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Vertical Timeline with 3D */}
          <div className="lg:hidden space-y-4 sm:space-y-6 md:space-y-8">
            {steps.map((step: any, index: number) => (
              <div
                key={step.id}
                className="group perspective-1000"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`flex items-start space-x-3 sm:space-x-4 rtl:space-x-reverse p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl bg-[var(--bg-card)] shadow-3d border border-[var(--border-primary)] transform-3d transition-all duration-500 animate-slide-in-up ${
                    hoveredIndex === index ? 'shadow-3d-lg' : ''
                  }`}
                  style={{
                    transform: hoveredIndex === index 
                      ? 'perspective(1000px) rotateY(5deg) translateZ(20px)' 
                      : 'perspective(1000px) rotateY(0deg) translateZ(0px)',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {/* 3D Step Circle */}
                  <div className="flex-shrink-0">
                    <div
                      className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-3d border-2 sm:border-3 md:border-4 border-[var(--accent)] transform group-hover:scale-110 transition-all duration-500 relative overflow-hidden"
                      style={{
                        backgroundColor: 'var(--bg-card)',
                        transform: hoveredIndex === index ? 'scale(1.1) rotate(10deg)' : 'scale(1) rotate(0deg)'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 to-[var(--primary)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <span className="text-xl sm:text-2xl font-heading font-bold text-[var(--text-primary)] relative z-10">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-[var(--text-primary)] mb-1 sm:mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed group-hover:text-[var(--text-primary)] transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
