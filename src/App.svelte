<script>
	import Header from './Header.svelte'
</script>

<style type="text/scss" global>
	@import './colors.scss';

	:global(body) {
		background-color: $light-background;
		color: $dark-text;
		padding: 0;
	}

	main {
		text-align: center;
		padding: 1em;
	}

	h1 {
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
	}
</style>

<Header />
<main>
	<h1>A Mechanical Awakening</h1>
	<p>
		Welcome to the official site of <em>A Mechanical Awakening</em>!
		Here you'll be able to find all sorts of resources about your adventures in Eberron!
	</p>
</main>

