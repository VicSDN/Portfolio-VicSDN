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

  const [selectedImage, setSelectedImage] = useState<string | null>(null); 
  const handleCardClick = (image: string) => {
    setSelectedImage(image); 
  };


  const handleCloseModal = () => {
    setSelectedImage(null); 
  };

  return (
    <section className="fixed top-16 right-0 w-full md:w-1/2 h-full bg-deep-dark-blue p-6 overflow-y-auto">
      <span className="p-2 flex flex-col items-start my-2">
        <h1 className="text-2xl text-neutral-600 font-title font-bold mb-4">
          {t("achievements.title")}
        </h1>
        <p className="text-white text-opacity-90 tracking-wide text-base leading-relaxed">
          {t("achievements.description")}
        </p>
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 mt-6">
        {achievements.map((achievement, index) => (
       <Card
       key={index}
       image={Array.isArray(achievement.image) ? achievement.image[0] : achievement.image}
       title={achievement.title} 
       description={achievement.description}
       category={achievement.category}
       onCardClick={() => handleCardClick(
         Array.isArray(achievement.image) ? achievement.image[0] : achievement.image
       )} 
     />
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-1"
          onClick={handleCloseModal} 
        >
          <div
            className="relative w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg bg-black bg-opacity-10 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Imagen Grande"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 rounded-full p-2"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
