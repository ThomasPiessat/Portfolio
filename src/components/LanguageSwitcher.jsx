
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = useCallback((lng) => {
    i18n.changeLanguage(lng);
    // Optional: the detector will cache automatically, but this ensures it:
    localStorage.setItem("i18nextLng", lng);
  }, [i18n]);

  const current = i18n.resolvedLanguage || i18n.language;

  return (
    <div className="lang-switch" role="group" aria-label="Language">
      <button
        onClick={() => changeLanguage("en")}
        className={current === "en" ? "active" : ""}
        aria-pressed={current === "en"}
      >
        🇬🇧 EN
      </button>
      <button
        onClick={() => changeLanguage("fr")}
        className={current === "fr" ? "active" : ""}
        aria-pressed={current === "fr"}
      >
        🇫🇷 FR
      </button>
    </div>
  );
}
