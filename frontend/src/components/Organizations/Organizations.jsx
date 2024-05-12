import React from "react";
import image7 from "../../assets/image 7.png";
import image8 from "../../assets/image 8.png";
import image9 from "../../assets/image 9.png";
import image10 from "../../assets/image 10.png";
import image11 from "../../assets/image 11.png";
import image12 from "../../assets/image 12.png";

export default function Organizations() {
  return (
    <div className="text-black font-Nunito  font-medium text-[19px] leading-normal tracking-wide w-auto mx-16 my-1vw mb-4vw">
      <p className="mb-0.8vw">Trusted by world's leading organizations</p>
      <div className="flex justify-around items-center border border-black rounded-lg w-80vw h-5vw mx-auto p-10px">
        <a href="">
          <img src={image7} alt="" className="w-6vw h-3vw" />
        </a>
        <a href="">
          <img src={image8} alt="" className="w-6vw h-3vw" />
        </a>
        <a href="">
          <img src={image9} alt="" className="w-6vw h-3vw" />
        </a>
        <a href="">
          <img src={image10} alt="" className="w-6vw h-3vw" />
        </a>
        <a href="">
          <img src={image11} alt="" className="w-6vw h-3vw" />
        </a>
        <a href="">
          <img src={image12} alt="" className="w-6vw h-3vw" />
        </a>
      </div>
    </div>
  );
}
