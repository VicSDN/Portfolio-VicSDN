import React from "react";
import { useTranslation } from "react-i18next";

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-2xl font-bold">{t("projects.title")}</h1>
      <p className="mt-2">{t("projects.description")}</p>
    </div>
  );
};

export default Projects;
