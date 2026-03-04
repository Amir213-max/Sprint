import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServicesHero from "../components/ServicesHero";
import ServicesOverview from "../components/ServicesOverview";
import ServicesCategories from "../components/ServicesCategories";
import ServiceDetails from "../components/ServiceDetails";
import ServicesProcess from "../components/ServicesProcess";
import ServicesCTA from "../components/ServicesCTA";
import SkipLink from "../components/SkipLink";

export const metadata: Metadata = {
  title: "خدماتنا - سباق للتسويق والحلول البرمجية",
  description: "اكتشف خدماتنا الشاملة في التسويق الرقمي وتطوير البرمجيات. نقدم حلولاً متكاملة لدفع نمو أعمالك وتحقيق أهدافك التجارية.",
  keywords: ["خدمات", "التسويق الرقمي", "تطوير البرمجيات", "تطبيقات الجوال", "حملات إعلانية", "سباق"],
  openGraph: {
    title: "خدماتنا - سباق للتسويق والحلول البرمجية",
    description: "اكتشف خدماتنا الشاملة في التسويق الرقمي وتطوير البرمجيات.",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <SkipLink />
      <main id="main-content" className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <Header companyName="Sprint Marketing & Software Solutions" />
        <ServicesHero />
        <ServicesOverview />
        <ServicesCategories />
        <ServiceDetails />
        <ServicesProcess />
        <ServicesCTA />
        <Footer />
      </main>
    </>
  );
}
