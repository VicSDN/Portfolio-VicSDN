import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "../components/Card";
import Modal from "../components/Modal";

interface Achievement {
  image: string;
  title: string;
  description: string;
}

const Achievements: React.FC = () => {
  const { t } = useTranslation("achievements");
  const achievements = (t("achievements.list", { returnObjects: true }) as Achievement[]) || [];
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const handleModalOpen = (achievement: Achievement) => {
    setSelectedAchievement(achievement);
  };

  const handleModalClose = () => {
    setSelectedAchievement(null);
  };

  return (
     <section className="fixed top-16 right-0 w-full md:w-1/2 h-full bg-deep-dark-blue p-6 overflow-y-auto">
      <span>
      <h1 className="text-2xl text-neutral-600 font-title font-bold text-left mb-4">
        {t("achievements.title")}
      </h1>
      <p className="text-steel-blue text-opacity-90 text-base leading-relaxed text-justify md:text-left">
        {t("achievements.description")}
      </p>
      </span>
    <div className="flex flex-col h-full ">
      <section className="w-full h-full bg-deep-dark-blue p-12 md:p-6 overflow-y-auto">
        <div className="grid grid-row place-items-center sm:grid-row-1 gap-6">
          {Array.isArray(achievements) && achievements.length > 0 ? (
            achievements.map((achievement, index) => (
              <Card
                key={index}
                image={achievement.image}
                title={achievement.title}
                onClick={() => handleModalOpen(achievement)}
              />
            ))
          ) : (
            <p className="text-gray-400 text-center">
              {t("achievements.no_data", "No achievements available")}
            </p>
          )}
        </div>
      </section>
      {selectedAchievement && (
        <Modal onClose={handleModalClose}>
          <div className="p-6 text-center">
            <h2 className="text-2xl text-white text-opacity-90 font-title font-bold mb-4">{selectedAchievement.title}</h2>
            <img
              src={selectedAchievement.image}
              alt={selectedAchievement.title}
              className="mb-4 mx-auto max-w-full h-auto rounded-lg"
            />
            <p className="text-gray-300">{selectedAchievement.description}</p>
            <button
              onClick={handleModalClose}
              className="flex items-center justify-center w-40 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300 ease-in-out"
            >
              {t("close", { ns: "common" })}
            </button>
          </div>
        </Modal>
      )}
    </div>
    </section>
  );
};

export default Achievements;
