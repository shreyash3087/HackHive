import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ darkMode, toggleDarkMode }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-8 py-6 dark:bg-gradient-bg-1 dark:text-white">
      <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
        <a href="/">
          <img src={logo} alt="logo" className={`w-60 md:w-72 ${darkMode ? "invert" : ""}`} />
        </a>
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleDarkMode}
            className="bg-white text-black dark:bg-blue-500 dark:text-white rounded-lg p-1.5 border border-gray-500 ml-4"
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>
          <button
            onClick={toggleMenu}
            className="ml-4 text-2xl text-black dark:text-white"
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>
      <div className={`flex-col md:flex md:flex-row items-center justify-between w-full md:w-auto ${menuOpen ? "flex" : "hidden"} md:flex`}>
        <div className="flex flex-col md:flex-row list-none text-lg space-y-4 md:space-y-0 md:space-x-6 m-3">
          <li>
            <a href="/hackathons" className="hover:underline">Hackathon</a>
          </li>
          <li>
            <a href="/projects" className="hover:underline">Projects</a>
          </li>
          <li>
            <a href="/blogs" className="hover:underline">Blog</a>
          </li>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
          <button className="border border-gray-500 rounded-lg p-1.5 w-24">
            Host
          </button>
          <button
            className="border border-blue-700 bg-blue-500 text-white rounded-lg p-1.5 w-24"
            onClick={() => {
              navigate("/login");
            }}
          >
            Log In
          </button>
          <button
            onClick={toggleDarkMode}
            className="bg-white text-black dark:bg-blue-500 dark:text-white rounded-lg p-1.5 w-24 border border-gray-500 hidden md:block"
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>
        </div>
      </div>
    </div>
  );
}
