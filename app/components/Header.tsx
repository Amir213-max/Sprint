"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [language]);

  const navigation = useMemo(
    () => [
      { label: t("navigation.home"), href: "/" },
      { label: t("navigation.about"), href: "/about" },
      { label: t("navigation.services"), href: "/services" },
      { label: t("navigation.whyUs"), href: "/why-us" },
      { label: t("navigation.clients"), href: "/#clients" },
    ],
    [t]
  );

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{ 
        backgroundColor: 'var(--bg-primary)',
        boxShadow: isScrolled ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none',
      }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 animate-fade-in">
            <Link
              href="/"
              className="flex items-center space-x-2 rtl:space-x-reverse group"
            >
              {/* Logo Image with Theme-based Animation */}
              <div className="relative">
                <div className="relative w-full h-full">
                  <Image
                    key={theme}
                    src={theme === "light" ? "/logo/logo---blue.png" : "/logo/logo---white.png"}
                    alt={companyName}
                    width={280}
                    height={100}
                    className="h-16 sm:h-20 lg:h-28 w-auto object-contain"
                    priority
                    style={{
                      filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
                      animation: 'fadeIn 0.5s ease-in-out',
                      transition: 'opacity 0.5s ease-in-out'
                    }}
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6 lg:gap-8 md:mr-6 lg:mr-8">
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
                  className="group text-sm font-medium transition-all duration-300 animate-fade-in-up text-[var(--text-secondary)] hover:text-[var(--primary)] relative perspective-1000"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) translateY(-2px) translateZ(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) translateY(0px) translateZ(0px)';
                  }}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent)] transition-all duration-300 group-hover:w-full"></span>
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
              className="p-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 mx-[7px]"
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

          {/* Mobile Menu Button & Controls */}
          <div className="md:hidden flex items-center gap-1.5 rtl:gap-reverse">
            {/* Mobile Language Switcher */}
            <div className="flex items-center space-x-1 rtl:space-x-reverse rounded-lg p-1" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
              <button
                onClick={() => setLanguage("en")}
                className="px-2.5 py-1 rounded text-xs font-medium transition-all"
                style={{
                  backgroundColor: language === "en" ? 'var(--primary)' : 'transparent',
                  color: language === "en" ? 'var(--text-inverse)' : 'var(--text-tertiary)'
                }}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("ar")}
                className="px-2.5 py-1 rounded text-xs font-medium transition-all"
                style={{
                  backgroundColor: language === "ar" ? 'var(--primary)' : 'transparent',
                  color: language === "ar" ? 'var(--text-inverse)' : 'var(--text-tertiary)'
                }}
              >
                AR
              </button>
            </div>

            {/* Mobile Theme Toggle */}
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
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            {/* Hamburger Menu Button */}
            <button
              ref={menuButtonRef}
              className="relative p-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              style={{ 
                backgroundColor: isMobileMenuOpen ? 'var(--hover-bg)' : 'var(--bg-tertiary)',
                color: 'var(--text-secondary)' 
              }}
              onMouseEnter={(e) => {
                if (!isMobileMenuOpen) {
                  e.currentTarget.style.backgroundColor = 'var(--hover-bg)';
                  e.currentTarget.style.color = 'var(--primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobileMenuOpen) {
                  e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }
              }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute top-0 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 top-2.5' : ''
                  }`}
                  style={{ transformOrigin: 'center' }}
                />
                <span
                  className={`absolute top-2.5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute top-5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 top-2.5' : ''
                  }`}
                  style={{ transformOrigin: 'center' }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 top-16 lg:top-20 bg-[var(--bg-overlay)] z-40 md:hidden transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Navigation Menu */}
        <div
          ref={mobileMenuRef}
          className={`md:hidden fixed top-16 lg:top-20 left-0 right-0 z-40 bg-[var(--bg-primary)] border-t transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen
              ? 'max-h-screen opacity-100 shadow-lg'
              : 'max-h-0 opacity-0'
          }`}
          style={{ 
            borderColor: 'var(--border-primary)',
            boxShadow: isMobileMenuOpen ? 'var(--shadow-lg)' : 'none'
          }}
        >
          <nav className="container mx-auto px-4 sm:px-6 py-6">
            <div className="flex flex-col space-y-1">
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
                    className="block py-3 px-4 rounded-lg text-base font-medium transition-all duration-300 hover:bg-[var(--hover-bg)] hover:translate-x-1 rtl:hover:translate-x-[-4px]"
                    style={{ 
                      color: 'var(--text-secondary)',
                      animationDelay: `${index * 0.05}s`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Component>
                );
              })}
            </div>
          </nav>
        </div>
      </nav>
    </header>
  );
}
