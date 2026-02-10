"use client";

import Image from "next/image";
import { useTranslation } from "../hooks/useTranslation";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const { t } = useTranslation();
  const imageRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
    <section
      id="home"
      className="pt-24 lg:pt-32 pb-16 lg:pb-24 min-h-screen flex items-center bg-[var(--bg-primary)] relative overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--accent)] rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--primary)] rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left animate-slide-in-up">
            <div className="inline-block mb-4 px-4 py-2 rounded-full glass text-sm font-semibold text-[var(--accent)] animate-fade-in">
              {t("hero.headline")}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[var(--text-primary)] mb-6 leading-tight">
              <span className="block animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                {t("hero.headline")}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {t("hero.subtitle")}
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <a
                href="#contact"
                className="group inline-block bg-[var(--primary)] text-[var(--text-inverse)] px-8 py-4 rounded-lg font-semibold text-base hover:bg-[var(--primary-dark)] transition-all shadow-3d hover:shadow-3d-lg transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
              >
                <span className="relative z-10">{t("hero.ctaText")}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
            </div>
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
                src="/section_1.jpg"
                alt={t("hero.headline")}
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
