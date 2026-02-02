"use client";

import { useTranslation } from "../hooks/useTranslation";

export default function ValuesSection() {
  const { t } = useTranslation();
  const values = t("aboutPage.values.items") as any[];

  return (
    <section className="py-16 lg:py-24 bg-[var(--bg-primary)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[var(--text-primary)] text-center mb-12 lg:mb-16 uppercase tracking-tight animate-fade-in">
          {t("aboutPage.values.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value: any, index: number) => (
            <div
              key={value.id}
              className="bg-[var(--bg-secondary)] p-6 rounded-lg hover:shadow-lg transition-all transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-heading font-bold text-[var(--text-primary)] mb-3">
                {value.title}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
