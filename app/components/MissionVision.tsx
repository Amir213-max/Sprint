"use client";

import Image from "next/image";
import { useTranslation } from "../hooks/useTranslation";
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function MissionVision() {
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="py-16 lg:py-24 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)]/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Story Section */}
        <div 
          ref={storyRef}
          className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 ${
            storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[var(--text-primary)] mb-4">
              {t("aboutPage.story.title")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-[var(--text-secondary)] text-center leading-relaxed mb-8">
            {t("aboutPage.story.description")}
          </p>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl rounded-xl overflow-hidden shadow-3d-lg card-3d group">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-[var(--primary)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image
                src="/photos/K2-Criteo-Office-Curator-LARGE-102-scaled.jpg"
                alt={t("aboutPage.story.title")}
                width={800}
                height={500}
                quality={85}
                className="w-full h-auto object-cover image-enhanced transform group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision Grid */}
        <div 
          ref={gridRef}
          className={`grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto transition-all duration-1000 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Mission */}
          <div 
            className="group perspective-1000"
            onMouseEnter={() => setHoveredCard('mission')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className={`bg-[var(--bg-card)] p-8 rounded-xl shadow-3d border border-[var(--border-primary)] transform-3d transition-all duration-500 hover-3d relative overflow-hidden ${
                hoveredCard === 'mission' ? 'shadow-3d-lg' : ''
              }`}
              style={{
                transform: hoveredCard === 'mission' 
                  ? 'perspective(1000px) rotateY(5deg) rotateX(-5deg) translateZ(20px)' 
                  : 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-[var(--primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">🎯</div>
              <h3 className="text-2xl font-heading font-bold text-[var(--text-primary)] mb-4 group-hover:text-[var(--accent)] transition-colors duration-300">
                {t("aboutPage.mission.title")}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed group-hover:text-[var(--text-primary)] transition-colors duration-300 relative z-10">
                {t("aboutPage.mission.description")}
              </p>
            </div>
          </div>

          {/* Vision */}
          <div 
            className="group perspective-1000"
            onMouseEnter={() => setHoveredCard('vision')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className={`bg-[var(--bg-card)] p-8 rounded-xl shadow-3d border border-[var(--border-primary)] transform-3d transition-all duration-500 hover-3d relative overflow-hidden ${
                hoveredCard === 'vision' ? 'shadow-3d-lg' : ''
              }`}
              style={{
                transform: hoveredCard === 'vision' 
                  ? 'perspective(1000px) rotateY(5deg) rotateX(-5deg) translateZ(20px)' 
                  : 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-[var(--primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">👁️</div>
              <h3 className="text-2xl font-heading font-bold text-[var(--text-primary)] mb-4 group-hover:text-[var(--accent)] transition-colors duration-300">
                {t("aboutPage.vision.title")}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed group-hover:text-[var(--text-primary)] transition-colors duration-300 relative z-10">
                {t("aboutPage.vision.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
