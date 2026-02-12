import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import MidPageSlider from "./components/MidPageSlider";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Clients from "./components/Clients";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

import SkipLink from "./components/SkipLink";

export default function Home() {
  return (
    <>
      <SkipLink />
      <main id="main-content" className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <Header companyName="Sprint Marketing & Software Solutions" />
      <Hero />
      <About />
      <Services />
      <MidPageSlider />
      <WhyChooseUs />
      <Process />
      <Clients />
      <ContactCTA />
      <Footer />
      </main>
    </>
  );
}
