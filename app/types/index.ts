export interface NavigationItem {
  label: string;
  href: string;
}

export interface HeroData {
  headline: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Advantage {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  id: string;
  number: number;
  title: string;
  description: string;
}

export interface Client {
  id: string;
  name: string;
  logo?: string;
}

export interface SocialLink {
  id: string;
  name: string;
  href: string;
  icon: string;
}

export interface CompanyData {
  navigation: NavigationItem[];
  hero: HeroData;
  about: {
    title: string;
    description: string;
  };
  services: Service[];
  whyChooseUs: Advantage[];
  process: ProcessStep[];
  clients: Client[];
  contactCTA: {
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
  };
  footer: {
    companyName: string;
    description: string;
    navigation: NavigationItem[];
    socialLinks: SocialLink[];
    copyright: string;
  };
}
