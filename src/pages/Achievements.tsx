import React from "react";
import { useTranslation } from "react-i18next";
import Achievement from "../components/Achievement";

interface AchievementData {
  title: string;
  description: string;
  image: string;
}

const Achievements: React.FC = () => {
  const { t } = useTranslation();

  const achievements: AchievementData[] = Array.isArray(
    t("achievements.list", { returnObjects: true })
  )
    ? (t("achievements.list", { returnObjects: true }) as AchievementData[])
    : [];

  return (
    <section className="fixed top-16 right-0 w-full md:w-1/2 h-full bg-deep-dark-blue p-6 overflow-y-auto">
      <h1 className="text-2xl font-bold text-white">{t("achievements.title")}</h1>
      <p className="mt-2 text-gray-300">{t("achievements.description")}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {achievements.length > 0 ? (
          achievements.map((achievement, index) => (
            <Achievement
              key={index}
              title={achievement.title}
              description={achievement.description}
              image={achievement.image}
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
