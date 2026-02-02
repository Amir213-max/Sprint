"use client";

import { useTranslation } from "../hooks/useTranslation";

export default function Process() {
  const { t } = useTranslation();
  const steps = t("process.steps") as any[];

  return (
    <section
      id="process"
      className="py-16 lg:py-24 bg-[var(--bg-secondary)]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[var(--text-primary)] text-center mb-12 lg:mb-16 uppercase tracking-tight animate-fade-in">
          {t("process.title")}
        </h2>
        <div className="max-w-5xl mx-auto">
          {/* Desktop: Horizontal Timeline */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8 relative">
            {/* Timeline Line */}
            <div className="absolute top-12 left-0 right-0 h-0.5" style={{ backgroundColor: 'rgba(0, 188, 212, 0.3)' }}></div>
            {steps.map((step: any, index: number) => (
              <div
                key={step.id}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-[var(--bg-card)] rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-[var(--accent)] z-10 transform hover:scale-110 transition-transform focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2">
                  <span className="text-3xl font-heading font-bold text-[var(--text-primary)]">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-bold text-[var(--text-primary)] mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile: Vertical Timeline */}
          <div className="lg:hidden space-y-8">
            {steps.map((step: any, index: number) => (
              <div
                key={step.id}
                className="flex items-start space-x-4 rtl:space-x-reverse animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-accent-cyan rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                  <span className="text-2xl font-heading font-bold text-white">
                    {step.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold text-[var(--text-primary)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
