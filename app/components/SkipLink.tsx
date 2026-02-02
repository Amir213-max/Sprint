"use client";

import { useTranslation } from "../hooks/useTranslation";

export default function SkipLink() {
  const { t } = useTranslation();

  return (
    <a
      href="#main-content"
      className="skip-link focus:top-0"
      aria-label="Skip to main content"
    >
      {t("navigation.home") === "الرئيسية" ? "انتقل إلى المحتوى الرئيسي" : "Skip to main content"}
    </a>
  );
}
