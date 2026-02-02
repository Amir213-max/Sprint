"use client";

import { useTranslation } from "../hooks/useTranslation";

export default function CoreStrengths() {
  const { t } = useTranslation();
  const strengths = t("whyUsPage.coreStrengths.items") as any[];

  return (
    <section className="py-16 lg:py-24 bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[var(--text-primary)] text-center mb-12 lg:mb-16 uppercase tracking-tight animate-fade-in">
          {t("whyUsPage.coreStrengths.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {strengths.map((strength: any, index: number) => (
            <div
              key={strength.id}
              className="bg-[var(--bg-card)] p-8 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{strength.icon}</div>
              <h3 className="text-xl font-heading font-bold text-[var(--text-primary)] mb-3">
                {strength.title}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {strength.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
