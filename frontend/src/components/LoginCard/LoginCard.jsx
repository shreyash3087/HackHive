import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginCard = () => {
  return (
    <div className="w-[90vw] sm:w-[500px] rounded-2xl absolute top-[20vh] left-[5vw] sm:left-[calc(50vw-250px)] p-0 border-gray-400 border-[1px] font-Nunito  ">
      <div className="bg-[#1e78ff3e] text-[36px] sm:text-[48px] font-semibold text-center rounded-t-2xl font-Nunito  ">
        Login
      </div>
      <div>
        <div className="flex flex-row cursor-pointer justify-center items-center gap-4 text-[18px] border-[1px] border-[#8F8F8F] m-auto py-3 w-[80vw] sm:w-[430px] my-5 rounded-lg">
          <FcGoogle />
          <p>Continue with Google</p>
        </div>
        <div className="flex flex-row cursor-pointer justify-center items-center gap-4 text-[18px] border-[1px] border-[#8F8F8F] m-auto py-3 w-[80vw] sm:w-[430px] my-5 rounded-lg">
          <FaGithub />
          <p>Continue with Github</p>
        </div>
      </div>
      <div className="relative">
        <p className="text-center z-10  w-fit m-auto text-[14px]">OR</p>
        <hr className="absolute left-4 sm:left-9 w-[calc(50%-25px)] sm:w-[197px] top-[12px] z-0 border-black " />
        <hr className="absolute right-4 sm:right-9 w-[calc(50%-25px)] sm:w-[197px] top-[12px] z-0 border-black " />
      </div>
      <div>
        <div className="flex flex-col px-4 sm:px-9 mb-8 gap-2 ">
          <label htmlFor="email" className="text-[17px]">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="justify-center items-center bg-transparent gap-4 text-[16px] border-[1px] border-[#8F8F8F] m-auto py-2 px-2 w-[80vw] sm:w-[430px] rounded-lg"
          />
        </div>
        <div className="flex flex-col px-4 sm:px-9 gap-2 ">
          <label htmlFor="password" className="text-[17px]">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your Password"
            className="justify-center bg-transparent items-center gap-4 text-[16px] border-[1px] border-[#8F8F8F] m-auto py-2 px-2 w-[80vw] sm:w-[430px] rounded-lg"
          />
        </div>
        <p className="text-right text-[#1E78FF] text-[14px] mx-4 sm:mx-8 my-0">
          <a href="#">Forgot Password?</a>
        </p>
        <div className="flex flex-row justify-center">
          <button className="justify-center items-center gap-4 text-[16px] text-white bg-[#1E78FF] m-auto py-3 px-2 mt-6 w-[80vw] sm:w-[430px] mx-auto rounded-lg font-semibold">
            Login
          </button>
        </div>
        <div>
          <p className="text-right text-[#8F8F8F] text-[14px] mt-2 mx-4 sm:mx-8 mb-5">
            Don't have an account?{" "}
            <a href="#" className="text-[#1E78FF] underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
