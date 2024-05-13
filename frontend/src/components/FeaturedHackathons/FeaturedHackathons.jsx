import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FeaturedHackathons = () => {
	const [hackathons, setHackathons] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`${import.meta.env.VITE_BACKEND_URL}hackathons`)
			.then((res) => {
				// console.log(res.data);
				setHackathons(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className='flex flex-wrap justify-center items-center p-10 dark:bg-gradient-bg-4'>
			{Array.isArray(hackathons) &&
				hackathons.map((hackathon) =>
					hackathon.featured == true ? (
						<div className='p-10 w-[45vw] flex' key={hackathon._id}>
							{/* Image */}
							<div className='flex items-center w-[40%]'>
								{hackathon.image ? (
									<img
										className='w-[200px] h-[200px] object-contain'
										src={hackathon.image}
									/>
								) : (
									<img
										className='w-[200px] h-[200px] object-contain'
										src={placeholderImage}
									/>
								)}
							</div>
							<div className=' flex flex-col gap-1 w-[60%]'>
								{/* Name */}
								<h1 className='text-2xl font-bold'>{hackathon.name}</h1>
								{/* Date */}
								<p className='text-lg flex gap-1'>
									<span className='text-green-500  bg-green-500/50 py-1 px-2 rounded-md'>
										{hackathon.date}
									</span>
									<span className='text-purple-500 bg-purple-500/50 py-1 px-2 rounded-md'>
										{hackathon.status}
									</span>
								</p>
								{/* Themes */}
								<div className='flex py-2 gap-1'>
									<span className='text-blue-500 py-1'>Themes :</span>
									{hackathon.themes.map((theme, key) => (
										<span
											key={key}
											className='text-blue-500 bg-blue-500/50 py-1 px-2 rounded-md'>
											{theme}
										</span>
									))}
								</div>
								{/* Location */}
								<div className='flex gap-1'>
									<p className='  text-red-500 bg-red-500/50 rounded-md py-1 px-2'>
										{hackathon.location}
									</p>

									{/* Participants */}
									<p className='text-yellow-500 bg-yellow-500/50 rounded-md py-1 px-2'>
										{hackathon.participants} Participants
									</p>
								</div>

								{/* {Prize} */}
								{hackathon.prizes === "None" ||
								hackathon.prizes === 0 ? null : (
									<p className='text-lg font-bold text-green-500'>
										Prize: {hackathon.prizes}
									</p>
								)}
								{/* Link */}
								<a
									className='bg-blue-500 p-3 text-white text-center rounded-lg'
									href={hackathon.link}>
									Apply Now
								</a>
							</div>
						</div>
					) : null
				)}
			<button
				onClick={() => {
					navigate("/hackathons");
				}}
				className='justify-center items-center gap-4 text-[16px] text-blue-500 border border-[#1E78FF] hover:bg-blue-500 hover:text-white m-auto duration-300 py-2 px-2 mt-10 w-[430px] mx-auto rounded-lg dark:bg-white dark:hover:bg-blue-500'>
				Load More
			</button>
		</div>
	);
};

export default FeaturedHackathons;
