"use client";

import Image, { ImageProps } from "next/image";
import { forwardRef } from "react";

/**
 * OrganicImage - A reusable component that wraps next/image
 * with a professional organic blob background wrapper.
 * 
 * Features:
 * - Automatic organic blob background
 * - Supports all next/image props
 * - GPU-friendly transforms
 * - Mobile optimized
 */
interface OrganicImageProps extends Omit<ImageProps, 'className'> {
  className?: string;
}

const OrganicImage = forwardRef<HTMLImageElement, OrganicImageProps>(
  ({ className = "", fill, width, height, ...imageProps }, ref) => {
    // If fill is used, we need a container with dimensions
    if (fill) {
      return (
        <div className="image-organic-bg" data-fill="true" style={{ width: '100%', height: '100%' }}>
          <Image
            {...imageProps}
            fill
            ref={ref}
            className={`organic-image-content ${className}`}
          />
        </div>
      );
    }

    // For regular images with width/height - make responsive
    return (
      <div className="image-organic-bg w-full max-w-full" style={{ maxWidth: width ? `${width}px` : '100%' }}>
        <Image
          {...imageProps}
          width={width}
          height={height}
          ref={ref}
          className={`organic-image-content w-full h-auto ${className}`}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1200px"
        />
      </div>
    );
  }
);

OrganicImage.displayName = "OrganicImage";

export default OrganicImage;
