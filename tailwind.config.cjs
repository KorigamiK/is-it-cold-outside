/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		"./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    extend: {
			colors: {
				primary: {
					DEFAULT: "#ff9e9f",
					50: "#f6f6f6",
				},
			},
		},
  },
  plugins: [],
}
