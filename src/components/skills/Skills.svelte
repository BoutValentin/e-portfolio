<script>
  import { onMount, tick } from "svelte";

  import { DataLanguages } from "../../stores/languages";
  import RoundSkills from "../global/RoundSkills.svelte";
  import SectionTitle from "../global/SectionTitle.svelte";

  let data = $DataLanguages["skills"];
  let isLoading = true;
  async function unamed(dataM) {
    const dataB = { ...dataM };
    const asyncData = await Promise.all(
      dataB.skills.map(async (value, index) => {
        const i = (await import("../../svg"))[value.imageSVG];
        return {
          ...value,
          imageSVG: i,
        };
      })
    );
    dataB.skills = asyncData;
    return dataB;
  }
  onMount(async () => {
    isLoading = true;
    unamed($DataLanguages["skills"]).then((res) => (data = { ...res }));
    isLoading = false;
  });

  $: {
    isLoading = true;
    unamed($DataLanguages["skills"]).then((res) => (data = { ...res }));
    isLoading = false;
  }
</script>

<section id="skills">
  <SectionTitle title={data.title} />
  <p>{@html data.text}</p>
  <div class="skills-container">
    {#if isLoading}
      <p>{$DataLanguages["common"].loading}</p>
    {:else}
      {#each data.skills as skill (skill)}
        <div class="roundContact">
          <RoundSkills svg={skill.imageSVG} path={skill.link} />
        </div>
      {/each}
    {/if}
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
  }

  p {
    font-size: min(1.3em, max(4vmin, 16px));
    letter-spacing: 2.5px;
    margin: 55px 10px 15px 10px;
    text-align: center;
    max-width: 1000px;
    width: 100%;
  }

  .skills-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 55px auto 50px auto;
    max-width: 870px;
    width: 100%;
  }

  .roundContact {
    margin: 15px 25px;
  }

  @media (max-width: 800px) {
    .skills-container {
      max-width: 80%;
    }
  }

  @media (max-width: 300px) {
    .skills-container {
      max-width: 100%;
    }

    .roundContact {
      margin: 15px 25px;
    }
  }
</style>
