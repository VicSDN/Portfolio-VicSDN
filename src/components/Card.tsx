interface CardProps {
  image: string;
  title: string;
  description: string;
  category: string;
  onCardClick: () => void;
  showTitle?: boolean;
  domain?: string;  // Añadir domain como opcional
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  category,
  onCardClick,
  showTitle = true,
  domain,
}) => {
  return (
    <a
      href="#"
      className="group relative block bg-black rounded-lg overflow-hidden shadow-lg"
      style={{
        width: "100%",
        height: "250px",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={onCardClick}
    >
      <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
      <div className="relative p-4 sm:p-6 lg:p-8 z-10">
        <p className="text-sm uppercase tracking-widest font-bold text-pink-400 bg-black bg-opacity-50 rounded-sm shadow-lg p-2">
          {category}
        </p>
        {showTitle && (
          <p className="text-xl font-bold text-light-gray sm:text-2xl mt-2 cursor-pointer">
            {title}
          </p>
        )}
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-8 group-hover:translate-y-0">
          <p className="text-sm font-semibold bg-black bg-opacity-50 text-pink-400">{description}</p>
        </div>
        {domain && (
  <div className="mt-2 text-center">
    <a
      href={domain}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black bg-opacity-80 p-2 text-pink-400 font-bold text-sm hover:underline transition-all duration-300 transform hover:scale-105"
    >
      {domain}
    </a>
  </div>
)}
      </div>
    </a>
  );
};

export default Card;
