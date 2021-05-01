<script>
  import { svelte } from "../../svg";

  export let text;
  export let svgComponents;
  export let revert = false;
</script>

<div class={revert ? "revert" : ""}>
  <svelte:component this={svgComponents} />
  <p>{@html text}</p>
</div>

<style>
  div {
    width: 100%;
    margin: 50px auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 15px;
    margin: 100px 0px;
  }

  .revert {
    flex-direction: row-reverse;
  }

  p {
    margin: auto auto;
    padding: 5px 15px;
    text-align: justify;
    font-size: min(1.3em, max(4vmin, 16px));
    letter-spacing: 2.5px;
    line-height: 1.6em;
    max-width: 60%;
  }

  @media (max-width: 800px) {
    div,
    .revert {
      margin: 50px auto;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    p {
      max-width: 100%;
      margin: 25px auto;
    }
  }
</style>
