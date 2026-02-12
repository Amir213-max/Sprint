"use client";

import Image from "next/image";
import { useTranslation } from "../hooks/useTranslation";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function WhyUsHero() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--accent)] rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--primary)] rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div 
            ref={ref}
            className={`transition-all duration-1000 order-2 lg:order-1 ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
            }`}
          >
            <div className="inline-block mb-4 px-4 py-2 rounded-full glass text-sm font-semibold text-[var(--accent)]">
              {t("whyUsPage.hero.title")}
            </div>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[var(--text-primary)] mb-6 leading-tight">
              {t("whyUsPage.hero.title")}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
              {t("whyUsPage.hero.subtitle")}
            </p>
          </div>

          {/* Hero Image */}
          <div 
            ref={imageRef}
            className={`transition-all duration-1000 order-1 lg:order-2 ${
              imageVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
            }`}
          >
            <div className="w-full image-organic-bg">
              <div className="relative w-full h-[40vh] min-h-[300px] sm:h-[45vh] sm:min-h-[350px] md:h-[50vh] md:min-h-[400px] lg:h-[55vh] lg:min-h-[500px] rounded-2xl overflow-hidden shadow-3d-lg card-3d group">
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-[var(--primary)]/10 z-10 group-hover:from-[var(--accent)]/20 group-hover:to-[var(--primary)]/20 transition-all duration-500"></div>
                
                <Image
                  src="/photos/shot-of-startup-business-team-brainstorming-and-working-on-laptop-and-computer-three-people-working-together-in-office-over-new-business-project-JLPSF25563.jpg"
                  alt="Why Us"
                  fill
                  quality={90}
                  priority
                  className="object-cover image-enhanced transform group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
