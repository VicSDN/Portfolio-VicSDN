import React from "react";

interface AchievementProps {
  title: string;
  description: string;
  image: string;
}

const Achievement: React.FC<AchievementProps> = ({ title, description, image }) => {
  return (
    <div className="bg-white text-black p-4 rounded-md shadow-lg flex flex-col items-center">
      <img
        src={image}
        alt={title}
        className="w-32 h-32 object-cover rounded-md mb-4"
      />
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default Achievement;
