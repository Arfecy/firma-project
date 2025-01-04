/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				// Primary Colors
				primary: {
					DEFAULT: '#50C878', // Main Emerald Green
					light: '#68D490',  // Optional lighter shade
				},

				// Secondary Colors
				secondary: {
					DEFAULT: '#B6E5D8', // Mint Green
				},

				// Tertiary Colors
				tertiary: {
					DEFAULT: '#1C1C1C', // Charcoal Black
				},

				// Accent Colors
				accent: {
					DEFAULT: '#C9A86A', // Gold
				},
			},
		},
	},
	plugins: [],
}