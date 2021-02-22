<script lang="ts">
    import {getAllNpcs} from "../../api";
    import LoadingSpinner from "../LoadingSpinner.svelte";
    import SearchResultItem from "../SearchResultItem.svelte";

    const npcs = getAllNpcs();
</script>

<style>
    ul {
        list-style: none;
        padding: 0;
    }
</style>

<h1>NPCs</h1>
{#await npcs}
<LoadingSpinner />
{:then npcs}
<ul>
    {#each npcs as npc}
        <li>
            <SearchResultItem result={npc} />
        </li>
    {/each}
</ul>
{/await}
