interface CardProps {
  image: string;
  title: string;
  description: string;
  category: string;
  onCardClick: () => void;
  showTitle?: boolean;
  domain?: string;  
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
        height: "240px",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={onCardClick}
    >
      <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
      <div className="relative p-4 sm:p-6 lg:p-8 z-10">
        <p className="text-sm uppercase tracking-widest font-bold bg-stone-500 bg-opacity-70 text-indigo-200 rounded-sm shadow-lg p-2">
          {category}
        </p>
        {showTitle && (
          <p className="text-xl font-bold text-light-gray sm:text-xl  cursor-pointer">
            {title}
          </p>
        )}
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-8 group-hover:translate-y-0">
          <p className="p-2  text-sm font-semibold bg-stone-500 bg-opacity-70 text-indigo-200">{description}</p>
        </div>
        {domain && (
  <div className="mt-2 text-center">
    <a
      href={domain}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-stone-600 bg-opacity-80 p-2 text-indigo-200 font-bold text-sm hover:underline transition-all duration-300 transform hover:scale-105"
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
