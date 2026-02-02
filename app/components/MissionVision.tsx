"use client";

import Image from "next/image";
import { useTranslation } from "../hooks/useTranslation";

export default function MissionVision() {
  const { t } = useTranslation();

  return (
    <section className="py-16 lg:py-24 bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[var(--text-primary)] text-center mb-6">
            {t("aboutPage.story.title")}
          </h2>
          <p className="text-lg text-[var(--text-secondary)] text-center leading-relaxed mb-8">
            {t("aboutPage.story.description")}
          </p>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/about us/annie-spratt-hCb3lIB8L8E-unsplash.jpg"
                alt={t("aboutPage.story.title")}
                width={800}
                height={500}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Mission */}
          <div className="bg-[var(--bg-card)] p-8 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-heading font-bold text-[var(--text-primary)] mb-4">
              {t("aboutPage.mission.title")}
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              {t("aboutPage.mission.description")}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[var(--bg-card)] p-8 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="text-4xl mb-4">👁️</div>
            <h3 className="text-2xl font-heading font-bold text-[var(--text-primary)] mb-4">
              {t("aboutPage.vision.title")}
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              {t("aboutPage.vision.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
