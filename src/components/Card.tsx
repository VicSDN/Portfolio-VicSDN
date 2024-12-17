import React from "react";

interface CardProps {
  image: string | string[];
  title: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ image, title, onClick }) => {
  const imageSrc = Array.isArray(image) ? image[0] : image;

  return (
    <div
      className="w-[75%] max-w-md h-48 sm:h-60 bg-cover bg-center rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
      onClick={onClick}
    >
      <img
        src={imageSrc} 
        alt={title}
        className="absolute inset-0 w-full h-full  object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-end justify-center">
        <h3 className="text-white text-opacity-90 tracking-wide text-base leading-relaxed  p-2 m-2 rounded-md bg-gradient-to-br from-blue-100 via-blue-950 to-cyan-950 p-1">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
