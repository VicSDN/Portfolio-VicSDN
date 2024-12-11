// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import headerEN from "../locales/en/header.json";
import projectsEN from "../locales/en/projects.json";
import achievementsEN from "../locales/en/achievements.json"
import headerES from "../locales/es/header.json";
import projectsES from "../locales/es/projects.json";
import achievementsES from "../locales/es/achievements.json"


const resources = {
  en: {
    header: headerEN,
    projects: projectsEN,
    achievements: achievementsEN,
  },
  es: {
    header: headerES,
    projects: projectsES,
    achievements: achievementsES
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "en",
  ns: ["header", "projects","achievements"],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
