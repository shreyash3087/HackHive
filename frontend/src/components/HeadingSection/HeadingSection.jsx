import React from "react";

const HeadingSection = ({ title }) => {
  return (
    <div className="dark:bg-gradient-bg-1 dark:text-white m-0 p-0">
      <div className='bg-[#9967DF] shadow-xl text-white rounded-r-full  shadow-[#4400A3] flex flex-row justify-center items-center px-4 md:px-8 lg:px-16 h-[70px] md:h-[98px] w-full md:w-[600px] lg:w-[794px] text-[24px] md:text-[36px] font-[Nunito]'>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default HeadingSection;
