"use client";

import Image from "next/image";
import { useMemo, useEffect, useRef, useState } from "react";
import { useApp } from "../../contexts/AppContext";

interface SeamlessInfiniteSliderProps {
  images: string[];
  alt?: string;
  className?: string;
  speed?: number; // pixels per second
}

/**
 * SeamlessInfiniteSlider - A true seamless conveyor-belt infinite slider
 * 
 * Features:
 * - Images re-enter immediately from the right when leaving from the left
 * - No waiting, no reset jump
 * - Continuous motion
 * - Speed-based animation with dynamic duration calculation
 * - GPU-optimized transforms
 */
export default function SeamlessInfiniteSlider({
  images,
  alt = "Gallery image",
  className = "",
  speed = 80, // pixels per second
}: SeamlessInfiniteSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(30); // fallback duration
  const { language } = useApp(); // Track language changes for RTL support

  // Duplicate images exactly twice for seamless loop
  const loopImages = useMemo(() => [...images, ...images], [images]);

  // Calculate dynamic duration based on track width and speed
  useEffect(() => {
    if (!trackRef.current) return;

    const calculateDuration = () => {
      const track = trackRef.current;
      if (!track) return;

      // Wait for next frame to ensure layout is complete
      requestAnimationFrame(() => {
        if (!track) return;

        // Get the actual width of the track (total width of all images)
        const trackWidth = track.scrollWidth;
        
        // Calculate duration: distance / speed
        // We move -50% of track width, so distance = trackWidth / 2
        const distance = trackWidth / 2;
        const calculatedDuration = Math.max(distance / speed, 10); // Minimum 10s

        setDuration(calculatedDuration);
      });
    };

    const restartAnimation = () => {
      const track = trackRef.current;
      if (!track) return;
      
      // Force animation restart by removing and re-adding the animation class
      track.style.animation = 'none';
      // Force reflow
      void track.offsetWidth;
      // Re-apply animation with current duration
      track.style.animation = '';
      track.style.animationDuration = `${duration}s`;
    };

    // Initial calculation with delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      calculateDuration();
      setTimeout(restartAnimation, 50);
    }, 100);

    // Use ResizeObserver to recalculate on size changes
    const resizeObserver = new ResizeObserver(() => {
      calculateDuration();
    });

    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    // Also recalculate on window resize
    window.addEventListener('resize', calculateDuration);
    
    // Recalculate when language/direction changes (for RTL support)
    const observer = new MutationObserver((mutations) => {
      // Only recalculate if dir or lang attribute changed
      const shouldRecalculate = mutations.some(mutation => 
        mutation.type === 'attributes' && 
        (mutation.attributeName === 'dir' || mutation.attributeName === 'lang')
      );
      
      if (shouldRecalculate) {
        // Recalculate after a delay to allow layout to update
        setTimeout(() => {
          calculateDuration();
          restartAnimation();
        }, 200);
      }
    });
    
    if (document.documentElement) {
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['dir', 'lang']
      });
    }

    return () => {
      clearTimeout(timeoutId);
      resizeObserver.disconnect();
      observer.disconnect();
      window.removeEventListener('resize', calculateDuration);
    };
  }, [loopImages.length, speed, images.length]);

  // Separate effect to restart animation when language changes
  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    
    // Restart animation when language changes
    const restartAnimation = () => {
      if (!track) return;
      
      // Force animation restart
      const currentDuration = track.style.animationDuration || `${duration}s`;
      track.style.animation = 'none';
      // Force reflow
      void track.offsetWidth;
      // Re-apply animation
      track.style.animation = '';
      track.style.animationDuration = currentDuration;
    };

    // Restart after a delay to allow layout to update
    const timeoutId = setTimeout(restartAnimation, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [language, duration]);

  return (
    <section
      className={`relative w-full overflow-hidden ${className}`}
      aria-label="Image gallery"
    >
      {/* Slider Track */}
      <div
        ref={trackRef}
        className="slider-track flex w-max"
        style={{
          animationDuration: `${duration}s`,
        } as React.CSSProperties}
      >
        {loopImages.map((image, index) => {
          const isDuplicate = index >= images.length;
          const imageIndex = index % images.length;
          
          return (
            <div
              key={`image-${index}`}
              className="flex-shrink-0 min-w-full sm:min-w-[50%] md:min-w-[33.333%] lg:min-w-[25%] xl:min-w-[20%]"
              aria-hidden={isDuplicate}
            >
              <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 w-full px-1 sm:px-2 md:px-3 lg:px-4">
                <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-md dark:shadow-lg border border-[var(--border-primary)] dark:border-[var(--border-secondary)] group transition-transform duration-300 hover:scale-105">
                  <Image
                    src={image}
                    alt={`${alt} ${imageIndex + 1}`}
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
          );
        })}
      </div>
    </section>
  );
}
