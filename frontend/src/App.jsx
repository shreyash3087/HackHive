import { useState, useEffect } from "react";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Hackathons from "./Pages/Hackathons";
import BlogsPage from "./Pages/Blog";

function App() {
	const [darkMode, setDarkMode] = useState(() => {
		const savedMode = localStorage.getItem("darkMode");
		return savedMode === "true" ? true : false;
	});

	const toggleDarkMode = () => {
		setDarkMode((prevMode) => {
			const newMode = !prevMode;
			localStorage.setItem("darkMode", JSON.stringify(newMode));
			return newMode;
		});
	};

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [darkMode]);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={
							<Landing darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
						}
					/>
					<Route path='/login' element={<Login />} />
					<Route
						path='/hackathons'
						element={
							<Hackathons darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
						}
					/>
					<Route
						path='/blogs'
						element={
							<BlogsPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
