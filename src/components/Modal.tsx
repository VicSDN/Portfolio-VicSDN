import React from "react";
import { useTranslation } from "react-i18next";

const Modal: React.FC<{ onClose: () => void; children: React.ReactNode }> = ({
  onClose,
  children,
}) => {
  const { t } = useTranslation("common");

  return (
    <div className="fixed inset-0 flex items-center w-auto h-auto justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-deep-dark-blue p-6 rounded-lg max-w-lg w-full relative">
        {children}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300"
          aria-label={t("close")}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Modal;
