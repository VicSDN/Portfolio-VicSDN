import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "../components/Card";

interface Project {
  image: string | string[];
  title: string;
  description: string;
  category: string;
  domain?: string;  
}

const Projects: React.FC = () => {
  const { t } = useTranslation("projects");
  const projects = (t("projects.list", { returnObjects: true }) as Project[]) || [];

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
          {t("projects.title")}
        </h1>
        <p className="text-white text-opacity-90 tracking-wide text-base leading-relaxed">
          {t("projects.description")}
        </p>
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 mt-6">
        {Array.isArray(projects) && projects.length > 0 ? (
          projects.map((project, index) => (
            <Card
              key={index}
              image={Array.isArray(project.image) ? project.image[0] : project.image}
              title={project.title}
              description={project.description}
              category={project.category}
              domain={project.domain}
              onCardClick={() =>
                handleCardClick(Array.isArray(project.image) ? project.image[0] : project.image)
              }
            />
          ))
        ) : (
          <p className="text-white">No projects available.</p>
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg bg-black bg-opacity-25 p-4 rounded-lg"
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

export default Projects;
