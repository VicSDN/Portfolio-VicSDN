import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "../components/Card";
import Modal from "../components/Modal";

interface Achievement {
  image: string | string[]; // Acepta tanto una sola imagen como un array
  title: string;
  description: string;
  projectImages?: string[]; // Nuevas imágenes para cada proyecto
}

const Achievements: React.FC = () => {
  const { t } = useTranslation("achievements");
  const achievements =
    (t("achievements.list", { returnObjects: true }) as Achievement[]) || [];

  const [selectedAchievementIndex, setSelectedAchievementIndex] = useState<
    number | null
  >(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentProjectImageIndex, setCurrentProjectImageIndex] = useState(0); // Estado para el carrusel de proyectos

  const handleModalOpen = (index: number) => {
    setSelectedAchievementIndex(index);
    setCurrentImageIndex(0); // Reiniciar el índice de imagen al abrir
    setCurrentProjectImageIndex(0); // Reiniciar el índice del segundo carrusel
  };

  const handleModalClose = () => {
    setSelectedAchievementIndex(null);
    setCurrentImageIndex(0);
    setCurrentProjectImageIndex(0); // Reiniciar el índice al cerrar
  };

  const handleNextImage = () => {
    if (selectedAchievementIndex !== null) {
      const images = toImageArray(achievements[selectedAchievementIndex].image);
      if (images.length > 1) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }
  };

  const handlePrevImage = () => {
    if (selectedAchievementIndex !== null) {
      const images = toImageArray(achievements[selectedAchievementIndex].image);
      if (images.length > 1) {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
      }
    }
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

  const handleNextAchievement = () => {
    if (selectedAchievementIndex !== null) {
      const nextIndex = (selectedAchievementIndex + 1) % achievements.length;
      setSelectedAchievementIndex(nextIndex);
      setCurrentImageIndex(0);
      setCurrentProjectImageIndex(0); // Reiniciar el índice del segundo carrusel
    }
  };

  const handlePrevAchievement = () => {
    if (selectedAchievementIndex !== null) {
      const prevIndex =
        (selectedAchievementIndex - 1 + achievements.length) %
        achievements.length;
      setSelectedAchievementIndex(prevIndex);
      setCurrentImageIndex(0);
      setCurrentProjectImageIndex(0); // Reiniciar el índice del segundo carrusel
    }
  };

  // Convierte el campo `image` a un array para manejo uniforme
  const toImageArray = (image: string | string[]): string[] => {
    return Array.isArray(image) ? image : [image];
  };

  return (
    <section className="fixed top-16 right-0 w-full md:w-1/2 h-full bg-deep-dark-blue p-6 overflow-y-auto">
      <h1 className="text-2xl text-neutral-600 font-title font-bold mb-4">
        {t("achievements.title")}
      </h1>
      <p className="text-white text-opacity-90 tracking-wide text-base leading-relaxed">
        {t("achievements.description")}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <Card
            key={index}
            image={toImageArray(achievement.image)[0]} // Mostrar solo la primera imagen
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
                src={
                  toImageArray(achievements[selectedAchievementIndex].image)[
                    currentImageIndex
                  ]
                }
                alt={`Imagen ${currentImageIndex + 1} del logro`}
                className="w-full rounded-lg"
              />
              {toImageArray(achievements[selectedAchievementIndex].image)
                .length > 1 && (
                <>
                  {/* Botón para imagen anterior */}
                  <button
                    onClick={handlePrevImage}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white"
                  >
                    ◀
                  </button>
                  {/* Botón para imagen siguiente */}
                  <button
                    onClick={handleNextImage}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white"
                  >
                    ▶
                  </button>
                </>
              )}
            </div>

            <p className="text-white text-opacity-90 text-center mt-4">
              {achievements[selectedAchievementIndex].description}
            </p>

            {achievements[selectedAchievementIndex].projectImages && (
              <>
                <h3 className="text-xl text-white mt-6">
                  Imágenes del Proyecto
                </h3>
                <div className="relative w-full max-w-lg mt-4">
                  <img
                    src={
                      achievements[selectedAchievementIndex].projectImages[
                        currentProjectImageIndex
                      ]
                    }
                    alt={`Imagen del proyecto ${currentProjectImageIndex + 1}`}
                    className="w-full rounded-lg"
                  />
                  {achievements[selectedAchievementIndex].projectImages.length >
                    1 && (
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
                onClick={handlePrevAchievement}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                {t("previous")}
              </button>
              <button
                onClick={handleNextAchievement}
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
