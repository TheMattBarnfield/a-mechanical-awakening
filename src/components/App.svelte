<script lang="ts">
	import Header from './Header.svelte';
	import Home from './Home/Home.svelte';
	import Npc from './Npc.svelte';
	import Location from './Location.svelte';
	import { Router, Route, navigate } from "svelte-routing";
	import {basepath} from "../routing";

	const path = localStorage.getItem('path');
	if (path) {
		localStorage.removeItem('path');
		navigate(path);
	}
</script>

<style type="text/scss" global>
	@import 'src/colors';
	@import 'src/breakpoints';

	:global(body) {
		background-color: $light-background;
		color: $dark-text;
		padding: 0;
	}

	:global(a) {
		text-decoration: none;

		&:hover {
			text-decoration: none;
			color: $light-blue
		}
	}

	main {
		padding: 1em;
		margin: 0 auto;
		max-width: 700px;
	}

	h1 {
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
	}

	h2 {
		text-transform: uppercase;
		font-weight: 100;
	}
</style>

<Router basepath={basepath}>
	<Header />
	<main>
		<Route path="/">
			<Home />
		</Route>
		<Route path="npc/:id" let:params>
			<Npc id={params.id} />
		</Route>
		<Route path="location/:id" let:params>
			<Location id={params.id} />
		</Route>
	</main>
</Router>


