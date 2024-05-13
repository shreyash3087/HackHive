import React from "react";
import logo from "../../assets/logo.svg";
import copyright from "../../assets/copyright_icon.svg";
import insta from "../../assets/instagram_icon.svg";
import linkedin from "../../assets/linkedin_icon.svg";
import whatsapp from "../../assets/whatsapp_icon.svg";
import facebook from "../../assets/facebook_icon.svg";
import twitter from "../../assets/twitter_icon.svg";

export default function Footer() {
	return (
		<div className='flex flex-wrap justify-between h-1/4 pt-8 bg-blue-400 bg-opacity-20 dark:bg-[#5a5d77]'>
			<div className='left relative left-16 mb-20 flex flex-col space-y-4'>
				<div className=''>
					<a href=''>
						<img src={logo} alt='' />
					</a>
					<div className='flex items-center mt-4'>
						<img src={copyright} />
						<span className='text-gray-600  font-[Nunito] text-[14.96px] dark:text-white'>
							copyright 2024, HackHive
						</span>
					</div>
				</div>
				<div>
					<h1 className='dark:text-white text-black font-bold font-[Nunito] text-[48px]  backdrop:text-[48px] leading-normal tracking-wider '>
						Empowering{" "}
						<span className='text-blue-500 font-sans '>Innovators</span>,
					</h1>
					<h1 className=' dark:text-white text-black font-bold font-[Nunito] text-[48px] leading-normal tracking-wider  '>
						Elevating{" "}
						<span className='text-orange-400 font-[Roboto] '>Software</span>.
					</h1>
				</div>
				<div className='flex items-center space-x-2 w-[207px] h-[35px] p-1 gap-1'>
					<a
						href=''
						className='border border-black rounded-full p-1 dark:bg-white'>
						<img src={insta} alt='' className='w-[13.6px] h-[14px]' />
					</a>
					<a
						href=''
						className='border border-black rounded-full p-1 dark:bg-white'>
						<img src={linkedin} alt='' className='w-[20px] h-[20px]' />
					</a>
					<a
						href=''
						className='border border-black rounded-full p-1 dark:bg-white'>
						<img src={whatsapp} alt='' className='w-[19.9px] h-[20px]' />
					</a>
					<a
						href=''
						className='border border-black rounded-full p-1 dark:bg-white'>
						<img src={facebook} alt='' className='w-[20px] h-[19.5px]' />
					</a>
					<a
						href=''
						className='border border-black rounded-full p-1 dark:bg-white'>
						<img src={twitter} alt='' className='w-[13.6px] h-[14px]' />
					</a>
				</div>
			</div>
			<div className='right flex relative mr-12 ml-8 mb-10 pr-10'>
				<div className='mx-12 space-y-3'>
					<h1 className='text-gray-600 font-semibold font-[Nunito] text-[18px] dark:text-white'>
						COMMUNITY
					</h1>
					<div className='space-y-1.5 text-gray-600 font-[Nunito] dark:text-white'>
						<p>Organize a hackathon</p>
						<p>Explore hackathons</p>
						<p>Code of conduct</p>
						<p>Brand Assets</p>
					</div>
				</div>
				<div className='mx-12 space-y-3'>
					<h1 className='text-gray-600 font-semibold font-[Nunito] text-[18px] dark:text-white'>
						COMPANY
					</h1>
					<div className='space-y-1.5 text-gray-600 text-[18px] font-[Nunito] dark:text-white'>
						<p>About</p>
						<p>Jobs</p>
						<p>Blogs</p>
						<p>Changeloge</p>
						<p>Privacy</p>
						<p>Terms</p>
					</div>
				</div>
				<div className='mx-12 space-y-3'>
					<h1 className='text-gray-600 font-semibold font-[Nunito] text-[18px] dark:text-white'>
						SUPPORT
					</h1>
					<div className='space-y-1.5 text-gray-600 font-[Nunito] dark:text-white'>
						<p>Help</p>
						<p>Refund Policy</p>
						<p>Status</p>
						<p>Contact Us</p>
					</div>
				</div>
			</div>
		</div>
	);
}
