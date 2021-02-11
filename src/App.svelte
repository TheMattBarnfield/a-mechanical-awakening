<script lang="ts">
	import Header from './Header.svelte'
	import Home from './Home.svelte'
	import { Router, Route, navigate } from "svelte-routing";
	import {getBasepath} from "./routing";

	const path = localStorage.getItem('path');
	if (path) {
		localStorage.removeItem('path');
		navigate(path);
	}
</script>

<style type="text/scss" global>
	@import './colors.scss';

	:global(body) {
		background-color: $light-background;
		color: $dark-text;
		padding: 0;
	}

	:global(a) {
		text-decoration: none;

		&:hover {
			text-decoration: none;
		}
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

<Router basepath={getBasepath()}>
	<Header />
	<main>
		<Route path="/"><Home /></Route>
		<Route path="other">other</Route>
	</main>
</Router>


