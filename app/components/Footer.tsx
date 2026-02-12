"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useTranslation } from "../hooks/useTranslation";

export default function Footer() {
  const { t } = useTranslation();

  const navigation = useMemo(
    () => [
      { label: t("navigation.home"), href: "/" },
      { label: t("navigation.about"), href: "/about" },
      { label: t("navigation.services"), href: "/services" },
      { label: t("navigation.whyUs"), href: "/why-us" },
      { label: t("navigation.process"), href: "/#process" },
      { label: t("navigation.clients"), href: "/#clients" },
      { label: t("navigation.contact"), href: "/#contact" },
    ],
    [t]
  );

  const socialLinks = [
    { id: "1", name: "LinkedIn", href: "#", icon: "in" },
    { id: "2", name: "Twitter", href: "#", icon: "tw" },
    { id: "3", name: "Facebook", href: "#", icon: "fb" },
    { id: "4", name: "Instagram", href: "#", icon: "ig" },
  ];

  return (
    <footer className="bg-[var(--primary-dark)] text-[var(--text-inverse)] py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2 animate-fade-in">
            <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3 sm:mb-4">
              {t("footer.companyName")}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 max-w-md" style={{ opacity: 0.9 }}>
              {t("footer.description")}
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 rtl:space-x-reverse">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[var(--accent)] transition-all transform hover:scale-110" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  aria-label={social.name}
                >
                  <span className="text-sm font-semibold">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h4 className="text-base sm:text-lg font-heading font-semibold mb-3 sm:mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
              {navigation.map((item) => {
                const isHashLink = item.href.startsWith("#");
                const Component = isHashLink ? "a" : Link;
                const props = isHashLink
                  ? { href: item.href }
                  : { href: item.href as any };
                
                return (
                  <li key={item.href}>
                    <Component
                      {...props}
                      className="hover:text-[var(--text-inverse)] transition-colors" style={{ color: 'var(--text-inverse)', opacity: 0.8 }}
                    >
                      {item.label}
                    </Component>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-lg font-heading font-semibold mb-4">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-2" style={{ color: 'var(--text-inverse)', opacity: 0.8 }}>
              <li>Email: info@sprint.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Business St, City, State 12345</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-8 text-center text-sm animate-fade-in" style={{ borderColor: 'rgba(255, 255, 255, 0.1)', color: 'var(--text-inverse)', opacity: 0.7 }}>
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
