import React from "react";
import { useTranslation } from "react-i18next";

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
     <section className="fixed top-16 right-0 w-1/2 h-full bg-deep-dark-blue p-4">
      <h1 className="text-2xl font-bold">{t("projects.title")}</h1>
      <p className="mt-2">{t("projects.description")}</p>
    </section>  );
};

export default Projects;
