"use client";

import { useTranslation } from "../hooks/useTranslation";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function WhyUsSprint() {
  const { t } = useTranslation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const { ref: sectionsRef, isVisible: sectionsVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  const sections = t("aboutPage.whyUs.sections") || [];

  return (
    <section className="py-16 lg:py-24 bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)]/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title Section */}
        <div 
          ref={titleRef}
          className={`max-w-4xl mx-auto text-center mb-12 lg:mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[var(--text-primary)] mb-6 leading-tight">
            {t("aboutPage.whyUs.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto">
            {t("aboutPage.whyUs.intro")}
          </p>
        </div>

        {/* Sections Grid */}
        <div 
          ref={sectionsRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto transition-all duration-1000 ${
            sectionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {sections.map((section: any, index: number) => (
            <div
              key={section.id || index}
              className="group bg-[var(--bg-card)] p-6 lg:p-8 rounded-xl shadow-3d border border-[var(--border-primary)] transform-3d transition-all duration-500 hover-3d relative overflow-hidden"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-[var(--primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl lg:text-2xl font-heading font-bold text-[var(--text-primary)] mb-4 group-hover:text-[var(--accent)] transition-colors duration-300">
                  {section.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed group-hover:text-[var(--text-primary)] transition-colors duration-300">
                  {section.description}
                </p>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[var(--accent)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
