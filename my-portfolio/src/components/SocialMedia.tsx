import React from "react";
import logo from "../assets/logo.webp"
import Github from "../assets/Github.svg"
import Linkedin from "../assets/Linkedin.svg"
import Twitter from "../assets/Twitter.svg"

const SocialMedia: React.FC = () => {
  return (
    <div className="fixed top-0 -mb-20 h-full w-[50%] flex flex-col items-center bg-light-gray">
      <img src={logo} alt="Logo" className=" mt-4 w-[586px] h-[560px]" />

      <h2 className="text-xl font-bold -mt-8">Follow Me</h2>
      <div className="flex space-x-4 mt-2 gap-3">
        <a
          href="https://github.com/VicSDN/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <img src={Github} alt="GitHub" className="w-8 h-8" />
        </a>

        <a
          href="https://www.linkedin.com/in/vicsdn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <img src={Linkedin} alt="Linkedin" className="w-8 h-8" />
        </a>
        <a
          href="https://x.com/VictorSDN"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <img src={Twitter} alt="Twitter" className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
