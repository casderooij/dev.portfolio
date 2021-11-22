import path from 'path';
import adapterStatic from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import { windi } from 'svelte-windicss-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [windi({ configPath: './windi.config.js' }), sveltePreprocess()],

	kit: {
		adapter: adapterStatic(),
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$data: path.resolve('./src/data'),
					$components: path.resolve('./src/components'),
					$styles: path.resolve('./src/styles')
				}
			},
			plugins: []
		}
	}
};

export default config;
