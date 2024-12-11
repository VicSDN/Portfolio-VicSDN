import React from "react";
import { useTranslation } from "react-i18next";
import myPhoto from "../assets/images/myphoto.webp";

const AboutMe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="fixed top-16 right-0 w-full md:w-1/2 h-full bg-deep-dark-blue p-6 overflow-y-auto">
      <div className="flex flex-col items-center mb-6">
        <div className="relative group w-fit">
          <div className="absolute -inset-2 filter blur-lg bg-dark-gray rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img
            src={myPhoto}
            alt={t("aboutMe.alt")}
            className="relative w-auto h-auto max-w-full max-h-48 mb-4 rounded-lg transform transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-50 bg-dark-gray"></div>
        </div>
      </div>
      <h1 className="text-2xl text-neutral-600 font-title font-bold text-left mb-4">
        {t("aboutMe.title")}
      </h1>
      <p className="text-steel-blue text-opacity-90 text-base leading-relaxed text-justify md:text-left">
        {t("aboutMe.description")}
      </p>
    </section>
  );
};

export default AboutMe;
