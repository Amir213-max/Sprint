"use client";

import SeamlessInfiniteSlider from "./ui/SeamlessInfiniteSlider";

export default function MidPageSlider() {
  // All images from the website
  const images = [
    "/section_1.jpg",
    "/photos/shot-of-startup-business-team-brainstorming-and-working-on-laptop-and-computer-three-people-working-together-in-office-over-new-business-project-JLPSF25563.jpg",
    "/photos/K2-Criteo-Office-Curator-LARGE-102-scaled.jpg",
    "/photos/why_does_a_software_company_need_a_professional_services_team_0.jpg",
    "/photos/remote team meeting.png",
    "/photos/0_-PlYrowviB7dC2he.jpg",
    "/photos/ScreenShot2023-01-13at11.webp",
    "/about us/1520159441501.jpg",
    "/about us/annie-spratt-hCb3lIB8L8E-unsplash.jpg",
    "/service/57242.jpg",
    "/service/cartography-connection-earth-world-map-concept.jpg",
    "/service/group-multiethnic-business-people-discussing.jpg",
    "/customers/download (1).png",
    "/customers/download (2).png",
    "/customers/download (3).png",
    "/customers/download (4).png",
    "/customers/download.jpg",
    "/customers/download.png",
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SeamlessInfiniteSlider
          images={images}
          alt="Gallery image"
          className="rounded-2xl"
          speed={120}
        />
      </div>
    </section>
  );
}
