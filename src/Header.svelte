<script>
    import { link } from "svelte-routing";
</script>


<style type="text/scss">
    @import 'colors.scss';

    header {
        background-color: $dark-background;
        color: $light-text;
        padding: 20px;

      a.home-link {
        font-size: 2em;
        font-weight: 100;
        color: $light-text;

        &:hover {
          color: $light-blue
        }
      }
    }
</style>

<header>
    <nav>
        <a class="home-link" href="/" use:link>A Mechanical Awakening</a>
    </nav>
</header>
