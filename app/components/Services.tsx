"use client";

import { useTranslation } from "../hooks/useTranslation";
import { useRef, useState, useEffect } from "react";

export default function Services() {
  const { t } = useTranslation();
  const services = t("services.items") as any[];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="py-16 lg:py-24 bg-[var(--bg-secondary)] relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--primary)]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[var(--text-primary)] mb-4 uppercase tracking-tight animate-slide-in-up">
            {t("services.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: any, index: number) => (
            <div
              key={service.id}
              className="group perspective-1000"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`bg-[var(--bg-card)] p-8 rounded-xl shadow-3d border border-[var(--border-primary)] transform-3d transition-all duration-500 animate-slide-in-up card-3d relative overflow-hidden ${
                  hoveredIndex === index ? 'shadow-3d-lg' : ''
                }`}
                style={{
                  transform: hoveredIndex === index 
                    ? 'perspective(1000px) rotateY(5deg) rotateX(-5deg) translateZ(30px)' 
                    : 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-[var(--primary)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon with 3D Effect */}
                <div className="relative z-10 mb-6">
                  <div className="inline-block p-4 rounded-xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent-light)]/20 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <div className="text-5xl transform group-hover:scale-110 transition-transform duration-500">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-heading font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed group-hover:text-[var(--text-primary)] transition-colors duration-300">
                    {service.description}
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
