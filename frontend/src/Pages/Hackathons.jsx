import React, { useState, useEffect } from "react";
import HackathonCard from "../components/HackathonCard/HackathonCard";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import HeadingSection from "../components/HeadingSection/HeadingSection";

function Hackathons({ darkMode, toggleDarkMode }) {
	return (
		<>
			<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<HeadingSection
				darkMode={darkMode}
				toggleDarkMode={toggleDarkMode}
				title={"Hackathons Near You"}
			/>
			<HackathonCard darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<Footer />
		</>
	);
}

export default Hackathons;
