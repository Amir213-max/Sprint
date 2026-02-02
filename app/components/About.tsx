"use client";

import { useTranslation } from "../hooks/useTranslation";

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="py-16 lg:py-24 bg-[var(--bg-primary)]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[var(--text-primary)] text-center mb-8 uppercase tracking-tight">
            {t("about.title")}
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] text-center leading-relaxed">
            {t("about.description")}
          </p>
        </div>
      </div>
    </section>
  );
}
