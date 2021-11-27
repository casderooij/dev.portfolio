<script>
	import '$styles/app.css';
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />

<style>
	:global(#svelte) {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	main {
		flex: 1;
	}
</style>
