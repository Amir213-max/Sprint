"use client";

import OrganicImage from "./ui/OrganicImage";
import { useTranslation } from "../hooks/useTranslation";
import { useRef, useState, useEffect } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function AboutHero() {
  const { t } = useTranslation();
  const imageRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-[var(--bg-primary)] min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--accent)] rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--primary)] rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Text Content Section */}
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto text-center mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[var(--text-primary)] mb-4 leading-tight">
            {t("aboutPage.hero.title")}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed text-right rtl:text-right ltr:text-left max-w-3xl mx-auto">
            {t("aboutPage.hero.subtitle")}
          </p>
        </div>

        {/* Image Section */}
        <div 
          ref={imageRef}
          className="flex items-center justify-center perspective-1000 animate-zoom-in max-w-4xl mx-auto"
          style={{ 
            transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <OrganicImage
            src="/about us/1520159441501.jpg"
            alt={t("aboutPage.hero.title")}
            width={800}
            height={500}
            quality={85}
            className="w-full max-w-4xl h-auto shadow-3d-lg rounded-xl"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 800px"
          />
        </div>
      </div>
    </section>
  );
}
