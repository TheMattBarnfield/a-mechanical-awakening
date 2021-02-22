<script lang="ts">
	import Header from './Header.svelte';
	import Home from './Home/Home.svelte';
	import Npc from './Npc/Npc.svelte';
	import NpcList from './Npc/NpcList.svelte';
	import Location from './Location.svelte';
	import Router from "svelte-spa-router";
	import {basepath} from "../routing";

	const path = localStorage.getItem('path');
	if (path) {
		localStorage.removeItem('path');
		navigate(path);
	}

	const routes = {
        '/': Home,
        '/npc': NpcList,
        '/npc/:id': Npc,
        '/location/:id': Location
    }
</script>

<style type="text/scss" global>
	@import 'src/colors';
	@import 'src/breakpoints';

	:global(body) {
		background-color: $light-blue;
		color: $dark-text;
		padding: 0;

	    --spacing: 1rem;
	}

	:global(a) {
		text-decoration: none;

		&:hover {
			text-decoration: none;
			color: $light-blue;
			cursor: pointer;
		}
	}

	main {
		padding: var(--spacing);
		margin: 0 auto;
		max-width: 700px;
		background: $light-background;
		min-height: 100%;
		border-left: 3px solid $brown;
		border-right: 3px solid $brown;

		@media(min-width: $md) {
		    --spacing: 2rem;
		}
	}

	h1 {
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
		margin-top: 0;
		margin-bottom: var(--spacing);
	}

	h2 {
		text-transform: uppercase;
		font-weight: 100;
	}
</style>

<Header />
<main>
    <Router {routes} />
</main>


