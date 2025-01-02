import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "../components/Card";

interface Achievement {
  image: string | string[];
  title: string;
  description: string;
  projectImages?: string[];
  category: string;
}

const Achievements: React.FC = () => {
  const { t } = useTranslation("achievements");
  const achievements = (t("achievements.list", { returnObjects: true }) as Achievement[]) || [];

  const [currentProjectImageIndex, setCurrentProjectImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleNextProjectImage = () => {
    setCurrentProjectImageIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevProjectImage = () => {
    setCurrentProjectImageIndex((prevIndex) => (prevIndex - 1 + achievements.length) % achievements.length);
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

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <Card
            key={index}
            image={Array.isArray(achievement.image) ? achievement.image[0] : achievement.image}
            title={achievement.title}
            description={achievement.description}
            category={achievement.category}
          />
        ))}
      </div>

      {achievements.length > 0 && achievements[0]?.projectImages && (
        <div className="flex flex-col items-center gap-4 mt-6">
          <h3 className="text-xl text-white">Imágenes del Proyecto</h3>
          <div className="relative w-full max-w-lg mt-4">
            <img
              src={achievements[0].projectImages[currentProjectImageIndex]}
              alt={`Imagen del proyecto ${currentProjectImageIndex + 1}`}
              className={`w-full rounded-lg ${imageLoaded ? "" : "hidden"}`}
              onLoad={() => setImageLoaded(true)}
            />
            {!imageLoaded && <p className="text-white">Cargando imagen...</p>}
            {achievements[0].projectImages.length > 1 && (
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
        </div>
      )}
    </section>
  );
};

export default Achievements;
