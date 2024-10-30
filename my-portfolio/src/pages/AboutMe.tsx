import React from "react";
import { useTranslation } from "react-i18next";
import myPhoto from "../assets/myphoto.webp";

const AboutMe: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="fixed top-16 right-0 w-1/2 h-full bg-deep-dark-blue p-4">
      <div className="flex flex-col items-center">
        <img
          src={myPhoto}
          alt="myphoto"
          className="w-auto h-auto max-w-full max-h-48 mb-4 z-50 transition-transform transform hover:scale-150"
        />
      </div>
      <h1 className="text-3xl text-black font-title font-bold italic text-left mb-2">
        {t("aboutMe.title")}
      </h1>
      <p className="text-base text-white font-body italic leading-relaxed">
        {t("aboutMe.description")}
      </p>
    </section>
  );
};

export default AboutMe;
