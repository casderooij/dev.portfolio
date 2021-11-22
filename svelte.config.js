import path from 'path';
import adapterStatic from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import WindiCSS from 'vite-plugin-windicss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),

	kit: {
		adapter: adapterStatic({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$data: path.resolve('./src/data'),
					$components: path.resolve('./src/components'),
					$styles: path.resolve('./src/styles')
				}
			},
			plugins: [WindiCSS()]
		}
	}
};

export default config;
