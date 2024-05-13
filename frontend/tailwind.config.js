/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			backgroundImage: {
				"custom-background": "url('/src/assets/loginBackground.svg')",
				"gradient-bg-1":
					"linear-gradient(to bottom, #051937, #0b1d3e, #122146, #19244e, #202855)",
				"gradient-bg-2":
					"linear-gradient(to bottom, #202855, #252c54, #2a3053, #2e3351, #333750)",
				"gradient-bg-3":
					"linear-gradient(to bottom, #333750, #3d405a, #464a63, #50536d, #5a5d77)",
				"gradient-bg-4":
					"linear-gradient(to bottom, #5a5d77, #676983, #74768f, #81829b, #8e8fa8)",
			},
			fontFamily: {
				sans: ["Nunito Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};

