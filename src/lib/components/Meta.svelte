<script>
	import { page } from '$app/stores';
	import global from '$data/global';

	export let title;
	export let description;

	const url = `${global.baseUrl}${$page.path}`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="description" content={description} />
	<meta name="author" content="Cas de Rooij" />

	<meta property="og:title" content={title} />
	<meta property="og:site_name" content="dev.casderooij" />
	<meta property="og:url" content={url} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en_US" />

	<meta property="og:image" content="/assets/social/banner.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="600" />

	<link rel="icon" href="/favicon.ico" sizes="any" />
	<link rel="icon" href="/icon.svg" type="image/svg+xml" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<link rel="manifest" href="/site.webmanifest" />

	<meta name="robots" content="max-image-preview:large" />

	<link
		rel="preload"
		href="/assets/fonts/inter/inter-medium.woff2"
		as="font"
		type="font/woff2"
		crossorigin=""
	/>

	<link rel="canonical" href="{url}/" />
</svelte:head>
