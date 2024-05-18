import React from "react";
import image7 from "../../assets/image 7.png";
import image8 from "../../assets/image 8.png";
import image9 from "../../assets/image 9.png";
import image10 from "../../assets/image 10.png";
import image11 from "../../assets/image 11.png";
import image12 from "../../assets/image 12.png";

export default function Organizations() {
  return (
    <div className="text-black font-[Nunito] font-medium text-[19px] leading-normal tracking-wide w-full px-4 md:px-16 py-4   dark:bg-gradient-bg-3">
      <p className="dark:text-white text-center text-2xl mb-8">
        Trusted by world's leading organizations
      </p>
      <div className="flex flex-wrap justify-around items-center border border-black rounded-lg w-full max-w-screen-lg mx-auto p-4 md:p-8">
        <a href="" className="flex justify-center items-center m-2 md:m-4 w-1/2 md:w-auto">
          <img src={image7} alt="Organization 1" className="w-24 md:w-32 h-auto" />
        </a>
        <a href="" className="flex justify-center items-center m-2 md:m-4 w-1/2 md:w-auto">
          <img src={image8} alt="Organization 2" className="w-24 md:w-32 h-auto" />
        </a>
        <a href="" className="flex justify-center items-center m-2 md:m-4 w-1/2 md:w-auto">
          <img src={image9} alt="Organization 3" className="w-24 md:w-32 h-auto" />
        </a>
        <a href="" className="flex justify-center items-center m-2 md:m-4 w-1/2 md:w-auto">
          <img src={image10} alt="Organization 4" className="w-24 md:w-32 h-auto" />
        </a>
        <a href="" className="flex justify-center items-center m-2 md:m-4 w-1/2 md:w-auto">
          <img src={image11} alt="Organization 5" className="w-24 md:w-32 h-auto" />
        </a>
        <a href="" className="flex justify-center items-center m-2 md:m-4 w-1/2 md:w-auto">
          <img src={image12} alt="Organization 6" className="w-24 md:w-32 h-auto" />
        </a>
      </div>
    </div>
  );
}
