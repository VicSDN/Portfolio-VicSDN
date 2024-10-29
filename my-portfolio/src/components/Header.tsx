import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i118n/i118n"; 
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 right-0 w-[50%] h-9 shadow-lg">
      <div className="p-4  bg-slate-600 flex flex-row">
        <nav className="mt-4 ">
          <ul className="mt-4 flex flex-row">
            <li>
              <Link to="/" className="text-lg">
                {t("aboutMe.title")}
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-lg">
                {t("projects.title")}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-4">
          <button onClick={() => i18n.changeLanguage("es")}>Español</button>
          <button onClick={() => i18n.changeLanguage("en")}>English</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
