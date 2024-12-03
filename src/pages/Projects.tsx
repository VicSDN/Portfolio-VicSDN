import React from "react";
import { useTranslation } from "react-i18next";

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="fixed top-16 right-0 w-full md:w-1/2 h-full bg-deep-dark-blue p-6 overflow-y-auto">
      <div className="flex flex-col items-center mb-6">
        <div className="relative group w-fit">
          <div className="absolute -inset-2 filter blur-lg bg-dark-gray rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="absolute inset-0 rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-50 bg-dark-gray"></div>
        </div>
      </div>
      <h1 className="text-2xl text-neutral-600 font-title font-bold text-left mb-4">
        {t("projects.title")}
      </h1>
      <p className="text-steel-blue text-opacity-90 text-base leading-relaxed text-justify md:text-left">
        {t("projects.description")}
      </p>
    </section>
  );
};

export default Projects;
