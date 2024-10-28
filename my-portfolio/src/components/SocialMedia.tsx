import React from "react";
import logo from "../assets/logo.webp"

const SocialMedia: React.FC = () => {
  return (
    <div className="fixed top-0 h-full w-[50%] flex flex-col items-center bg-light-gray">
      <img src={logo} alt="Logo" className=" mt-4 w-[586px] h-[586px]" />

      <h2 className="text-xl font-bold">Follow Me</h2>
      <div className="flex space-x-4 mt-2">
        <a
          href="https://github.com/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          Twitter
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
