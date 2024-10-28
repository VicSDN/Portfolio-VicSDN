import React from "react";
import { useTranslation } from "react-i18next";

const AboutMe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-2xl font-bold">{t("aboutMe.title")}</h1>
      <p className="mt-2">{t("aboutMe.description")}</p>
    </div>
  );
};

export default AboutMe;
