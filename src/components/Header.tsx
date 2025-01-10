import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SpanishFlag from "/assets/flags/SpanishFlag.svg";
import EnglishFlag from "/assets/flags/EnglishFlag.svg";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 right-0 w-full h-16 shadow-lg bg-navy-blue z-100 flex items-center justify-between p-4 lg:w-[50%]">
      <div className="flex items-center">
        <button
          className="text-white text-2xl sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-navy-blue sm:block sm:relative sm:w-auto sm:top-0`}
        >
          <ul className="flex flex-col justify-between sm:flex-row sm:space-x-4 lg:space-x-8 items-center p-4 sm:p-0">
            <li>
              <Link
                to="/"
                className="block text-lg text-white hover:text-sky-blue py-2 sm:py-0"
              >
                {t("aboutMe.title")}
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="block text-lg text-white hover:text-sky-blue py-2 sm:py-0"
              >
                {t("projects.title")}
              </Link>
            </li>
            <li>
              <Link
                to="/achievements"
                className="block text-lg text-white hover:text-sky-blue py-2 sm:py-0"
              >
                {t("achievements.title")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="text-lg focus:outline-none z-100"
        >
          <img
            src={i18n.language === "es" ? SpanishFlag : EnglishFlag}
            alt={i18n.language === "es" ? "Español" : "English"}
            className="w-8 h-8 rounded-full "
          />
        </button>
        {dropdownOpen && (
  <ul className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50 border">
    <li>
      <button
        onClick={() => handleLanguageChange("es")}
        className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-200 z-40"
      >
        <img
          src={SpanishFlag}
          alt="Español"
          className="w-5 h-5 mr-2"
        />
        Español
      </button>
    </li>
    <li>
      <button
        onClick={() => handleLanguageChange("en")}
        className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-200"
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
    </header>
  );
};

export default Header;