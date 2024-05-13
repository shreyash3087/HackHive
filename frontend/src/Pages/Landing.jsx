import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/HeroSection/Hero";
import Organizations from "../components/Organizations/Organizations";
import Search from "../components/Searchbar/Search";
import FeaturedHackathonCard from "../components/FeaturedHackathons/FeaturedHackathons";
import Footer from "../components/Footer/Footer";

const Landing = ({ darkMode, toggleDarkMode }) => {
	return (
		<>
			<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<Organizations darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<Search darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<FeaturedHackathonCard
				darkMode={darkMode}
				toggleDarkMode={toggleDarkMode}
			/>
			<Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
		</>
	);
};

export default Landing;
