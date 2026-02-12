"use client";

import Image from "next/image";
import { useTranslation } from "../hooks/useTranslation";
import { useEffect, useRef, useState } from "react";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

export default function Hero() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sliderRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slides: Slide[] = [
    {
      id: 1,
      image: "/section_1.jpg",
      title: t("hero.headline"),
      subtitle: t("hero.subtitle"),
    },
    {
      id: 2,
      image: "/photos/shot-of-startup-business-team-brainstorming-and-working-on-laptop-and-computer-three-people-working-together-in-office-over-new-business-project-JLPSF25563.jpg",
      title: t("hero.headline"),
      subtitle: t("hero.subtitle"),
    },
    {
      id: 3,
      image: "/photos/K2-Criteo-Office-Curator-LARGE-102-scaled.jpg",
      title: t("hero.headline"),
      subtitle: t("hero.subtitle"),
    },
    {
      id: 4,
      image: "/photos/why_does_a_software_company_need_a_professional_services_team_0.jpg",
      title: t("hero.headline"),
      subtitle: t("hero.subtitle"),
    },
  ];

  // Auto-play slider
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [slides.length]);

  // Mouse move for subtle 3D effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 5;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="home"
      className="pt-24 lg:pt-32 bg-[var(--bg-primary)] relative overflow-hidden"
    >
      {/* Full Width Slider */}
      <div className="relative w-full h-[50vh] min-h-[300px] sm:h-[55vh] sm:min-h-[400px] md:h-[60vh] md:min-h-[450px] lg:h-[70vh] lg:min-h-[500px] perspective-1000">
        <div
          ref={sliderRef}
          className="relative w-full h-full overflow-hidden"
        >
          {/* Slides Container */}
          <div className="relative w-full h-full">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide
                    ? 'opacity-100 translate-x-0 scale-100 z-10'
                    : index < currentSlide
                    ? 'opacity-0 -translate-x-full scale-95'
                    : 'opacity-0 translate-x-full scale-95'
                }`}
                style={{
                  transform: index === currentSlide
                    ? `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) scale(1)`
                    : 'scale(0.95)',
                }}
              >
                <div
                  ref={index === currentSlide ? imageRef : null}
                  className="w-full h-full relative group"
                >
                  {/* Overlay Gradient - Enhanced for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 dark:from-[var(--bg-primary)]/80 dark:via-[var(--bg-primary)]/50 dark:to-[var(--bg-primary)]/80 z-10"></div>
                  {/* Additional overlay layer for text area - centered gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-transparent dark:via-black/20 z-10"></div>
                  
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    quality={85}
                    className="object-cover image-enhanced"
                    priority={index === 0}
                    sizes="100vw"
                  />
                  
                  {/* Content Overlay on Image */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                      {/* Semi-transparent background for text area */}
                      <div className="absolute inset-0 bg-black/20 dark:bg-black/30 backdrop-blur-[2px] rounded-2xl -z-10"></div>
                      
                      <div className="inline-block mb-4 px-4 py-2 rounded-full glass text-sm font-semibold text-white bg-[var(--accent)]/90 dark:bg-transparent dark:text-[var(--accent)] animate-fade-in shadow-lg backdrop-blur-sm">
                        {t("hero.headline")}
                      </div>
                      <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-3 sm:mb-4 leading-tight drop-shadow-2xl px-2 relative z-10">
                        {t("hero.headline")}
                      </h1>
                      <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-4 sm:mb-6 leading-relaxed drop-shadow-xl px-2 font-medium relative z-10">
                        {t("hero.subtitle")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full glass flex items-center justify-center text-white bg-black/40 hover:bg-[var(--accent)] hover:text-white dark:bg-transparent dark:hover:bg-[var(--accent)] transition-all duration-300 transform hover:scale-110 shadow-3d backdrop-blur-md border border-white/20"
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full glass flex items-center justify-center text-white bg-black/40 hover:bg-[var(--accent)] hover:text-white dark:bg-transparent dark:hover:bg-[var(--accent)] transition-all duration-300 transform hover:scale-110 shadow-3d backdrop-blur-md border border-white/20"
            aria-label="Next slide"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 lg:gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                  index === currentSlide
                    ? 'bg-[var(--accent)] w-8 lg:w-10 shadow-lg border border-white/30'
                    : 'bg-white/80 hover:bg-white w-3 border border-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Text Content Below Slider */}
      <div className="py-8 sm:py-12 md:py-16 lg:py-24 bg-[var(--bg-primary)] relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-slide-in-up">
            <div className="inline-block mb-4 px-4 py-2 rounded-full glass text-sm font-semibold text-[var(--accent)] animate-fade-in">
              {t("hero.belowSlider.headline")}
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[var(--text-primary)] mb-4 sm:mb-6 leading-tight px-2">
              {t("hero.belowSlider.headline")}
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[var(--text-secondary)] mb-6 sm:mb-8 leading-relaxed px-2">
              {t("hero.belowSlider.subtitle")}
            </p>
            <div className="animate-fade-in-up">
              <a
                href="#contact"
                className="group inline-block bg-[var(--primary)] text-[var(--text-inverse)] px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-[var(--primary-dark)] transition-all shadow-3d hover:shadow-3d-lg transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
              >
                <span className="relative z-10">{t("hero.ctaText")}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
