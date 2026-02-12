"use client";

import Image from "next/image";
import { useMemo } from "react";

interface InfiniteImageMarqueeProps {
  images: string[];
  alt?: string;
  className?: string;
}

/**
 * InfiniteImageMarquee - A modern, responsive infinite image marquee component
 * 
 * Features:
 * - Seamless infinite loop animation
 * - Responsive: 1-5 images based on screen size
 * - Dark/Light mode support
 * - Pause on hover/touch
 * - Accessibility compliant
 * - GPU-optimized animations
 */
export default function InfiniteImageMarquee({
  images,
  alt = "Gallery image",
  className = "",
}: InfiniteImageMarqueeProps) {
  // Duplicate images exactly twice for seamless loop
  const duplicatedImages = useMemo(() => [...images, ...images], [images]);

  return (
    <section
      className={`relative w-full overflow-hidden ${className}`}
      aria-label="Image gallery"
    >
      {/* Gradient Fade Edges - Light Mode */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--bg-secondary)] to-transparent z-10 pointer-events-none dark:hidden" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--bg-secondary)] to-transparent z-10 pointer-events-none dark:hidden" />

      {/* Gradient Fade Edges - Dark Mode */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10 pointer-events-none hidden dark:block" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10 pointer-events-none hidden dark:block" />

      {/* Marquee Track */}
      <div className="marquee-track flex w-max">
        {/* First set of images */}
        {duplicatedImages.map((image, index) => (
          <div
            key={`first-${index}`}
            className="min-w-full sm:min-w-[50%] md:min-w-[33.333%] lg:min-w-[25%] xl:min-w-[20%] flex-shrink-0"
            aria-hidden={index >= images.length}
          >
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 w-full px-2 sm:px-3 md:px-4">
              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-md dark:shadow-lg border border-[var(--border-primary)] dark:border-[var(--border-secondary)] group transition-transform duration-300 hover:scale-105">
                {/* Dark Mode Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent opacity-0 dark:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                
                {/* Glow Effect - Dark Mode */}
                <div className="absolute inset-0 shadow-[0_0_20px_rgba(0,188,212,0.1)] opacity-0 dark:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <Image
                  src={image}
                  alt={`${alt} ${index + 1}`}
                  fill
                  quality={85}
                  priority={index < 2}
                  loading={index < 2 ? "eager" : "lazy"}
                  className="object-cover image-enhanced"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Second set for seamless loop */}
        {duplicatedImages.map((image, index) => (
          <div
            key={`second-${index}`}
            className="min-w-full sm:min-w-[50%] md:min-w-[33.333%] lg:min-w-[25%] xl:min-w-[20%] flex-shrink-0"
            aria-hidden="true"
          >
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 w-full px-2 sm:px-3 md:px-4">
              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-md dark:shadow-lg border border-[var(--border-primary)] dark:border-[var(--border-secondary)] group transition-transform duration-300 hover:scale-105">
                {/* Dark Mode Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent opacity-0 dark:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                
                {/* Glow Effect - Dark Mode */}
                <div className="absolute inset-0 shadow-[0_0_20px_rgba(0,188,212,0.1)] opacity-0 dark:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <Image
                  src={image}
                  alt={`${alt} ${index + 1}`}
                  fill
                  quality={85}
                  loading="lazy"
                  className="object-cover image-enhanced"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
