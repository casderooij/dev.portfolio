<script>
	const getPoints = () => {
		const points = [];
		const POINT_COUNT = 8;
		const R = 40;
		const TWO_PI = Math.PI * 2;

		for (let i = 1; i <= POINT_COUNT; i++) {
			const x = 50 + R * Math.cos((TWO_PI / POINT_COUNT) * i);
			const y = 50 + R * Math.sin((TWO_PI / POINT_COUNT) * i);
			points.push({ x, y });
		}
		return points;
	};
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
	<circle cx={50} cy={50} r="4" />

	{#each getPoints() as { x, y }}
		<circle cx={x} cy={y} r="4" />
	{/each}
</svg>
