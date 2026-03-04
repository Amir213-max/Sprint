"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { useApp } from "../contexts/AppContext";
import { FaSnapchatGhost } from "react-icons/fa";

export default function Footer() {
  const { t, language } = useTranslation();
  const { theme } = useApp();

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
    { 
      id: "1", 
      name: "TikTok", 
      href: "https://www.tiktok.com/@sprint.marketing", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      color: "hover:bg-black hover:text-white"
    },
    { 
      id: "2", 
      name: "Instagram", 
      href: "https://www.instagram.com/sprintmarkting/", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: "hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 hover:text-white"
    },
    { 
      id: "3", 
      name: "Facebook", 
      href: "https://www.facebook.com/sprintmarketing1/", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: "hover:bg-[#1877F2] hover:text-white"
    },
    { 
      id: "4", 
      name: "Snapchat", 
      href: "https://www.snapchat.com/add/sprintmarketing?share_id=0y6bNJSvg7c&locale=ar-EG", 
      icon: <FaSnapchatGhost className="w-5 h-5" />,
      color: "hover:bg-[#FFFC00] hover:text-black"
    },
  ];

  return (
    <footer className="bg-[var(--primary-dark)] text-[var(--text-inverse)] py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2 animate-fade-in">
            <div className="mb-4 sm:mb-6">
              <Image
                key={theme}
                src={theme === "light" ? "/logo/logo---blue.png" : "/logo/logo---white.png"}
                alt={t("footer.companyName")}
                width={220}
                height={75}
                className="h-14 sm:h-20 lg:h-24 w-auto object-contain block"
                priority
                style={{
                 
                  animation: 'fadeIn 0.5s ease-in-out',
                  transition: 'opacity 0.5s ease-in-out'
                }}
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3 sm:mb-4" style={{ 
              color: theme === "dark" ? 'var(--text-primary)' : 'var(--text-inverse)'
            }}>
              {t("footer.companyName")}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 max-w-md" style={{ 
              color: theme === "dark" ? 'var(--text-secondary)' : 'var(--text-inverse)',
              opacity: theme === "dark" ? 1 : 0.9
            }}>
              {t("footer.description")}
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 rtl:space-x-reverse">
              {socialLinks.map((social, index) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 group ${social.color}`}
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    ...(social.name === 'Snapchat' && {
                      ...(language === 'ar' ? { marginRight: '0.75rem', marginLeft: '0' } : { marginLeft: '0.75rem', marginRight: '0' })
                    })
                  }}
                  aria-label={social.name}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.15) rotate(6deg) translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) rotate(0deg) translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span 
                    className={`transition-all duration-300 group-hover:scale-110 ${social.name === 'Snapchat' ? 'group-hover:text-black' : ''}`}
                    style={{
                      color: social.name === 'Snapchat' && theme === "dark" 
                        ? 'var(--text-secondary)' 
                        : social.name === 'Snapchat' 
                        ? 'var(--text-inverse)' 
                        : theme === "dark" 
                        ? 'var(--text-secondary)' 
                        : 'var(--text-inverse)'
                    }}
                  >
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h4 
              className="text-base sm:text-lg font-heading font-semibold mb-3 sm:mb-4"
              style={{
                color: theme === "dark" ? 'var(--text-primary)' : 'var(--text-inverse)'
              }}
            >
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
                      className="transition-colors" 
                      style={{ 
                        color: theme === "dark" ? 'var(--text-secondary)' : 'var(--text-inverse)',
                        opacity: theme === "dark" ? 1 : 0.8
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = theme === "dark" ? 'var(--text-primary)' : 'var(--text-inverse)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = theme === "dark" ? 'var(--text-secondary)' : 'var(--text-inverse)';
                      }}
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
            <h4 
              className="text-lg font-heading font-semibold mb-4"
              style={{
                color: theme === "dark" ? 'var(--text-primary)' : 'var(--text-inverse)'
              }}
            >
              {t("footer.contact")}
            </h4>
            <ul className="space-y-3 text-sm sm:text-base">
              <li className="flex items-start gap-2 rtl:gap-reverse">
                <span 
                  className="min-w-[60px] rtl:text-right ltr:text-left"
                  style={{ 
                    color: theme === "dark" ? 'var(--text-tertiary)' : 'var(--text-inverse)',
                    opacity: theme === "dark" ? 1 : 0.7
                  }}
                >
                  {t("footer.Email")}:
                </span>
                <div className="flex flex-col gap-1.5">
                  <a 
                    href="mailto:info@sprint-sa.net"
                    className="hover:text-[var(--accent)] transition-colors duration-300 underline decoration-transparent hover:decoration-[var(--accent)] break-all"
                    style={{ 
                      color: theme === "dark" ? 'var(--text-secondary)' : 'var(--text-inverse)',
                      opacity: theme === "dark" ? 1 : 0.9
                    }}
                  >
                    info@sprint-sa.net
                  </a>
                  <a 
                    href="mailto:director-maeketing@sprint-sa.net"
                    className="hover:text-[var(--accent)] transition-colors duration-300 underline decoration-transparent hover:decoration-[var(--accent)] break-all"
                    style={{ 
                      color: theme === "dark" ? 'var(--text-secondary)' : 'var(--text-inverse)',
                      opacity: theme === "dark" ? 1 : 0.9
                    }}
                  >
                    director-maeketing@sprint-sa.net
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-2 rtl:gap-reverse">
                <span 
                  className="min-w-[60px] rtl:text-right ltr:text-left"
                  style={{ 
                    color: theme === "dark" ? 'var(--text-tertiary)' : 'var(--text-inverse)',
                    opacity: theme === "dark" ? 1 : 0.7
                  }}
                >
                  {t("footer.Phone")}:
                </span>
                <div className="flex flex-col gap-1.5">
                  <a 
                    href="tel:+966565227485"
                    className="hover:text-[var(--accent)] transition-colors duration-300 underline decoration-transparent hover:decoration-[var(--accent)]"
                    dir="ltr"
                    style={{ 
                      color: theme === "dark" ? 'var(--text-secondary)' : 'var(--text-inverse)',
                      opacity: theme === "dark" ? 1 : 0.9
                    }}
                  >
                    +966 565 22 7485
                  </a>
                  <a 
                    href="tel:+966546348032"
                    className="hover:text-[var(--accent)] transition-colors duration-300 underline decoration-transparent hover:decoration-[var(--accent)]"
                    dir="ltr"
                    style={{ 
                      color: theme === "dark" ? 'var(--text-secondary)' : 'var(--text-inverse)',
                      opacity: theme === "dark" ? 1 : 0.9
                    }}
                  >
                    +966 546 34 8032
                  </a>
                  <a 
                    href="tel:+966508940436"
                    className="hover:text-[var(--accent)] transition-colors duration-300 underline decoration-transparent hover:decoration-[var(--accent)]"
                    dir="ltr"
                    style={{ 
                      color: theme === "dark" ? 'var(--text-secondary)' : 'var(--text-inverse)',
                      opacity: theme === "dark" ? 1 : 0.9
                    }}
                  >
                    +966 508 94 0436
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-2 rtl:gap-reverse">
                <span 
                  className="min-w-[60px] rtl:text-right ltr:text-left"
                  style={{ 
                    color: theme === "dark" ? 'var(--text-tertiary)' : 'var(--text-inverse)',
                    opacity: theme === "dark" ? 1 : 0.7
                  }}
                >
                  {t("footer.Address")}:
                </span>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=3951+Omar+Bin+Al-Khattab+Al-Far'i+Al-Malaz+District+Riyadh+Saudi+Arabia" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)] transition-colors duration-300 underline decoration-transparent hover:decoration-[var(--accent)]"
                  style={{ 
                    color: theme === "dark" ? 'var(--text-secondary)' : 'var(--text-inverse)',
                    opacity: theme === "dark" ? 1 : 0.9
                  }}
                >
                  {language === 'ar' 
                    ? '3951 طريق عمر بن الخطاب الفرعي، حي الملز، الرياض، المملكة العربية السعودية'
                    : '3951, Omar Bin Al-Khattab Al-Far\'i, Al-Malaz District, Riyadh, Saudi Arabia'
                  }
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div 
          className="border-t pt-8 text-center text-sm animate-fade-in" 
          style={{ 
            borderColor: 'rgba(255, 255, 255, 0.1)', 
            color: theme === "dark" ? 'var(--text-tertiary)' : 'var(--text-inverse)',
            opacity: theme === "dark" ? 1 : 0.7
          }}
        >
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
