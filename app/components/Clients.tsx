"use client";

import Image from "next/image";
import { useTranslation } from "../hooks/useTranslation";

export default function Clients() {
  const { t } = useTranslation();
  const clientImages = [
    "/customers/download (1).png",
    "/customers/download (2).png",
    "/customers/download (3).png",
    "/customers/download (4).png",
    "/customers/download.jpg",
    "/customers/download.png",
  ];

  return (
    <section
      id="clients"
      className="py-16 lg:py-24 bg-[var(--bg-primary)]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[var(--text-primary)] text-center mb-12 lg:mb-16 uppercase tracking-tight animate-fade-in">
          {t("clients.title")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clientImages.map((imagePath, index) => (
            <div
              key={index}
              className="bg-[var(--bg-secondary)] rounded-lg p-4 flex items-center justify-center h-32 border border-[var(--border-primary)] hover:border-[var(--accent)] transition-all transform hover:scale-110 animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Image
                src={imagePath}
                alt={`Client ${index + 1}`}
                width={120}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
