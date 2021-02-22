<script lang="ts">
    import {getNpc} from "../api";
    import LoadingSpinner from "./LoadingSpinner.svelte";
    import type Npc from '../models/npc';
    import ArticleHeader from './Article/ArticleHeader.svelte';

    export let params: {id: string};
    let npc: Promise<Npc> = getNpc(params.id);
</script>

{#await npc}
    <LoadingSpinner />
{:then npc}
    <ArticleHeader {...npc} />
    <div class="article">{@html npc.articleHtml}</div>
{/await}
