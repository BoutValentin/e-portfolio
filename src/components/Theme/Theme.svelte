<script>
  import { theme } from "../../stores/theme";

  import Moon from "./Moon.svelte";
  import Sun from "./Sun.svelte";

  function handleClick() {
    theme.set($theme !== "dark" ? "dark" : "light");
    window.localStorage.setItem("theme", $theme);
  }
</script>

<div class="container">
  <div class="background-bar">
    <div
      class={`round ${$theme === "dark" ? "left" : "right"}`}
      on:click={handleClick}
    >
      {#if $theme === "dark"}
        <Moon />
      {:else}
        <Sun />
      {/if}
    </div>
  </div>
</div>

<style>
  .container {
    margin: auto 20px;
    height: 22px;
    width: 40px;
  }

  .background-bar {
    position: relative;
    height: 100%;
    width: 100%;
    background-color: var(--main-font-color);
    border-radius: 25px;
  }

  .round {
    cursor: pointer;
    position: absolute;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: var(--main-bg-color);
    border: 3px solid var(--main-font-color);
    transition: all 0.3s ease;
    padding: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .left {
    top: 0px;
    left: 0px;
    transform: translate(-50%, -10%);
  }

  .right {
    top: 0px;
    right: 0px;
    transform: translate(50%, -10%);
  }

  @media (max-width: 530px) {
    .container {
      margin: 5px 5px 5px 5px;
    }
  }
</style>
