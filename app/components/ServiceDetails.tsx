"use client";

import Image from "next/image";
import { useTranslation } from "../hooks/useTranslation";
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function ServiceDetails() {
  const { t } = useTranslation();
  const benefits = t("servicesPage.details.benefits") as any[];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-16 lg:py-24 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)]/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={headerRef}
            className={`text-center mb-12 transition-all duration-1000 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[var(--text-primary)] mb-4">
              {t("servicesPage.details.title")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] mx-auto rounded-full mb-6"></div>
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed mb-8">
              {t("servicesPage.details.description")}
            </p>
            <div className="flex justify-center">
              <div className="w-full max-w-2xl image-organic-bg">
                <div className="w-full rounded-xl overflow-hidden shadow-3d-lg card-3d group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-[var(--primary)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <Image
                    src="/photos/why_does_a_software_company_need_a_professional_services_team_0.jpg"
                    alt={t("servicesPage.details.title")}
                    width={800}
                    height={500}
                    quality={85}
                    className="w-full h-auto object-cover image-enhanced transform group-hover:scale-110 transition-transform duration-500 rounded-xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                  />
                </div>
              </div>
            </div>
          </div>

          <div 
            ref={gridRef}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 ${
              gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {benefits.map((benefit: any, index: number) => (
              <div
                key={benefit.id}
                className="group perspective-1000"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`bg-[var(--bg-card)] p-8 rounded-xl shadow-3d border border-[var(--border-primary)] transform-3d transition-all duration-500 hover-3d relative overflow-hidden ${
                    hoveredIndex === index ? 'shadow-3d-lg' : ''
                  }`}
                  style={{
                    transform: hoveredIndex === index 
                      ? 'perspective(1000px) rotateY(5deg) rotateX(-5deg) translateZ(20px)' 
                      : 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-[var(--primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h3 className="text-xl font-heading font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent)] transition-colors duration-300 relative z-10">
                    {benefit.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed group-hover:text-[var(--text-primary)] transition-colors duration-300 relative z-10">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
