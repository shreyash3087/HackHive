import React from "react";
// import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly w-auto px-4 md:px-8 py-6">
      <div className="flex items-center space-x-48">
        <div>
        <a href="/">
          <img src={logo} alt="" className="w-72"/>
        </a>
      </div>
      <div className="flex m-auto w-1/3 list-none text-lg space-x-6">
        <li>
          <a href="/hackathons">Hackathon</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="/blogs">Blog</a>
        </li>
      </div>
      <div className="flex items-center m-auto space-x-6 mr-32">
        <button className="border border-gray-500 rounded-lg p-1.5 w-24">Host</button>
        <button className="border border-blue-700 bg-blue-500 text-white rounded-lg p-1.5 w-24"
          onClick={() => {
            navigate("/login");
          }}>
          Log In
        </button>
      </div>
    </div>
    </div>
  );
}
