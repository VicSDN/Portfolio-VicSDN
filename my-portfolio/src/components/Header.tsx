import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i118n/i118n";
import { Link } from "react-router-dom";
import SpanishFlag from "../assets/SpanishFlag.svg";
import EnglishFlag from "../assets/EnglishFlag.svg";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("es");

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 right-0 w-[50%] h-16 shadow-lg bg-navy-blue z-10 flex items-center justify-center">
      <nav className="flex items-center space-x-8 gap-8">
        <ul className="flex space-x-8 gap-8">
          <li>
            <Link
              to="/"
              className="text-lg text-deep-dark-blue hover:text-sky-blue"
            >
              {t("aboutMe.title")}
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-lg text-deep-dark-blue hover:text-sky-blue"
            >
              {t("projects.title")}
            </Link>
          </li>
          <li>
            <Link
              to="/achievements"
              className="text-lg text-deep-dark-blue hover:text-sky-blue"
            >
              {t("achievements.title")}
            </Link>
          </li>
        </ul>
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-lg text-deep-dark-blue hover:text-sky-blue focus:outline-none"
          >
            <img
              src={currentLanguage === "es" ? SpanishFlag : EnglishFlag}
              alt={currentLanguage === "es" ? "SpanishFlag" : "EnglishFlag"}
              className="inline-block w-8 h-8 rounded-full"
            />
          </button>
          {dropdownOpen && (
            <ul className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-10 border border-gray-200">
              <li className="hover:bg-gray-200 hover:border hover:border-blue-500 rounded-md">
                <button
                  onClick={() => handleLanguageChange("es")}
                  className="flex items-center w-full px-4 py-2 text-left text-gray-800"
                >
                  <img
                    src={SpanishFlag}
                    alt="Español"
                    className="w-5 h-5 mr-2"
                  />
                  Español
                </button>
              </li>
              <li className="hover:bg-gray-200 hover:border hover:border-blue-500 rounded-md">
                <button
                  onClick={() => handleLanguageChange("en")}
                  className="flex items-center w-full px-4 py-2 text-left text-gray-800"
                >
                  <img
                    src={EnglishFlag}
                    alt="English"
                    className="w-5 h-5 mr-2"
                  />
                  English
                </button>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
