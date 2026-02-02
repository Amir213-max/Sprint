"use client";

import Image from "next/image";
import { useTranslation } from "../hooks/useTranslation";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="pt-24 lg:pt-32 pb-16 lg:pb-24 min-h-screen flex items-center bg-[var(--bg-primary)]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[var(--text-primary)] mb-6 leading-tight">
              {t("hero.headline")}
            </h1>
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t("hero.subtitle")}
            </p>
            <a
              href="#contact"
              className="inline-block bg-[var(--primary)] text-[var(--text-inverse)] px-8 py-4 rounded-lg font-semibold text-base hover:bg-[var(--primary-dark)] transition-all shadow-lg hover:shadow-xl transform hover:scale-105 animate-scale-in"
            >
              {t("hero.ctaText")}
            </a>
          </div>

          {/* Right Column - Image */}
          <div className="flex items-center justify-center animate-slide-in-right">
            <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/section_1.jpg"
                alt={t("hero.headline")}
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
