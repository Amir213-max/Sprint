"use client";

import { useTranslation } from "../hooks/useTranslation";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import OrganicImage from "./ui/OrganicImage";

export default function About() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.3, triggerOnce: true });

  return (
    <section
      id="about"
      className="py-8 sm:py-12 md:py-16 lg:py-24 bg-[var(--bg-primary)] relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)]/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[var(--text-primary)] mb-3 sm:mb-4 uppercase tracking-tight px-2">
              {t("about.title")}
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] mx-auto rounded-full"></div>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] text-center leading-relaxed mb-6 sm:mb-8 px-2">
            {t("about.description")}
          </p>
        </div>

        {/* Team Image */}
        <div 
          ref={imageRef}
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            imageVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
          }`}
        >
          <div className="w-full">
            <OrganicImage
              src="/photos/shot-of-startup-business-team-brainstorming-and-working-on-laptop-and-computer-three-people-working-together-in-office-over-new-business-project-JLPSF25563.jpg"
              alt="Our Team"
              width={1200}
              height={600}
              quality={85}
              className="w-full h-auto max-w-full shadow-3d-lg"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
