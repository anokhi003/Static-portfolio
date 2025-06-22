/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}", // Ensures all source files are scanned
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '2rem',
			},
			fontFamily: {
				playfair: ["Playfair Display", 'serif'],
				alexandria: ["Alexandria", 'sans-serif'],
				adlam: ["ADLaM Display", "system-ui"],
				advent:["Advent Pro", 'sans-serif'],
				inter:["Inter", 'sans-serif'],
				sofia: ["Sofia Sans", 'sans-serif']
			},
			colors: {
				'background': "#011627",
				"purple1": "#EEEEEE",
				"black1": "#34332E",
				"blue1": "#41EAD4",
				"blue2": "#00C9E0",
				"white-10": "rgba(255, 255, 255, 10%)"
			},
			fontSize: {
				"heading": "72px",
				"small-heading": "40px",
				"subHeading": "24px",
				"small-subHeading": "20px",
				"body-1": "15px",
				"body-2": "18px",
				"top-heading":"120px"
			},
			lineHeight: {
				"heading": "79.2px",
				"subHeading": "36px",
				"body": "16px",
				"topHeading":"159px"
			},
			backgroundImage: {
				'pink-gradient': 'linear-gradient(109.88deg, #FFA7A7 5.17%, #A30CB5 66.98%, #00173A 112.14%)',
				'purple-gradient': 'linear-gradient(109.88deg, #A7CAFF 5.17%, #635FCF 66.98%, #00173A 112.14%)',
				'violet-gradient': 'linear-gradient(109.88deg, #1CD7D7 5.17%, #49CAA5 66.98%, #00173A 112.14%)',
				'green-gradient': 'linear-gradient(109.88deg, #1CD728 5.17%, #C1CA49 60.06%, #00173A 112.14%)',
				'radial-grey': "radial-gradient(100% 100% at 50% -4950%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
				'color-background': "linear-gradient(99.75deg, #FFA7A7 2.2%, #A30CB5 29.17%, #00173A 95.31%)",
				'line-blue-gradient': "linear-gradient(180deg, #09F4F4 0%, #00C9E0 100%)",
				'custom-gradient': `linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)),
						radial-gradient(100% 100% at 50% -4950%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)`,
			},
			boxShadow: {
				'button-shadow': '5px 15px 40px 0px #00C9E033',
			  },

		},
	},
	plugins: [],
}

