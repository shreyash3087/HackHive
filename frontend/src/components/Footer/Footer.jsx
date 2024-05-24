import { FaWhatsapp, FaInstagram, FaLinkedinIn, FaTwitter, FaFacebook } from "react-icons/fa";
import React from "react";
import logo from "../../assets/logo.svg";

export default function Footer({darkMode}) {

    const Year = new Date().getFullYear();

    return (
        <div className="relative" >
            <div className="absolute top-0 left-0 w-[100%] overflow-hidden bg-blue-200 dark:bg-[#8e8fa8] dark:bg-opacity-100 ">
                <div style= {{justifyContent: 'center' }} className='flex space-y-4  w-full md:w-auto '>
				    <a href='' className={` mb-4 ${darkMode ? "invert" : ""} `}>
					    <img className='flex justify-content-center p-4' src={logo} alt='HackHive logo' />
				    </a>
                </div>
                <div style={{display: 'flex' , justifyContent: 'space-between' }} className="lg:flex lg:justifyContent-space-between grid  lg:grid-cols-4 gap-1 lg:ml-20 lg:mr-20 md:ml-10 md:mr-10 sm:grid-cols-1 sm:flex " >
                    <div>
                        <div style= {{display: 'flex' , justifyContent: 'center' }} className="flex ">
                            <h2 className="text-[26px] text-black-500">
                            <b>EMPOWERING Innovators <br/> ELEVATING Softwares </b>
                            </h2>
                        </div>
                        <br/>
                        <li className="text-[28px] list-none font-semibold text-blue-500 py-1 uppercase">
                            Contact Us</li>
                            <div className="flex space-x-4">
                            <a style={{fontSize: "5vh"}} className="text-black hover:text-blue-500 transform hover:scale-150 
                            transition-all duration-150 ease-in-out" href=""> <FaWhatsapp />
                            </a>
                            <a  style={{fontSize: "5vh"}} className="text-black hover:text-blue-500 transform hover:scale-150
                             transition-all duration-150 ease-in-out" href="">  <FaLinkedinIn />
                            </a>
                            <a  style={{fontSize: "5vh"}}className="text-black hover:text-blue-500 transform hover:scale-150
                             transition-all duration-150 ease-in-out" href=""> <FaTwitter />
                            </a>
                            <a style={{fontSize: "5vh"}} className="text-black hover:text-blue-500 transform hover:scale-150
                             transition-all duration-150 ease-in-out" href=""> <FaInstagram />
                            </a>
                            <a style={{fontSize: "5vh"}} className="text-black hover:text-blue-500 transform hover:scale-150
                             transition-all duration-150 ease-in-out" href=""> <FaFacebook />
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <li className="text-[22px] list-none font-semibold text-blue-500  uppercase ">
                            Community
                        </li>
                        <li className="my-4 list-none">Organize a Hackathons</li>
                        <li className="my-4 list-none">Explore Hackathons</li>
                        <li className="my-4 list-none">Code of conduct</li>
                        <li className="my-4 list-none">Brand Assests</li>
                    </div>

                    <div>
                        <li className="text-[22px] list-none font-semibold text-blue-500  uppercase">
                            Company</li>
                        <li className="my-4 list-none">About Us</li>
                        <li className="my-4 list-none">Career</li>
                        <li className="my-4 list-none">Blogs</li>
                        <li className="my-4 list-none">Changelog</li>
                        <li className="my-4 list-none">Privacy & Terms </li>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-[22px] font-semibold text-blue-500  uppercase">Support</h2>
                        <p className="text-[16px] my-4">Help</p>
                        <p className="text-[16px] my-4">Refund Policy</p>
                        <p className="text-[16px] my-4">Status</p>

                    </div>
                </div>
                <h6 className="text-center font-bold">&copy; Copyright {Year} Hackhive</h6>
            </div>
        </div>
    );
};

