<script>
	import '$styles/app.css';
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
</script>

<Header />
<main class="flex-1">
	<slot />
</main>
<Footer />

<style>
</style>
