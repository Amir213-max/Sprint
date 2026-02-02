"use client";

import { useTranslation } from "../hooks/useTranslation";

export default function Differentiators() {
  const { t } = useTranslation();
  const differentiators = t("whyUsPage.differentiators.points") as any[];

  return (
    <section className="py-16 lg:py-24 bg-[var(--bg-primary)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[var(--text-primary)] text-center mb-6 uppercase tracking-tight">
            {t("whyUsPage.differentiators.title")}
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] text-center leading-relaxed">
            {t("whyUsPage.differentiators.description")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {differentiators.map((point: any, index: number) => (
            <div
              key={point.id}
              className="bg-[var(--bg-card)] p-8 rounded-lg shadow-md hover:shadow-lg transition-all animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-heading font-bold text-[var(--text-primary)] mb-3">
                {point.title}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
