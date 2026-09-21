import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
// locales
import enTranslation from "./locales/en.json";
import zhTranslation from "./locales/zh.json";

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: enTranslation,
        },
        zh: {
          translation: zhTranslation,
        },
      },
      fallbackLng: "en",
      supportedLngs: ["zh", "en"],
      load: "languageOnly",
      detection: {
        order: ["localStorage"],
        caches: ["localStorage"],
      },
      interpolation: {
        escapeValue: false,
      },
    });
}

export default i18n;
