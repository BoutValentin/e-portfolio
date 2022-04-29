<script>
  import { DataLanguages } from "../../stores/languages";
  import SectionTitle from "../global/SectionTitle.svelte";
  import ShowSection from "../global/ShowSection.svelte";
  import DevelopsSvg from "./DevelopsSVG.svelte";
  import ServerSvg from "./ServerSVG.svelte";
  import PrototypeSvg from "./PrototypeSVG.svelte";
  import SubDescription from "./SubDescription.svelte";
</script>

<section id="helpYouFor">
  <SectionTitle title={$DataLanguages["helpYouFor"].title} />
  <div>
    <ShowSection
      classe={"i-can-h-space"}
      title={$DataLanguages["helpYouFor"]["prototype"]["title"]}
      components={{
        Component: SubDescription,
        props: {
          svgComponents: { Component: PrototypeSvg, props: {} },
          paragraphe: $DataLanguages["helpYouFor"]["prototype"]["description"],
        },
      }}
    />
    <ShowSection
      classe={"i-can-h-space"}
      title={$DataLanguages["helpYouFor"]["develops"]["title"]}
      components={{
        Component: SubDescription,
        props: {
          svgComponents: { Component: DevelopsSvg, props: {} },
          paragraphe: $DataLanguages["helpYouFor"]["develops"]["description"],
        },
      }}
    />
  </div>
</section>

<style>
  section {
    min-height: 50vh;
  }

  section > div {
    padding: 5px 5px 5px 15px;
  }
</style>
