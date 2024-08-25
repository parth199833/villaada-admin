import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

type Language = {
  code: string;
  name: string;
  flag: string;
};

const languages: Language[] = [
  {
    code: "EN",
    name: "English",
    flag: "/images/flags/united-states.svg",
  },
  {
    code: "IT",
    name: "Italian",
    flag: "/images/flags/italy.svg",
  },
  // Add more languages here if needed
];

const HeaderLanguageDropDown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    languages[0],
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false); // Close the dropdown after selecting a language
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="text-gray-700 hover:bg-gray-50 flex items-center space-x-2 rounded-md  px-4 py-2 text-sm font-medium focus:outline-none"
      >
        <Image
          src={selectedLanguage.flag}
          alt={selectedLanguage.name}
          width={20}
          height={20}
          className="mr-2"
        />
        {selectedLanguage.code}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-45 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="none">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language)}
                className="text-gray-700 hover:bg-gray-100 block inline-flex w-full items-center px-4 py-2 text-sm"
              >
                <Image
                  src={language.flag}
                  alt={language.name}
                  width={20}
                  height={20}
                  className="mr-2"
                />
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderLanguageDropDown;
