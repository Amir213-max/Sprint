"use client";

import Image from "next/image";
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div 
            ref={ref}
            className={`text-center lg:text-left transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-block mb-4 px-4 py-2 rounded-full glass text-sm font-semibold text-[var(--accent)]">
              {t("aboutPage.hero.title")}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[var(--text-primary)] mb-6 leading-tight">
              {t("aboutPage.hero.title")}
            </h1>
            <p className="text-xl sm:text-2xl text-[var(--text-secondary)] leading-relaxed">
              {t("aboutPage.hero.subtitle")}
            </p>
          </div>

          {/* Right Column - Image with 3D Effect */}
          <div 
            ref={imageRef}
            className="flex items-center justify-center perspective-1000 animate-zoom-in"
            style={{ 
              transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-3d-lg card-3d relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 to-[var(--primary)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image
                src="/about us/1520159441501.jpg"
                alt={t("aboutPage.hero.title")}
                width={600}
                height={400}
                quality={85}
                className="w-full h-auto object-cover rounded-2xl image-enhanced transform group-hover:scale-110 transition-transform duration-500"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
              <div className="absolute inset-0 border-2 border-[var(--accent)]/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
