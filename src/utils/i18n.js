import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import Backend from "i18next-http-backend";
const path = require("path");
i18n.on("languageChanged", function (lng) {
  if (typeof window !== "undefined") {
    window && window?.localStorage.setItem("lng", lng);
  }
});

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: process.env.NEXT_PUBLIC_ENV === "PROD" ? false : true,
    fallbackLng: "en",
    whitelist: ["en", "hn"],
    lng: "en", //Array of abbrevations of the languages
    interpolation: {
      escapeValue: false,
    },
    ns: ["translation"], //Names of the translation files
    backend: {
      loadPath: `/locales/{{lng}}/{{ns}}.json`,
      // loadPath: `https://cp-assets-web.s3.ap-south-1.amazonaws.com/courseWebview/content/{{lng}}/{{ns}}.json`, //Path to the translation files
      // addPath: `public/locales/hn/translation.json`,
    },
    detection: {
      order: ["localStorage"],
      lookupLocalStorage: "lng",
      checkWhitelist: true,
    },
    saveMissing: true,
    saveMissingTo: "all",
    react: {
      useSuspense: false,
    },
  });

export default i18n;
