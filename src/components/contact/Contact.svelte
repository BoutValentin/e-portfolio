<script>
import SectionTitle from "../global/SectionTitle.svelte";
import { DataLanguages } from "../../stores/languages";
import ContactButton from "./ContactButton.svelte";
import {rs} from '../../constants'
import RoundSkills from "../global/RoundSkills.svelte";

</script>

<section id="contact">
    <SectionTitle title={$DataLanguages['contact']['sectionTitle']} />
    <p>{@html $DataLanguages['contact']['text']}</p>
    <ContactButton href="mailto:bout.valentin@gmail.com"/>
    <div class="containerContact">
    {#each rs as social}
        <div class="roundContact">
            <RoundSkills svg={social.svg} path={social.path} />
        </div>
    {/each}
    </div>
</section>

<style>
    section {
        margin-top: 50px;
        min-height: 50vh;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    p {
        margin-top: 120px;
        margin-bottom: 70px;
        font-size: max(5vmin, 22px);
        text-align: center;
        padding: 10px;
    }
    .containerContact {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        margin: 90px auto 50px auto;
    }
    .roundContact {
        margin: auto 35px;
    }

    @media (max-width: 300px) {
        .roundContact {
            margin: 15px 35px ;
        }
    }
</style>
