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
    <div className="flex flex-col h-full">
      {/* Achievements Section */}
      <section className="w-full h-full bg-deep-dark-blue p-4 md:p-6 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Modal */}
      {selectedAchievement && (
        <Modal onClose={handleModalClose}>
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">{selectedAchievement.title}</h2>
            <img
              src={selectedAchievement.image}
              alt={selectedAchievement.title}
              className="mb-4 mx-auto max-w-full h-auto rounded-lg"
            />
            <p className="text-gray-300">{selectedAchievement.description}</p>
            <button
              onClick={handleModalClose}
              className="mt-4 px-6 py-2 bg-primary text-white rounded-lg text-sm hover:bg-secondary transition"
            >
              {t("achievements.close", "Close")}
            </button>
          </div>
        </Modal>
      )}
    </div>
    </section>
  );
};

export default Achievements;
