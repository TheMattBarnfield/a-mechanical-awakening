<script lang="ts">
    import {getLocation} from "../api";
    import LoadingSpinner from "./LoadingSpinner.svelte";
    import type Location from '../models/location';
    import ArticleHeader from "./Article/ArticleHeader.svelte";

    export let params: {id: string};
    let location: Promise<Location> = getLocation(params.id);
</script>

{#await location}
    <LoadingSpinner />
{:then location}
    <ArticleHeader {...location} />
    {#if location.locatedIn}
    <div>
      <a href={`/#/${location.locatedIn.type}/${location.locatedIn.id}`}>
        {location.locatedIn.text}
      </a>
    </div>
    {/if}
    <div class="article">{@html location.articleHtml}</div>
{/await}
