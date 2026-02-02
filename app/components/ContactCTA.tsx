"use client";

import { useTranslation } from "../hooks/useTranslation";

export default function ContactCTA() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="py-16 lg:py-24 bg-[var(--primary-dark)]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            {t("contactCTA.title")}
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-inverse)] mb-8 leading-relaxed" style={{ opacity: 0.9 }}>
            {t("contactCTA.description")}
          </p>
          <a
            href="#contact"
            className="inline-block bg-[var(--text-inverse)] text-[var(--primary)] px-8 py-4 rounded-lg font-semibold text-base hover:bg-[var(--bg-secondary)] transition-all shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            aria-label={t("contactCTA.ctaText")}
          >
            {t("contactCTA.ctaText")}
          </a>
        </div>
      </div>
    </section>
  );
}
