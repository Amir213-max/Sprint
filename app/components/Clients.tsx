"use client";

import Image from "next/image";
import { useTranslation } from "../hooks/useTranslation";
import { useApp } from "../contexts/AppContext";
import { useState } from "react";

export default function Clients() {
  const { t } = useTranslation();
  const { theme } = useApp();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // خريطة الملفات: [اسم في black logos, اسم في white logos]
  // الملفات المتطابقة بين المجلدين (26 ملف)
  const logoMapping: Array<[string, string]> = [
    ["logos_0001s_0000_PURE-WATER.png", "logos_0000_PURE-WATER.png"],
    ["logos_0001s_0001_Group-3.png", "logos_0001_Group-3.png"],
    ["logos_0001s_0002_WhatsApp-Image-2023-07-11-at-17.49.02.png", "logos_0002_WhatsApp-Image-2023-07-11-at-17.49.02.png"],
    ["logos_0001s_0003_Layer-7.png", "logos_0003_Layer-7.png"],
    ["logos_0001s_0004_2-مخلخ.png", "logos_0004_2-مخلخ.png"],
    ["logos_0001s_0005_logo.png", "logos_0005_logo.png"],
    ["logos_0001s_0006_Untitled-2.png", "logos_0006_Untitled-2.png"],
    ["logos_0001s_0007_Vector-Smart-Object.png", "logos_0007_Vector-Smart-Object.png"],
    ["logos_0001s_0008_Vector-Smart-Object.png", "logos_0008_Vector-Smart-Object.png"],
    ["logos_0001s_0009_Vector-Smart-Object.png", "logos_0009_Vector-Smart-Object.png"],
    ["logos_0001s_0010_Vector-Smart-Object.png", "logos_0010_Vector-Smart-Object.png"],
    ["logos_0001s_0011_Vector-Smart-Object.png", "logos_0011_Vector-Smart-Object.png"],
    ["logos_0001s_0012_4a6bccfc-fff1-4b0e-a68f-903d76028d63.png", "logos_0012_4a6bccfc-fff1-4b0e-a68f-903d76028d63.png"],
    ["logos_0001s_0013_Vector-Smart-Object.png", "logos_0013_Vector-Smart-Object.png"],
    ["logos_0001s_0014_Layer-6.png", "logos_0014_Layer-6.png"],
    ["logos_0001s_0015_Vector-Smart-Object.png", "logos_0015_Vector-Smart-Object.png"],
    ["logos_0001s_0016_New_Project-removebg-preview.png", "logos_0016_New_Project-removebg-preview.png"],
    ["logos_0001s_0017_O0m99SfAGuM05OtViXcZdWYPe0piWyvxhlLWimdI.png", "logos_0017_O0m99SfAGuM05OtViXcZdWYPe0piWyvxhlLWimdI.png"],
    ["logos_0001s_0018_LOGO.png", "logos_0018_LOGO.png"],
    ["logos_0001s_0019_Group-2.png", "logos_0019_Group-2.png"],
    ["logos_0001s_0021_120081003_1005930193211715_5608629871264922814_n.png", "logos_0021_120081003_1005930193211715_5608629871264922814_n.png"],
    ["logos_0001s_0022_Vector-Smart-Object.png", "logos_0022_Vector-Smart-Object.png"],
    ["logos_0001s_0023_Untitled-1.png", "logos_0023_Untitled-1.png"],
    ["logos_0001s_0024_WhatsApp-Image-2023-04-15-at-00.21.24(1).png", "logos_0024_WhatsApp-Image-2023-04-15-at-00.21.24(1).png"],
    ["logos_0001s_0025_فين-الاقي.png", "logos_0025_فين-الاقي.png"],
    ["logos_0001s_0026_0x0.png", "logos_0026_0x0.png"],
  ];

  // إنشاء مسارات الصور بناءً على الوضع الحالي
  const clientImages = logoMapping.map(([blackLogo, whiteLogo]) => {
    const folder = theme === "light" ? "black logos" : "white logos";
    const filename = theme === "light" ? blackLogo : whiteLogo;
    return `/logos/${folder}/${filename}`;
  });

  return (
    <section
      id="clients"
      className="py-8 sm:py-12 md:py-16 lg:py-24 bg-[var(--bg-primary)] relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-[var(--accent)] rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-[var(--primary)] rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[var(--text-primary)] mb-3 sm:mb-4 uppercase tracking-tight animate-slide-in-up px-2">
            {t("clients.title")}
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {clientImages.map((imagePath, index) => (
            <div
              key={index}
              className="group perspective-1000 flex items-center justify-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="relative transform-3d transition-all duration-700 ease-out animate-zoom-in overflow-visible"
                style={{
                  transform: hoveredIndex === index 
                    ? 'perspective(1000px) rotateY(5deg) rotateX(-3deg) translateZ(40px) scale(1.15)' 
                    : 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px) scale(1)',
                  animationDelay: `${index * 0.05}s`,
                  filter: hoveredIndex === index 
                    ? 'drop-shadow(0 20px 40px rgba(41, 95, 117, 0.4))' 
                    : 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1))'
                }}
              >
                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"
                  style={{
                    background: `radial-gradient(circle, var(--accent) 0%, transparent 70%)`,
                    transform: 'scale(1.5)',
                    zIndex: -1
                  }}
                />
                
                {/* Image Container */}
                <div className="relative z-10 transform transition-all duration-700 ease-out">
                  <Image
                    key={`${theme}-${index}`}
                    src={imagePath}
                    alt={`Client ${index + 1}`}
                    width={120}
                    height={75}
                    className="w-full h-auto object-contain transition-all duration-700 ease-out max-w-[120px]"
                    style={{
                      filter: hoveredIndex === index 
                        ? 'brightness(1.1) contrast(1.05)' 
                        : 'brightness(1) contrast(1)'
                    }}
                  />
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-2xl">
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12"
                    style={{
                      transform: hoveredIndex === index 
                        ? 'translateX(200%) skewX(-12deg)' 
                        : 'translateX(-200%) skewX(-12deg)',
                      transition: 'transform 1s ease-out'
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
