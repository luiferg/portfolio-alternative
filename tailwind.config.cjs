/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				primary: '#D589F3',
				'primary-alt': '#CF63FC',
				secondary: '#5964D1',
				highlight:'#D7F440',
				black:'#000000',
				'black-alt':'#1A191D',
			}
		},
	},
	plugins: [],
}
