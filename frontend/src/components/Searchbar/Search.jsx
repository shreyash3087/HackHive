import React from "react";
import { BiSearchAlt } from "react-icons/bi";

export default function Search() {
  return (
    <div className="flex items-center justify-center p-4 dark:bg-[#5a5d77] ">
      <div className="relative w-full max-w-lg">
        <input
          type="text"
          id="search-bar"
          placeholder="Search for Hackathons"
          className="w-full border border-gray-300 rounded-md pl-3 pr-10 py-2 h-10"
        />
        <button className="absolute right-0 top-0 bottom-0 bg-blue-500 text-white px-3 py-2 rounded-r-md">
          <BiSearchAlt />
        </button>
      </div>
    </div>
  );
}
