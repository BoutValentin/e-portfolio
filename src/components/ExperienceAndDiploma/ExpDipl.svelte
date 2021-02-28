<script>
import { DataLanguages } from "../../stores/languages";

import SectionTitle from "../global/SectionTitle.svelte";
import ShowSection from "../global/ShowSection.svelte";
import SubResources from "./SubResources.svelte";


</script>

<section id="ExpDip">
    <SectionTitle title={$DataLanguages['expDipl']['title']} />
    {#each $DataLanguages['expDipl']['sub'] as section }
        <ShowSection classe={"i-can-h-space"} title={section.title} components={{Component:SubResources, props: {title: section['subTitle1'], subTitle: section['subTitle2']['text'], linkSubTitle: section['subTitle2']['link'], text: section['description']}}} />
    {/each}
</section>

<style>
    section {
        padding: 5px 5px 5px 15px;
        min-height: 50vh;
    }
</style>
