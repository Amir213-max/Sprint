"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";
type Theme = "light" | "dark";

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  // Default to Arabic as primary language
  const [language, setLanguageState] = useState<Language>("ar");
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Detect system language preference (Arabic if browser language starts with 'ar')
    const systemLanguage = typeof window !== "undefined" 
      ? (navigator.language.startsWith("ar") ? "ar" : "en")
      : "ar";
    
    // Detect system theme preference (first visit only)
    const systemTheme = typeof window !== "undefined" && window.matchMedia
      ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : "light";
    
    // Load from localStorage or use system preferences
    const savedLanguage = localStorage.getItem("language") as Language;
    const savedTheme = localStorage.getItem("theme") as Theme;
    
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ar")) {
      setLanguageState(savedLanguage);
    } else {
      // Use system preference if no saved preference
      setLanguageState(systemLanguage);
    }
    
    if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
      setThemeState(savedTheme);
    } else {
      // Use system preference if no saved preference (first visit only)
      setThemeState(systemTheme);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", language);
      document.documentElement.lang = language;
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    }
  }, [language, mounted]);

  useEffect(() => {
    // Apply theme immediately to prevent flash
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    // Persist theme to localStorage
    if (mounted) {
      localStorage.setItem("theme", theme);
    }
  }, [theme, mounted]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Always provide the context, even before mounting
  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
