"use client";

import { useTranslation } from "../hooks/useTranslation";
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Testimonials() {
  const { t } = useTranslation();
  const testimonials = t("whyUsPage.testimonials.items") as any[];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-16 lg:py-24 bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[var(--text-primary)] mb-4 uppercase tracking-tight">
            {t("whyUsPage.testimonials.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            {t("whyUsPage.testimonials.description")}
          </p>
        </div>
        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {testimonials.map((testimonial: any, index: number) => (
            <div
              key={testimonial.id}
              className="group perspective-1000"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`bg-[var(--bg-card)] p-8 rounded-xl shadow-3d border border-[var(--border-primary)] transform-3d transition-all duration-500 hover-3d relative overflow-hidden h-full flex flex-col ${
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
                
                {/* Quote Icon */}
                <div className="text-5xl mb-4 text-[var(--accent)] opacity-50 transform group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 relative z-10">
                  "
                </div>
                
                {/* Testimonial Text */}
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6 group-hover:text-[var(--text-primary)] transition-colors duration-300 flex-grow relative z-10">
                  {testimonial.text}
                </p>
                
                {/* Author Info */}
                <div className="mt-auto relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--primary)] flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                        {testimonial.author}
                      </h4>
                      <p className="text-sm text-[var(--text-tertiary)]">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
