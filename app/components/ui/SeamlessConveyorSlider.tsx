"use client";

import Image from "next/image";
import { useMemo, useEffect, useRef, useState } from "react";

interface SeamlessConveyorSliderProps {
  images: string[];
  alt?: string;
  className?: string;
  speed?: number; // pixels per second
}

/**
 * SeamlessConveyorSlider - A true continuous conveyor belt infinite slider
 * 
 * Features:
 * - Speed-based animation (not cycle-based)
 * - Dynamic duration calculation using ResizeObserver
 * - True continuous motion (no reset pause)
 * - GPU-optimized transforms
 * - Responsive: 1-5 images based on screen size
 */
export default function SeamlessConveyorSlider({
  images,
  alt = "Gallery image",
  className = "",
  speed = 80, // pixels per second
}: SeamlessConveyorSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(30); // fallback duration
  const [marqueeSpeed, setMarqueeSpeed] = useState(speed);

  // Duplicate images multiple times to ensure seamless continuous loop
  // Each image appears immediately after it disappears
  const loopImages = useMemo(() => {
    // Repeat images 3 times to ensure smooth continuous loop
    // This ensures that when an image disappears from left, it appears from right immediately
    return [...images, ...images, ...images];
  }, [images]);

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
        // We move -33.333% of track width (since we have 3 sets of images)
        // This ensures when first set disappears, second set appears seamlessly
        const distance = trackWidth / 3;
        const calculatedDuration = Math.max(distance / marqueeSpeed, 10); // Minimum 10s

        setDuration(calculatedDuration);
      });
    };

    // Initial calculation with delay to ensure DOM is ready
    const timeoutId = setTimeout(calculateDuration, 100);

    // Use ResizeObserver to recalculate on size changes
    const resizeObserver = new ResizeObserver(() => {
      calculateDuration();
    });

    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    // Also recalculate on window resize
    window.addEventListener('resize', calculateDuration);

    return () => {
      clearTimeout(timeoutId);
      resizeObserver.disconnect();
      window.removeEventListener('resize', calculateDuration);
    };
  }, [loopImages.length, marqueeSpeed, images.length]);

  return (
    <section
      className={`relative w-full overflow-hidden ${className}`}
      aria-label="Image gallery"
    >
      {/* Slider Track with dynamic duration */}
      <div
        ref={trackRef}
        className="slider-track flex w-max"
        style={{
          '--marquee-speed': `${marqueeSpeed}px`,
          animationDuration: `${duration}s`,
        } as React.CSSProperties}
      >
        {loopImages.map((image, index) => {
          // Mark duplicates (after first set) as hidden for accessibility
          const isDuplicate = index >= images.length;
          const imageIndex = index % images.length;
          
          return (
            <div
              key={`image-${index}`}
              className="flex-shrink-0 min-w-full sm:min-w-[50%] md:min-w-[33.333%] lg:min-w-[25%] xl:min-w-[20%] px-1 sm:px-2 md:px-3 lg:px-4"
              aria-hidden={isDuplicate}
            >
              <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 w-full">
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
