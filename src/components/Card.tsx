import React from "react";

interface CardProps {
  image: string | string[];  // Acepta un string o un array de strings
  title: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ image, title, onClick }) => {
  // Si 'image' es un arreglo, usa la primera imagen. Si es un string, usa directamente esa imagen.
  const imageSrc = Array.isArray(image) ? image[0] : image;

  return (
    <div
      className="w-[75%] h-48 sm:h-60 bg-cover bg-center rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
      onClick={onClick}
    >
      <img
        src={imageSrc} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
        <h3 className="text-white text-lg font-bold text-center">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
