import React, { useState, useEffect } from "react";
import logo from "/assets/images/logo.webp";
import Github from "/assets/logos/Github.svg";
import Linkedin from "/assets/logos/Linkedin.svg";
import Twitter from "/assets/logos/Twitter.svg";

const SocialMedia: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 h-full w-[50%] flex flex-col items-center bg-light-gray transition-all duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={logo}
        alt="Logo"
        className="mt-4 max-h-[50vh] w-full object-contain sm:mt-24"
      />
      
      <h2
        className="text-xl font-title font-bold -mt-8 text-deep-dark-blue group text-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span className="transition duration-300 group-hover:text-sky-blue">
          Follow Me
        </span>
        {hovered && (
          <div className="flex justify-center mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 transition duration-300 text-sky-blue"
              viewBox="0 0 20 20"
              fill="currentColor"
              style={{ transform: "translateY(4px)" }}
            >
              <path
                fillRule="evenodd"
                d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </h2>

      <div className="flex space-x-4 mt-2 gap-3">
        <a
          href="https://github.com/VicSDN/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center transition duration-300 group"
        >
          <img
            src={Github}
            alt="GitHub"
            className="w-8 h-8 transform transition-transform duration-300 group-hover:scale-125 group-hover:filter group-hover:brightness-75"
          />
          <span className="mt-1 text-gray-400 transition duration-300 group-hover:text-sky-blue">
            GitHub
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/vicsdn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center transition duration-300 group"
        >
          <img
            src={Linkedin}
            alt="Linkedin"
            className="w-8 h-8 transform transition-transform duration-300 group-hover:scale-125 group-hover:filter group-hover:brightness-75"
          />
          <span className="mt-1 text-gray-400 transition duration-300 group-hover:text-sky-blue">
            LinkedIn
          </span>
        </a>

        <a
          href="https://x.com/VictorSDN"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center transition duration-300 group"
        >
          <img
            src={Twitter}
            alt="Twitter"
            className="w-8 h-8 transform transition-transform duration-300 group-hover:scale-125 group-hover:filter group-hover:brightness-75"
          />
          <span className="mt-1 text-gray-400 transition duration-300 group-hover:text-sky-blue">
            Twitter
          </span>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
