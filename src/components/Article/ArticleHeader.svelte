<script lang="ts">
  export let name: string;
  export let description: string;
  export let pictureUrl: string;
</script>

<style lang="scss">
  @import 'src/colors';
  @import 'src/breakpoints';

  .article-header {
    display: flex;
    flex-direction: column;

    @media (min-width: $sm) {
      flex-direction: row;
    }
  }

  .article-titles {
    display: flex;
    flex-direction: column;
    margin-right: 5%;
  }

  .title {
    margin-top: 0;
  }

  .description {
    font-family: serif;
    margin-top: 0;
    font-size: 1.5em;
    color: $brown;
    grid-area: description;
  }

  .picture {
    border: 5px solid $brown;
    box-sizing: border-box;
    flex: 0 0 35%;
    min-width: 0;
    max-width: 100%;
    margin-left: auto;
  }
</style>

<div class="article-header">
  <div class="article-titles">
    <h1 class="title">{name}</h1>
    <p class="description">{description}</p>
  </div>
  <img class="picture" src={pictureUrl}  alt={name}/>
</div>