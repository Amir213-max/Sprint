import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhyUsHero from "../components/WhyUsHero";
import CoreStrengths from "../components/CoreStrengths";
import Differentiators from "../components/Differentiators";
import WhyUsStats from "../components/WhyUsStats";
import ClientTrust from "../components/ClientTrust";
import Testimonials from "../components/Testimonials";
import Technologies from "../components/Technologies";
import WhyUsCTA from "../components/WhyUsCTA";
import SkipLink from "../components/SkipLink";

export const metadata: Metadata = {
  title: "لماذا نحن - سباق للتسويق والحلول البرمجية",
  description: "اكتشف لماذا تختار سباق للتسويق والحلول البرمجية. خبرة واسعة، جودة استثنائية، شفافية كاملة، والتزام راسخ بتحقيق نتائج ملموسة لعملائنا.",
  keywords: ["لماذا نحن", "مميزاتنا", "قوتنا", "خبرة", "جودة", "سباق"],
  openGraph: {
    title: "لماذا نحن - سباق للتسويق والحلول البرمجية",
    description: "اكتشف لماذا تختار سباق للتسويق والحلول البرمجية. خبرة واسعة، جودة استثنائية، والتزام راسخ بتحقيق النجاح.",
    type: "website",
  },
};

export default function WhyUsPage() {
  return (
    <>
      <SkipLink />
      <main id="main-content" className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <Header companyName="Sprint Marketing & Software Solutions" />
        <WhyUsHero />
        <CoreStrengths />
        <Differentiators />
        <WhyUsStats />
        <Testimonials />
        <Technologies />
        <ClientTrust />
        <WhyUsCTA />
        <Footer />
      </main>
    </>
  );
}
