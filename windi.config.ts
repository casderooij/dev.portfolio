import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif']
			},
			colors: {
				body: '#c4c4c4',
				dark: '#2c2c2c'
			}
		}
	},
	variants: {},
	plugins: []
});
