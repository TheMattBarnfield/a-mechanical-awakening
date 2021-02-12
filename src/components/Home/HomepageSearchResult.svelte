<script lang="ts">
    import {link} from 'svelte-routing';
    import type {SearchResult} from '../../models/searchResult';

    export let result: SearchResult;
</script>

<style lang="scss">
    @import '../../colors.scss';

    .search-result {
      width: 100%;
      height: 95px;
      padding: 5px;
      margin-top: 5px;
      text-decoration: none;

      display: grid;
      grid-template: "picture title" 30px
                     "picture subtitle" 50px / 80px auto;
      grid-column-gap: 5px;
      grid-row-gap: 5px;
      border: 3px solid $brown;
      box-sizing: border-box;
    }

    .search-link {
      background-color: $pink;
      color: $dark-text;

      &:hover {
        .search-result {
          background-color: $dark-background;
          color: $light-text;
        }
      }

      &:focus {
        .search-result {
          background-color: $dark-background;
          color: $light-text;
        }
      }
    }

    .picture {
      grid-area: picture;
      width: 100%;
      margin: 0;
      border: 3px solid $brown;
      box-sizing: border-box;
    }

    .title {
      grid-area: title;
      border-bottom: 1px solid $brown;
      margin: 0;
    }

    .subtitle {
      grid-area: subtitle;
      font-family: serif;
      margin: 0;
    }
</style>

<a href={result.pageUrl} use:link class="search-link">
    <div class="search-result">
        <img class="picture" src={result.pictureUrl} alt={result.title} />
        <h2 class="title">{result.title}</h2>
        <p class="subtitle">{result.subtitle}</p>
    </div>
</a>
