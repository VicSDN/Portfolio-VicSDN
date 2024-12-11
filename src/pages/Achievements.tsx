import React from "react";
import { useTranslation } from "react-i18next";
import Card from "../components/Card";

const Achievements: React.FC = () => {
const { t } = useTranslation("achievements"); 
const achievements = t("achievements.list", { returnObjects: true }) || [];

  return (
    <section className="fixed top-16 right-0 w-full md:w-1/2 h-full bg-deep-dark-blue p-6 overflow-y-auto">
      <h1 className="text-2xl font-bold text-white">{t("achievements.title")}</h1>
      <p className="mt-2 text-gray-300">{t("achievements.description")}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {Array.isArray(achievements) && achievements.length > 0 ? (
          achievements.map((achievement, index) => (
            <Card
              key={index}
              image={achievement.image}
              title={achievement.title}
              description={achievement.description}
            />
          ))
        ) : (
          <p className="text-gray-400">{t("achievements.no_data", "No achievements available")}</p>
        )}
      </div>
    </section>
  );
};

export default Achievements;
