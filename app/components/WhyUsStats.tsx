"use client";

import { useTranslation } from "../hooks/useTranslation";

export default function WhyUsStats() {
  const { t } = useTranslation();
  const stats = t("whyUsPage.stats.items") as any[];

  return (
    <section className="py-16 lg:py-24 bg-[var(--primary-dark)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white text-center mb-12 lg:mb-16 uppercase tracking-tight animate-fade-in">
          {t("whyUsPage.stats.title")}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat: any, index: number) => (
            <div
              key={stat.id}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[var(--accent)] mb-2">
                {stat.number}
              </div>
              <div className="text-lg sm:text-xl text-[var(--text-inverse)] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
