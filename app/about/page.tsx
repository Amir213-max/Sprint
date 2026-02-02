import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutHero from "../components/AboutHero";
import MissionVision from "../components/MissionVision";
import ValuesSection from "../components/ValuesSection";
import StatsSection from "../components/StatsSection";
import SkipLink from "../components/SkipLink";

export const metadata: Metadata = {
  title: "من نحن - سباق للتسويق والحلول البرمجية",
  description: "تعرف على شركة سباق للتسويق والحلول البرمجية، رؤيتنا، مهمتنا، وقيمنا. شركة رائدة في مجال التسويق الرقمي وتطوير البرمجيات.",
  keywords: ["من نحن", "عن الشركة", "التسويق الرقمي", "تطوير البرمجيات", "سباق"],
  openGraph: {
    title: "من نحن - سباق للتسويق والحلول البرمجية",
    description: "تعرف على شركة سباق للتسويق والحلول البرمجية، رؤيتنا، مهمتنا، وقيمنا.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <SkipLink />
      <main id="main-content" className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <Header companyName="Sprint Marketing & Software Solutions" />
      <AboutHero />
      <MissionVision />
      <ValuesSection />
      <StatsSection />
      <Footer />
      </main>
    </>
  );
}
