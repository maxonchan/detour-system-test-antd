import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import type { I18nProvider } from "@refinedev/core";
import jaTranslations from "./locales/ja.json";
import enTranslations from "./locales/en.json";

const savedLanguage = localStorage.getItem("i18nextLng") || "ja";

i18n.use(initReactI18next).init({
  resources: {
    ja: {
      translation: jaTranslations,
    },
    en: {
      translation: enTranslations,
    },
  },
  lng: savedLanguage,
  fallbackLng: "ja",
  interpolation: {
    escapeValue: false,
  },
});

export const i18nProvider: I18nProvider = {
  translate: (key: string, options?: any, defaultMessage?: string) => {
    return (i18n.t(key, { ...options, defaultValue: defaultMessage }) as string) || (defaultMessage ?? "");
  },
  changeLocale: (lang: string) => {
    localStorage.setItem("i18nextLng", lang);
    return i18n.changeLanguage(lang);
  },
  getLocale: () => i18n.language,
};

export default i18n;
