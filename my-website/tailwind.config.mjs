/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1536px',
			},
			colors: {
				// light mode
				'bg-light': 'hsl(240, 62%, 95%)',
				'text-light': 'hsl(243, 61%, 7%)',
				'primary-light': 'hsl(243, 64%, 29%)',
				'secondary-light': 'hsl(310, 64%, 66%)',
				'accent-light': 'hsl(335, 64%, 42%)',
				// dark mode
				'bg-dark': 'hsl(240, 62%, 5%)',
				'text-dark': 'hsl(243, 61%, 93%)',
				'primary-dark': 'hsl(243, 64%, 71%)',
				'secondary-dark': 'hsl(310, 64%, 34%)',
				'accent-dark': 'hsl(335, 64%, 58%)'
			}
		},
	},
	plugins: [
		function ({ addVariant }) {
			addVariant('child', '& > *');
			addVariant('child-hover', '& > *:hover');
		}
	],
}
