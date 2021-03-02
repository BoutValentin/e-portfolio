<script>
import { DataLanguages } from "../../stores/languages";
import SectionTitle from "../global/SectionTitle.svelte";
import GuitarSvg from "./GuitarSvg.svelte";
import SubDescription from "./SubDescription.svelte";
import TechSvg from "./TechSvg.svelte";


</script>

<section id="AboutMe">
    <SectionTitle title={$DataLanguages['about']['title']} />
    <div>
        <SubDescription text={$DataLanguages['about']['text1']} svgComponents={TechSvg} />
        <SubDescription text={$DataLanguages['about']['text2']} svgComponents={GuitarSvg} revert />
    </div>
</section>

<style>
    section {
        min-height: 50vh;
    }
    section > div {
        margin-top: 30px;
        padding: 5px 5px 5px 15px;
        height: 100%;
        width: 100%;
    }
</style>
