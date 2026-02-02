"use client";

import { useApp } from "../contexts/AppContext";
import enTranslations from "../locales/en.json";
import arTranslations from "../locales/ar.json";

const translations = {
  en: enTranslations,
  ar: arTranslations,
};

export function useTranslation() {
  const { language } = useApp();

  const t = (key: string): any => {
    const keys = key.split(".");
    let value: any = translations[language];

    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        // Fallback to English if translation is missing
        value = translations.en;
        for (const fallbackKey of keys) {
          value = value?.[fallbackKey];
        }
        break;
      }
    }

    return value || key;
  };

  return { t, language };
}
