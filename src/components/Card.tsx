import React from "react";

interface CardProps {
  image: string;
  title: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  category?: string;
  showCard?: string;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  buttonText,
  buttonHref,
  category,
  showCard,
}) => {
  const isVisible = !showCard || showCard === "all" || showCard === category?.toLowerCase();

  return isVisible ? (
    <div className="w-full px-4 md:w-1/2 xl:w-1/3">
      <div className="relative mb-12">
        <div className="overflow-hidden rounded-[10px]">
          <img src={image} alt={title} className="w-full" />
        </div>
        <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
          {category && <span className="text-primary mb-2 block text-sm font-medium">{category}</span>}
          <h3 className="text-dark dark:text-white mb-3 text-xl font-bold">{title}</h3>
          {description && <p className="text-body-color dark:text-dark-6 mb-5 text-sm">{description}</p>}
          {buttonText && buttonHref && (
            <a
              href={buttonHref}
              className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
            >
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </div>
  ) : null;
};

export default Card;
