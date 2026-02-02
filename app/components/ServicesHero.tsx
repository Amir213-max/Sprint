"use client";

import Image from "next/image";
import { useTranslation } from "../hooks/useTranslation";

export default function ServicesHero() {
  const { t } = useTranslation();

  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-[var(--bg-primary)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[var(--text-primary)] mb-6 leading-tight">
              {t("servicesPage.hero.title")}
            </h1>
            <p className="text-xl sm:text-2xl text-[var(--text-secondary)] leading-relaxed">
              {t("servicesPage.hero.subtitle")}
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="flex items-center justify-center animate-slide-in-right">
            <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/service/57242.jpg"
                alt={t("servicesPage.hero.title")}
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
