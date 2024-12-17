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
    <header className="fixed top-0 right-0 w-full lg:w-[50%] h-16 shadow-lg bg-navy-blue z-10 flex items-center justify-between px-4 sm:px-8">
      <div className="flex items-center justify-between w-full">
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "×" : "☰"}
        </button>

        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex lg:space-x-8 items-center flex-col lg:flex-row w-full lg:w-auto`}
        >
          <ul className="space-y-4 lg:space-y-0 lg:flex lg:space-x-8">
            <li>
              <Link to="/" className="text-lg text-white hover:text-sky-blue">
                {t("aboutMe.title")}
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="text-lg text-white hover:text-sky-blue"
              >
                {t("projects.title")}
              </Link>
            </li>
            <li>
              <Link
                to="/achievements"
                className="text-lg text-white hover:text-sky-blue"
              >
                {t("achievements.title")}
              </Link>
            </li>
          </ul>
          <div className="relative mt-4 lg:mt-0">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-lg focus:outline-none"
            >
              <img
                src={i18n.language === "es" ? SpanishFlag : EnglishFlag}
                alt={i18n.language === "es" ? "Español" : "English"}
                className="w-8 h-8 rounded-full"
              />
            </button>
            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-10 border">
                <li>
                  <button
                    onClick={() => handleLanguageChange("es")}
                    className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-200"
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
