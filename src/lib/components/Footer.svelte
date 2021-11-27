<script>
	import links from '$data/links';
</script>

<footer>
	<ul>
		{#each links as { name, url }}
			<li>
				<a href={url} rel="external noopener noreferrer" target="_blank">{name}</a>
			</li>
		{/each}
	</ul>
</footer>
