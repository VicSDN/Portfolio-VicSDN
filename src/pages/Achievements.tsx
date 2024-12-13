import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "../components/Card";
import Modal from "../components/Modal";

interface Achievement {
  image: string ;
  title: string;
  description: string;
}

const Achievements: React.FC = () => {
  const { t } = useTranslation("achievements");
  const achievements = (t("achievements.list", { returnObjects: true }) as Achievement[]) || [];
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleModalOpen = (achievement: Achievement) => {
    setSelectedAchievement(achievement);
    setCurrentImageIndex(0);
  };

  const handleModalClose = () => {
    setSelectedAchievement(null);
  };

  const handleNextImage = () => {
    if (Array.isArray(selectedAchievement?.image)) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedAchievement.image.length);
    }
  };

  const handlePrevImage = () => {
    if (Array.isArray(selectedAchievement?.image)) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedAchievement.image.length) % selectedAchievement.image.length);
    }
  };

  return (
    <section className="fixed top-16 right-0 w-full md:w-1/2 h-full bg-deep-dark-blue p-6 overflow-y-auto">
      <span>
        <h1 className="text-2xl text-neutral-600 font-title font-bold text-left mb-4">
          {t("achievements.title")}
        </h1>
        <p className="text-white text-opacity-90 tracking-wide text-base leading-relaxed text-justify md:text-left">
          {t("achievements.description")}
        </p>
      </span>
      <div className="flex flex-col h-full">
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
            <div className="p-6 text-center flex flex-col items-center gap-8 w-3/4">
              <h2 className="text-2xl text-white text-opacity-90 font-title font-bold mb-4">
                {selectedAchievement.title}
              </h2>
              {Array.isArray(selectedAchievement?.image) ? (
                <div className="relative">
                  <img
                    src={selectedAchievement.image[currentImageIndex]}
                    alt={selectedAchievement.title}
                    className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 rounded-lg"
                  />
                  <button
                    onClick={handlePrevImage}
                    className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  >
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 group-hover:bg-white/50">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 19l-7-7 7-7"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  >
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 group-hover:bg-white/50">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              ) : (
                <img
                  src={selectedAchievement.image}
                  alt={selectedAchievement.title}
                  className="w-full rounded-lg"
                />
              )}
              <p className="text-white text-opacity-90 tracking-wide text-base leading-relaxed text-justify md:text-left">
                {selectedAchievement.description}
              </p>
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

