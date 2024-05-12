import React from "react";

export default function Search() {
  return (
    <div className="flex justify-center items-center">
      <input
        type="text"
        id="search-bar"
        className="border border-black h-12 w-80 px-4 rounded-lg"
        placeholder="Search for Hackathons"
      />
      <button className="bg-blue-500 text-white rounded-lg hover:shadow-md h-12 w-24 ml-12">
        Search
      </button>
    </div>
  );
}
