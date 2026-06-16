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

const ITEMS_PER_PAGE = 4;

const Achievements: React.FC = () => {
  const { t } = useTranslation("achievements");
  const achievements = (t("achievements.list", { returnObjects: true }) as Achievement[]) || [];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(achievements.length / ITEMS_PER_PAGE);
  const currentItems = achievements.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  const handleCardClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="relative top-16 right-0 w-full sm:w-full md:w-1/2 lg:w-1/2 min-h-screen bg-deep-dark-blue p-6 mb-6 sm:mb-8 md:mb-10 ml-auto pb-12">
      <span className="p-2 flex flex-col items-start mb-6">
        <h1 className="text-2xl text-neutral-600 font-title font-bold mb-4">
          {t("achievements.title")}
        </h1>
        <p className="text-white text-opacity-90 tracking-wide text-base leading-relaxed">
          {t("achievements.description")}
        </p>
      </span>

      {/* Grid sin scroll */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {currentItems.map((achievement, index) => (
          <Card
            key={index}
            image={Array.isArray(achievement.image) ? achievement.image[0] : achievement.image}
            title={achievement.title}
            description={achievement.description}
            category={achievement.category}
            onCardClick={() =>
              handleCardClick(
                Array.isArray(achievement.image) ? achievement.image[0] : achievement.image
              )
            }
          />
        ))}
      </div>

      {/* Navegación por páginas */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            aria-label="Página anterior"
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition-colors"
          >
            ▲
          </button>

          <div className="flex gap-2 items-center">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Página ${i + 1}`}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === page ? "20px" : "8px",
                  background: i === page ? "white" : "rgba(255,255,255,0.3)",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            aria-label="Página siguiente"
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition-colors"
          >
            ▼
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center p-4"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg bg-black bg-opacity-10 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Modal"
              className="w-full h-auto max-h-[80vh] m-4 p-4 object-contain rounded-lg"
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
