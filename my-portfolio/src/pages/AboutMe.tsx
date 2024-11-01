import React from "react";
import { useTranslation } from "react-i18next";
import myPhoto from "../assets/myphoto.webp";

const AboutMe: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="fixed top-16 right-0 w-1/2 h-full bg-deep-dark-blue p-4">
      <div className="flex flex-col items-center">
        <div className="relative group w-fit">
          <div className="absolute -inset-2 filter blur-lg bg-[#2C2C2C] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
          <img
            src={myPhoto}
            alt="myphoto"
            className="relative w-auto h-auto max-w-full max-h-48 mb-4 z-10 transition-transform transform group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-50 bg-[#2C2C2C] z-0"></div>
        </div>
      </div>
      <h1 className="text-2xl text-black font-title font-bold italic text-left mb-2 ">
        {t("aboutMe.title")}
      </h1>
      <p className=" text-white font-body italic leading-relaxed">
        {t("aboutMe.description")}
      </p>
    </section>
  );
};

export default AboutMe;
