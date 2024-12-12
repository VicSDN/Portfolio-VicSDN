import React from "react";

interface CardProps {
  image: string;
  title: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ image, title, onClick }) => {
  return (
    <div
      className="relative w-full h-48 sm:h-60 bg-cover bg-center rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
      style={{ backgroundImage: `url(${image})` }}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
        <h3 className="text-white text-lg font-bold text-center">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
