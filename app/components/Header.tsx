"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useApp } from "../contexts/AppContext";
import { useTranslation } from "../hooks/useTranslation";

interface HeaderProps {
  companyName: string;
}

export default function Header({ companyName }: HeaderProps) {
  const { t, language } = useTranslation();
  const { theme, toggleTheme, setLanguage } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{ 
        backgroundColor: 'var(--bg-primary)',
        boxShadow: isScrolled ? 'var(--shadow-md)' : 'var(--shadow-sm)'
      }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 animate-fade-in">
            <Link
              href="/"
              className="text-xl lg:text-2xl font-heading font-bold transition-colors"
              style={{ 
                color: 'var(--primary)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-dark)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--primary)'}
            >
              {companyName}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8 rtl:space-x-reverse">
            {navigation.map((item, index) => {
              const isHashLink = item.href.startsWith("#");
              const Component = isHashLink ? "a" : Link;
              const props = isHashLink
                ? { href: item.href }
                : { href: item.href as any };
              
              return (
                <Component
                  key={item.href}
                  {...props}
                  className="text-sm font-medium transition-colors animate-fade-in-up text-[var(--text-secondary)] hover:text-[var(--primary)]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </Component>
              );
            })}
          </div>

          {/* Controls: Language & Theme */}
          <div className="hidden md:flex md:items-center md:space-x-4 rtl:space-x-reverse">
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 rtl:space-x-reverse rounded-lg p-1" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
              <button
                onClick={() => setLanguage("en")}
                className="px-3 py-1 rounded text-sm font-medium transition-all"
                style={{
                  backgroundColor: language === "en" ? 'var(--bg-card)' : 'transparent',
                  color: language === "en" ? 'var(--primary)' : 'var(--text-tertiary)',
                  boxShadow: language === "en" ? 'var(--shadow-sm)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (language !== "en") {
                    e.currentTarget.style.color = 'var(--primary)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (language !== "en") {
                    e.currentTarget.style.color = 'var(--text-tertiary)';
                  }
                }}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("ar")}
                className="px-3 py-1 rounded text-sm font-medium transition-all"
                style={{
                  backgroundColor: language === "ar" ? 'var(--bg-card)' : 'transparent',
                  color: language === "ar" ? 'var(--primary)' : 'var(--text-tertiary)',
                  boxShadow: language === "ar" ? 'var(--shadow-sm)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (language !== "ar") {
                    e.currentTarget.style.color = 'var(--primary)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (language !== "ar") {
                    e.currentTarget.style.color = 'var(--text-tertiary)';
                  }
                }}
              >
                AR
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              style={{ 
                backgroundColor: 'var(--bg-tertiary)',
                color: 'var(--text-secondary)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--hover-bg)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)'}
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
              aria-pressed={theme === "dark"}
            >
              {theme === "light" ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2 rtl:space-x-reverse">
            {/* Mobile Language Switcher */}
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <button
                onClick={() => setLanguage("en")}
                className="px-2 py-1 rounded text-xs"
                style={{
                  backgroundColor: language === "en" ? 'var(--primary)' : 'var(--bg-tertiary)',
                  color: language === "en" ? 'var(--text-inverse)' : 'var(--text-tertiary)'
                }}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("ar")}
                className="px-2 py-1 rounded text-xs"
                style={{
                  backgroundColor: language === "ar" ? 'var(--primary)' : 'var(--bg-tertiary)',
                  color: language === "ar" ? 'var(--text-inverse)' : 'var(--text-tertiary)'
                }}
              >
                AR
              </button>
            </div>

            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
              style={{ color: 'var(--text-secondary)' }}
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
              aria-pressed={theme === "dark"}
            >
              {theme === "light" ? (
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            <button
              className="p-2 transition-colors"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in" style={{ borderColor: 'var(--border-primary)' }}>
            {navigation.map((item) => {
              const isHashLink = item.href.startsWith("#");
              const Component = isHashLink ? "a" : Link;
              const props = isHashLink
                ? { href: item.href }
                : { href: item.href as any };
              
              return (
                <Component
                  key={item.href}
                  {...props}
                  className="block py-2 text-base font-medium transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Component>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
