<script lang="ts">
	import 'virtual:windi.css';
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
	:global(body) {
		@apply bg-body text-dark;
	}
	:global(#svelte) {
		@apply flex flex-col h-screen p-2;
	}
</style>
