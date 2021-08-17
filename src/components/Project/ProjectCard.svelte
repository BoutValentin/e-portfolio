<script>
  import { onDestroy } from "svelte";

  import { isTouchScreen } from "../../stores/touchScreen";
  import Calendar from "../global/Calendar.svelte";

  export let title;
  export let date;
  export let shortDescription;
  let showDescription = false;
  let prevent_mouse_enter = false;

  const MAX_SIZE = 135;

  function appear(node, { delay = 0, duration = 350 }) {
    return {
      delay,
      duration,
      css: (t) => `transform: translateY(${100 * Math.abs(t - 1)}%)`,
    };
  }

  function handle_navigation() {}

  function show_description() {
    showDescription = true;
  }

  function hide_description() {
    showDescription = false;
  }

  function handle_mouse_enter() {
    if ($isTouchScreen) return;
    show_description();
  }

  function handle_mouse_leave() {
    hide_description();
  }
</script>

<div
  class="project-card-container"
  on:mouseleave={handle_mouse_leave}
  on:mouseenter={handle_mouse_enter}
  on:click={handle_navigation}
>
  <div class="project-card-default">
    <p class="title">{title}</p>
    <div class="date-container">
      <Calendar classes="revert" />
      <p>{date}</p>
    </div>
    {#if $isTouchScreen}
      <div class="roundButton" on:click|stopPropagation={show_description}>
        <p>+</p>
      </div>
    {/if}
  </div>

  {#if showDescription}
    <div class="project-card-description">
      <div
        class="project-card-container__description"
        in:appear
        out:appear|local
      >
        <p>
          {`${shortDescription.substring(0, MAX_SIZE)}${
            shortDescription.length > MAX_SIZE ? "..." : ""
          }`}
        </p>
      </div>
      {#if $isTouchScreen}
        <div
          class="roundButton hide-description"
          on:click|stopPropagation={hide_description}
        >
          <p>-</p>
        </div>
      {/if}
    </div>
  {/if}
</div>

<style>
  .project-card-description {
    position: absolute;
    overflow: hidden;
    height: 100%;
    width: 100%;
    border-radius: 8px;
    cursor: pointer;
  }

  .project-card-container {
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    width: 100%;
    min-width: min(100px, 100vw);
    min-height: 200px;
    max-height: 250px;
    border-radius: 8px;
    background-color: var(--main-font-color);
    color: var(--main-bg-color);
    box-shadow: 0px 0px 7px 2px var(--shadow-contact-svg);
  }

  .project-card-default {
    padding: 10px;
    height: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .title {
    text-overflow: ellipsis;
    font-size: 2.2em;
    font-weight: 600;
    padding: 0;
    margin: 0;
    text-align: center;
  }

  .project-card-container__description {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    width: 100%;
    z-index: 2;
    background-color: var(--main-bg-color);
    color: var(--main-font-color);
    cursor: pointer;
  }

  .date-container {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -10%);
    height: auto;
    z-index: 15;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: var(--main-font-color);
    background-color: var(--main-bg-color);
    width: auto;
    padding: 3px 25px;
    border-radius: 25px;
    margin: 0 auto;
    box-shadow: 0px 0px 7px 2px var(--shadow-contact-svg);
    user-select: none;
    white-space: nowrap;
  }

  .date-container > p {
    display: inline-block;
    padding: 0;
    height: 100%;
    width: 100%;
    font-size: min(1em, max(4vmin, 16px));
    margin: 0 0 0 10px;
    word-break: keep-all;
  }

  .project-card-container__description {
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 10px;
  }

  .project-card-container__description > p {
    text-align: center;
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 100%;
    font-size: min(1em, max(4vmin, 15px));
    line-height: 1.5em;
    max-width: 100%;
    padding: 0;
    margin: 0;
    padding-bottom: 25px;
  }

  .roundButton {
    position: absolute;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: var(--main-bg-color);
    color: var(--main-font-color);
    bottom: 0;
    transform: translate(20%, 20%);
    right: 0;
    height: 35px;
    width: 35px;
    padding: 3px;
    border-radius: 25px;
    cursor: pointer;
    user-select: none;
  }

  .hide-description {
    background-color: var(--main-font-color);
    color: var(--main-bg-color);
    z-index: 3;
  }

  .roundButton > p {
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    vertical-align: middle;
    font-weight: 600;
    font-size: 1.5em;
    transform: translate(-2%, -10%);
  }

  :global(.revert .svgMainFontFill) {
    fill: var(--main-bg-color);
  }

  :global(.revert .svgMainBGFill) {
    fill: var(--main-font-color);
  }
</style>
