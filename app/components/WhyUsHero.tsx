"use client";

import { useTranslation } from "../hooks/useTranslation";

export default function WhyUsHero() {
  const { t } = useTranslation();

  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-[var(--bg-primary)] min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[var(--text-primary)] mb-6 leading-tight">
            {t("whyUsPage.hero.title")}
          </h1>
          <p className="text-xl sm:text-2xl text-[var(--text-secondary)] leading-relaxed">
            {t("whyUsPage.hero.subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
}
