<script>
    import { link } from "svelte-routing";
    import {basepath} from "../routing";
</script>


<style type="text/scss">
    @import 'src/colors';

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
        <a class="home-link" href={basepath} use:link>A Mechanical Awakening</a>
    </nav>
</header>
