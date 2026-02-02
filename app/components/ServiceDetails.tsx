"use client";

import Image from "next/image";
import { useTranslation } from "../hooks/useTranslation";

export default function ServiceDetails() {
  const { t } = useTranslation();
  const benefits = t("servicesPage.details.benefits") as any[];

  return (
    <section className="py-16 lg:py-24 bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[var(--text-primary)] mb-6">
              {t("servicesPage.details.title")}
            </h2>
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed mb-8">
              {t("servicesPage.details.description")}
            </p>
            <div className="flex justify-center">
              <div className="w-full max-w-2xl rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/service/group-multiethnic-business-people-discussing.jpg"
                  alt={t("servicesPage.details.title")}
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit: any, index: number) => (
              <div
                key={benefit.id}
                className="bg-[var(--bg-card)] p-8 rounded-lg shadow-md hover:shadow-lg transition-all animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-heading font-bold text-[var(--text-primary)] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
