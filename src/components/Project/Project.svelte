<script>
import { onDestroy, onMount } from "svelte";

  import { DataLanguages } from "../../stores/languages";
  import { leftArrow, rightArrow } from "../../svg/arrow";
  import SectionTitle from "../global/SectionTitle.svelte";
  import Arrow from "./Arrow.svelte";
  import ProgressBar from "./ProgressBar.svelte";
  import ProjectCard from "./ProjectCard.svelte";

  let max = $DataLanguages['projects']['projects'].length;
  
  let current = 0;
  let isLessThan350 = false;

  $: {
    max = $DataLanguages['projects']['projects'].length;
    current = 0;
  }
  let numberByRow = 2; // TODO: calculate it
  let containerCard = null;

  function setNumberByRow() {
    numberByRow =  Math.trunc(containerCard.clientWidth / 400) || 1;
  }

  function handleResize() {
    setNumberByRow();
    isLessThan350 = window.innerWidth < 350;
  }

  onMount(() => {
    handleResize();
    window.addEventListener('resize', handleResize)
  })

  onDestroy(() => {
    window.removeEventListener('resize', handleResize);
  })

  function handleMoreClick() {
    current = current < max - numberByRow ? current + 1 : current
  }

  function handleLessClick() {
    current = current - 1 >= 0 ? current - 1 : current
  }

</script>

<section id="project">
  <SectionTitle title={$DataLanguages["projects"]['title']} />
  <div class="projects-container">
  <p class="subtext">{@html $DataLanguages["projects"]["text"]}</p>
  <ProgressBar {max} current={current + numberByRow} />
  <div class="projects-card-arrow-container">
    {#if !isLessThan350}
      <Arrow callback={handleLessClick} svg={leftArrow} disabled={current === 0}/>
    {/if}
      <div class="projects-card-container" bind:this={containerCard}>
        {#each $DataLanguages['projects']['projects'] as project, idx (project)}
          {#if idx >= current && idx< current + numberByRow}
            <ProjectCard {...project} pos={idx}/>
          {/if}
        {/each}
      </div>
    {#if !isLessThan350}
      <Arrow callback={handleMoreClick} svg={rightArrow} disabled={current + numberByRow >= max}/>
    {/if}
  </div>
  {#if isLessThan350}
    <div class="near-arrow-container">
      <Arrow callback={handleLessClick} svg={leftArrow} disabled={current === 0}/>
      <Arrow callback={handleMoreClick} svg={rightArrow} disabled={current + numberByRow >= max}/>
    </div>
  {/if}
</div>
</section>

<style>
    .projects-container {
        margin-top: 3em;
        padding: 10px 15px;
    }

    .subtext {
      text-align: center;
      font-size: min(1.3em, max(4vmin, 16px));
      margin: 2.3em auto 3.2em auto;
    }

    .projects-card-arrow-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 4.5em auto 5em auto;
      padding: 10px;
    }

    .projects-card-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      margin: auto 10px;
      width: 100%;
    }

    .near-arrow-container {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      margin: -2em auto 4.5em auto;
    }

    :global(.near-arrow-container > *) {
      margin: 0 10px;
    }

    @media(max-width: 800px) {
      .projects-card-arrow-container {
        margin: 4.5em auto;
        padding: 0;
      }
    }

</style>
