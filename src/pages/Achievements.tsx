import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "../components/Card";
import Modal from "../components/Modal";

interface Achievement {
  image: string | string[];
  title: string;
  description: string;
  projectImages?: string[];
}

const Achievements: React.FC = () => {
  const { t } = useTranslation("achievements");
  const achievements =
    (t("achievements.list", { returnObjects: true }) as Achievement[]) || [];

  const [selectedAchievementIndex, setSelectedAchievementIndex] = useState<
    number | null
  >(null);
  const [currentProjectImageIndex, setCurrentProjectImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleModalOpen = (index: number) => {
    setSelectedAchievementIndex(index);
    setCurrentProjectImageIndex(0);
    setImageLoaded(false);
  };

  const handleModalClose = () => {
    setSelectedAchievementIndex(null);
    setCurrentProjectImageIndex(0);
    setImageLoaded(false);
  };

  const handleNextProjectImage = () => {
    if (
      selectedAchievementIndex !== null &&
      achievements[selectedAchievementIndex].projectImages
    ) {
      const projectImages =
        achievements[selectedAchievementIndex].projectImages;
      if (projectImages.length > 1) {
        setCurrentProjectImageIndex(
          (prevIndex) => (prevIndex + 1) % projectImages.length
        );
      }
    }
  };

  const handlePrevProjectImage = () => {
    if (
      selectedAchievementIndex !== null &&
      achievements[selectedAchievementIndex].projectImages
    ) {
      const projectImages =
        achievements[selectedAchievementIndex].projectImages;
      if (projectImages.length > 1) {
        setCurrentProjectImageIndex(
          (prevIndex) =>
            (prevIndex - 1 + projectImages.length) % projectImages.length
        );
      }
    }
  };

  return (
    <section className="fixed top-16 right-0 w-full md:w-1/2 h-full bg-deep-dark-blue p-6 overflow-y-auto">
      <span className="p-2 flex flex-col items-start my-2">
      <h1 className="text-2xl text-neutral-600 font-title font-bold mb-4">
        {t("achievements.title")}
      </h1>
      <p className="text-white text-opacity-90 tracking-wide text-base leading-relaxed ">
        {t("achievements.description")}
      </p>
      </span>
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-1 gap-6">
        {achievements.map((achievement, index) => (
          <Card
            key={index}
            image={Array.isArray(achievement.image) ? achievement.image[0] : achievement.image}
            title={achievement.title}
            onClick={() => handleModalOpen(index)}
          />
        ))}
      </div>

      {selectedAchievementIndex !== null && (
        <Modal onClose={handleModalClose}>
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl text-white font-title font-bold">
              {achievements[selectedAchievementIndex].title}
            </h2>
            <div className="relative w-full max-w-lg">
              <img
                src={Array.isArray(achievements[selectedAchievementIndex].image)
                  ? achievements[selectedAchievementIndex].image[0]
                  : achievements[selectedAchievementIndex].image}
                alt={`Imagen del logro`}
                className={`w-full rounded-lg ${imageLoaded ? "" : "hidden"}`}
                onLoad={() => setImageLoaded(true)} 
              />
              {!imageLoaded && <p className="text-white">Cargando imagen...</p>}
            </div>

            <p className="text-white text-opacity-90 text-center mt-4">
              {achievements[selectedAchievementIndex].description}
            </p>

            {achievements[selectedAchievementIndex].projectImages && (
              <>
                <h3 className="text-xl text-white mt-6">Imágenes del Proyecto</h3>
                <div className="relative w-full max-w-lg mt-4">
                  <img
                    src={achievements[selectedAchievementIndex].projectImages[currentProjectImageIndex]}
                    alt={`Imagen del proyecto ${currentProjectImageIndex + 1}`}
                    className={`w-full rounded-lg ${imageLoaded ? "" : "hidden"}`}
                    onLoad={() => setImageLoaded(true)} 
                  />
                  {!imageLoaded && <p className="text-white">Cargando imagen...</p>}
                  {achievements[selectedAchievementIndex].projectImages.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevProjectImage}
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white"
                      >
                        ◀
                      </button>
                      <button
                        onClick={handleNextProjectImage}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white"
                      >
                        ▶
                      </button>
                    </>
                  )}
                </div>
              </>
            )}

            <div className="flex gap-4 mt-4">
              <button
                onClick={() => setSelectedAchievementIndex(prevIndex => prevIndex !== null ? (prevIndex - 1 + achievements.length) % achievements.length : 0)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                {t("previous")}
              </button>
              <button
                onClick={() => setSelectedAchievementIndex(prevIndex => prevIndex !== null ? (prevIndex + 1) % achievements.length : 0)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                {t("next")}
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Achievements;
