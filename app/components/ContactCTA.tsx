"use client";

import { useTranslation } from "../hooks/useTranslation";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function ContactCTA() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      id="contact"
      className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-br from-[var(--primary-dark)] via-[var(--primary)] to-[var(--accent)] relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent-light)] rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={ref}
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
          }`}
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 sm:mb-6 drop-shadow-lg px-2">
            {t("contactCTA.title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 leading-relaxed px-2" style={{ opacity: 0.95 }}>
            {t("contactCTA.description")}
          </p>
          <a
            href="#contact"
            className="group inline-block bg-white text-[var(--primary)] px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:bg-[var(--bg-secondary)] transition-all shadow-3d-lg hover:shadow-3d transform hover:scale-110 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/50 relative overflow-hidden"
            aria-label={t("contactCTA.ctaText")}
          >
            <span className="relative z-10">{t("contactCTA.ctaText")}</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        </div>
      </div>
    </section>
  );
}
