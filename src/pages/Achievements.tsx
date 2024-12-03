import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import achievementsData from "../assets/achievements.json"; 

interface Achievement {
  title: string;
  description: string;
  image: string;
}
interface AchievementsData {
  en: Achievement[];
  es: Achievement[];
  [key: string]: Achievement[];
}

const Achievements: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [achievements, setAchievements] = useState<Achievement[]>([]);

  useEffect(() => {
    
    const language = i18n.language || "es"; 
    const data = achievementsData as AchievementsData;  
    setAchievements(data[language] || data.en);
  }, [i18n.language]);
  return (
    <section className="fixed top-16 right-0 w-1/2 h-full bg-deep-dark-blue p-4">
      <h1 className="text-2xl font-bold">{t("achievements.title")}</h1>
      <p className="mt-2">{t("achievements.description")}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-white text-black p-4 rounded-md shadow-lg flex flex-col items-center"
          >
            <img
              src={achievement.image}
              alt={achievement.title}
              className="w-32 h-32 object-cover rounded-md mb-4"
            />
            <h3 className="font-semibold text-xl">{achievement.title}</h3>
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
