"use client";

import Image from "next/image";
import { useTranslation } from "../hooks/useTranslation";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function ClientTrust() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="py-16 lg:py-24 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)]/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 mb-8 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[var(--text-primary)] mb-4 uppercase tracking-tight">
            {t("whyUsPage.clientTrust.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed">
            {t("whyUsPage.clientTrust.description")}
          </p>
        </div>

        {/* Trust Image */}
        <div 
          ref={imageRef}
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            imageVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
          }`}
        >
          <div className="w-full rounded-xl overflow-hidden shadow-3d-lg card-3d group">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-[var(--primary)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <Image
              src="/photos/0_-PlYrowviB7dC2he.jpg"
              alt="Client Trust"
              width={1200}
              height={600}
              quality={85}
              className="w-full h-auto object-cover image-enhanced transform group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
