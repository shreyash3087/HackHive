import React from "react";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between pl-[150px]  pr-[150px] pt-3 w-80vw font-Nunito  font-medium">
      <div className="">
        <a href="/">
          <img src={logo} alt="" className="w-48 h-auto pt-1" />
        </a>
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-4 gap-16 pr-[195px] ">
          <li>
            <a href="/hackathons" className="font-semibold text-lg">
              Hackathon
            </a>
          </li>
          <li>
            <a href="" className="font-semibold text-lg">
              Projects
            </a>
          </li>
          <li>
            <a href="" className="font-semibold text-lg">
              Blog
            </a>
          </li>
        </ul>
        <div className="flex gap-2 ">
          <div>
            {" "}
            <button className="border border-gray-500 rounded-xl px-6 py-2 text-base font-semibold text-gray-700">
              Host
            </button>
          </div>
          <div>
            {" "}
            <button
              className="border border-blue-500 bg-blue-500 text-white rounded-xl px-4 py-2 ml-2 text-base font-semibold"
              onClick={() => {
                navigate("/login");
              }}
            >
              Log In/Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
