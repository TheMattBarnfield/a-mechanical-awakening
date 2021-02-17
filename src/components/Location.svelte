<script lang="ts">
    import {getLocation} from "../api";
    import LoadingSpinner from "./LoadingSpinner.svelte";
    import type Location from '../models/location';
    import ArticleHeader from "./Article/ArticleHeader.svelte";
    import {basepath} from "../routing";

    export let id: string;
    let location: Promise<Location> = getLocation(id);
</script>

{#await location}
    <LoadingSpinner />
{:then location}
    <ArticleHeader {...location} />
    {#if location.locatedIn}
    <div>
      <a href={`${basepath}/${location.locatedIn.type}/${location.locatedIn.id}`}>
        {location.locatedIn.text}
      </a>
    </div>
    {/if}
    <div class="article">{@html location.articleHtml}</div>
{/await}
