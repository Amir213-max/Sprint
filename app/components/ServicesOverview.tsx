"use client";

import Image from "next/image";
import { useTranslation } from "../hooks/useTranslation";

export default function ServicesOverview() {
  const { t } = useTranslation();

  return (
    <section className="py-16 lg:py-24 bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[var(--text-primary)] text-center mb-6">
            {t("servicesPage.overview.title")}
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] text-center leading-relaxed mb-8">
            {t("servicesPage.overview.description")}
          </p>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/service/cartography-connection-earth-world-map-concept.jpg"
                alt={t("servicesPage.overview.title")}
                width={800}
                height={500}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
