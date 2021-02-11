<script lang="ts">
    import {getNpc} from "../api";
    import LoadingSpinner from "./LoadingSpinner.svelte";
    import type Npc from '../models/npc';

    export let id: string;
    let npc: Promise<Npc> = getNpc(id);
</script>

<style lang="scss">
    @import 'src/colors';
    @import 'src/breakpoints';

    .container {
      display: grid;
      column-gap: 1em;
      row-gap: 1em;
      grid-template: "title" auto
                     "description" auto
                     "picture" auto
                     "article" auto / 1fr;

      @media(min-width: $sm) {
        grid-template: "title       picture" 1fr
                       "description picture" 1fr
                       "article     article" auto / 2fr 1fr;
      }

      @media(min-width: $lg) {
        grid-template: "title       picture" 1fr
                       "description picture" 1fr
                       "description picture" 1fr
                       "article     article" auto / 2fr 1fr;
      }
    }

    .title {
      grid-area: title;
      margin: 0;
    }

    .description {
      font-family: serif;
      margin: 0;
      font-size: 1.5em;
      color: $brown;
      grid-area: description;
    }

    .picture {
      height: auto;
      width: 90%;
      border: 5px solid $brown;
      box-sizing: border-box;
      margin: 0 auto;
      grid-area: picture;
    }

    .article {
      grid-area: article;
    }
</style>

{#await npc}
    <LoadingSpinner />
{:then npc}
    <div class="container">
        <h1 class="title">{npc.name}</h1>
        <p class="description">{npc.description}</p>
        <img class="picture" src={npc.pictureUrl}  alt={npc.name}/>
        <div class="article">{@html npc.articleHtml}</div>
    </div>
{/await}
