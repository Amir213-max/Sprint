"use client";

import { useTranslation } from "../hooks/useTranslation";

export default function ClientTrust() {
  const { t } = useTranslation();

  return (
    <section className="py-16 lg:py-24 bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[var(--text-primary)] mb-6 uppercase tracking-tight">
            {t("whyUsPage.clientTrust.title")}
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed">
            {t("whyUsPage.clientTrust.description")}
          </p>
        </div>
      </div>
    </section>
  );
}
