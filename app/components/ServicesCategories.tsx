"use client";

import { useTranslation } from "../hooks/useTranslation";
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function ServicesCategories() {
  const { t } = useTranslation();
  const marketingServices = t("servicesPage.marketingServices.services") as any[];
  const programmingServices = t("servicesPage.programmingServices.services") as any[];
  const [hoveredIndex, setHoveredIndex] = useState<{ category: string; index: number } | null>(null);
  
  const { ref: marketingRef, isVisible: marketingVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  const { ref: programmingRef, isVisible: programmingVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      {/* Marketing Services Section */}
      <section className="py-16 lg:py-24 bg-[var(--bg-primary)] relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[var(--accent)]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div 
            ref={marketingRef}
            className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
              marketingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[var(--text-primary)] mb-4">
              {t("servicesPage.marketingServices.title")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {marketingServices.map((service: any, index: number) => (
              <div
                key={service.id}
                className="group perspective-1000"
                onMouseEnter={() => setHoveredIndex({ category: 'marketing', index })}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`bg-[var(--bg-card)] p-6 lg:p-8 rounded-xl shadow-3d border border-[var(--border-primary)] transform-3d transition-all duration-500 hover-3d relative overflow-hidden h-full ${
                    hoveredIndex?.category === 'marketing' && hoveredIndex?.index === index ? 'shadow-3d-lg' : ''
                  }`}
                  style={{
                    transform: hoveredIndex?.category === 'marketing' && hoveredIndex?.index === index
                      ? 'perspective(1000px) rotateY(5deg) rotateX(-5deg) translateZ(30px)' 
                      : 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-[var(--primary)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl lg:text-2xl font-heading font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">
                      {service.title}
                    </h3>
                    {service.titleEn && (
                      <p className="text-sm text-[var(--text-tertiary)] mb-4 italic">
                        {service.titleEn}
                      </p>
                    )}
                    <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed group-hover:text-[var(--text-primary)] transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[var(--accent)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programming Services Section */}
      <section className="py-16 lg:py-24 bg-[var(--bg-secondary)] relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-[var(--accent)]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div 
            ref={programmingRef}
            className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
              programmingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[var(--text-primary)] mb-4">
              {t("servicesPage.programmingServices.title")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {programmingServices.map((service: any, index: number) => (
              <div
                key={service.id}
                className="group perspective-1000"
                onMouseEnter={() => setHoveredIndex({ category: 'programming', index })}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`bg-[var(--bg-card)] p-6 lg:p-8 rounded-xl shadow-3d border border-[var(--border-primary)] transform-3d transition-all duration-500 hover-3d relative overflow-hidden h-full ${
                    hoveredIndex?.category === 'programming' && hoveredIndex?.index === index ? 'shadow-3d-lg' : ''
                  }`}
                  style={{
                    transform: hoveredIndex?.category === 'programming' && hoveredIndex?.index === index
                      ? 'perspective(1000px) rotateY(5deg) rotateX(-5deg) translateZ(30px)' 
                      : 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-[var(--primary)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl lg:text-2xl font-heading font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">
                      {service.title}
                    </h3>
                    {service.titleEn && (
                      <p className="text-sm text-[var(--text-tertiary)] mb-4 italic">
                        {service.titleEn}
                      </p>
                    )}
                    <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed group-hover:text-[var(--text-primary)] transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[var(--accent)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
