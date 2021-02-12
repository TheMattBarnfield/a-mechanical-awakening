<script>
    import {search} from "../../api";
    import LoadingSpinner from "../LoadingSpinner.svelte";
    import HomepageSearchResult from "./HomepageSearchResult.svelte";

    let term = '';

    function handleKeydown({ keyCode }) {
        if (keyCode !== 38 && keyCode !== 40) {
            return;
        }

        const current = document.activeElement
        const items = [...document.getElementsByClassName('search-link')]
        const currentIndex = items.indexOf(current)

        current.blur()

        if (currentIndex === -1) {
            items[0].focus()
        } else {
            if (keyCode === 38) {
                if (currentIndex === 0) {
                    document.getElementsByClassName('search-box')[0].focus()
                } else {
                    items[(currentIndex + items.length - 1) % items.length].focus()
                }
            } else {
                items[(currentIndex + 1) % items.length].focus()
            }
        }
    }
</script>

<style lang="scss">
    @import '../../colors.scss';

    .search-container {
      border: 3px solid $brown;
      padding: 5px;
    }

    .search-box {
      margin: 0;
      width: 100%;
    }
</style>

<div class="search-container"  on:keydown={handleKeydown}>
    <input class="search-box" bind:value={term} placeholder="Search"/>

    <div>
        {#await search(term)}
            <LoadingSpinner />
        {:then searchResults}
            {#each searchResults as result}
                <HomepageSearchResult result={result} />
            {/each}
        {/await}
    </div>
</div>
