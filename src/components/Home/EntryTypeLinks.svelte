<script lang="ts">
    import {basepath} from '../../routing.ts';

    const types = [{
        name: "NPCs",
        type: "npc",
        image: "http://images.ctfassets.net/6hzlnplv14jn/T89mAloDI7IL3fXlA08g3/6610d0fb566aee8443c745beee293597/alber.jpg"
    },{
        name: "Locations",
        type: "location",
        image: "http://images.ctfassets.net/6hzlnplv14jn/2Beh9xc1dKEv6JNO7Ivewd/e28a3bd11f55cccfcda0c75e398a69dc/_.jpeg"
    },{
        name: "Session write-ups",
        type: "session"
    },{
        name: "Party",
        type: "party"
    }]
</script>

<style lang="scss">
    @import "../../colors.scss";

    ul.entry-type-links {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-gap: var(--spacing);
        list-style: none;
        padding: 0;
        margin-bottom: var(--spacing);

        li {
            display: grid;
            border: 3px solid $brown;

            &::before {
                content: "";
                padding-bottom: 100%;
                display: block;
                grid-area: 1 / 1 / 2 / 2;
            }

            .entry-type-link {
                grid-area: 1 / 1 / 2 / 2;
                color: $dark-text;
                background-position-y: 3em;
                background-size: contain;

                .entry-type-link-header {
                    display: flex;
                    border-bottom: 3px solid $brown;
                    padding: 1em;
                    background-color: $light-background;

                    .arrow {
                        margin-left: auto;
                    }

                }

                &:hover {
                    .entry-type-link-header {
                        color: $light-text;
                        background: $dark-background;
                    }
                }
            }
        }
    }
</style>

<div>
    <ul class="entry-type-links">
        {#each types as type}
            <li>
                <a href={`${basepath}/#/${type.type}`} class="entry-type-link" style={`background-image:url('${type.image}')`}>
                    <div class="entry-type-link-header">
                       {type.name}<span class="arrow">></span>
                    </div>
                </a>
            </li>
        {/each}
    </ul>
</div>