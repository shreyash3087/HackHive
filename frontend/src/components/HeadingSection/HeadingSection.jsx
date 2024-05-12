import React from "react";

const HeadingSection = ({ title }) => {
  return (
    <div className="h-[98px] bg-[#9967DF] shadow-xl text-[36px] text-white rounded-r-full my-2  shadow-[#4400A3] w-[794px] flex flex-row justify-center align-middle items-center px-[16px] font-[Nunito] ">
      <h1>{title}</h1>
    </div>
  );
};

export default HeadingSection;
