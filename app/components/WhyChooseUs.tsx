"use client";

import { useTranslation } from "../hooks/useTranslation";

export default function WhyChooseUs() {
  const { t } = useTranslation();
  const advantages = t("whyChooseUs.items") as any[];

  return (
    <section className="py-16 lg:py-24 bg-[var(--bg-primary)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[var(--text-primary)] text-center mb-12 lg:mb-16 uppercase tracking-tight animate-fade-in">
          {t("whyChooseUs.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage: any, index: number) => (
            <div
              key={advantage.id}
              className="flex items-start space-x-4 rtl:space-x-reverse p-6 rounded-lg hover:bg-[var(--hover-bg)] transition-all transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold text-[var(--accent)]" style={{ backgroundColor: 'rgba(0, 188, 212, 0.1)' }}>
                {advantage.icon}
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-[var(--text-primary)] mb-2">
                  {advantage.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
