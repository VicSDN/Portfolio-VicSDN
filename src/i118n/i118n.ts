// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import headerEN from "../locales/en/header.json";
import projectsEN from "../locales/en/projects.json";
import achievementsEN from "../locales/en/achievements.json"
import commonEN from "../locales/en/common.json"
import headerES from "../locales/es/header.json";
import projectsES from "../locales/es/projects.json";
import achievementsES from "../locales/es/achievements.json";
import commonES from "../locales/es/common.json";



const resources = {
  en: {
    header: headerEN,
    projects: projectsEN,
    achievements: achievementsEN,
    common:commonEN
  },
  es: {
    header: headerES,
    projects: projectsES,
    achievements: achievementsES,
    common: commonES
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "en",
  ns: ["header", "projects", "achievements","common"],
  interpolation: {
    escapeValue: false,
  },
  returnObjects: true, 
});

export default i18n;
