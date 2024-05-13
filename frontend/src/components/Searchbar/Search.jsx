import React from "react";
import { BiSearchAlt } from "react-icons/bi";

export default function Search() {
	return (
		<div className='flex items-center justify-center pt-4 dark:bg-[#5a5d77]'>
			<div></div>
			<input
				type='text'
				id='search-bar'
				placeholder='Search for Hackathons'
				className='border border-gray-300 rounded-md pr-[400px] pl-3 py-2  h-10'
			/>
			<button className='bg-blue-500 text-white px-9 py-2 rounded-md ml-2'>
				Search
			</button>
		</div>
	);
}
