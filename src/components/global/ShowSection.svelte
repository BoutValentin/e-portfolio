<script>
  export let components;
  export let title;
  export let classe;
</script>

<div class={`showSection ${classe}`}>
  <div class="header">
    <div class="round" />
    <p class="title">
      {title}
    </p>
  </div>
  <div class="body">
    <div class="barContainer">
      <div class="bar" />
    </div>
    <svelte:component this={components?.Component} {...components?.props} />
  </div>
</div>

<style>
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .title {
    font-size: 25px;
    margin-left: 15px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 3px;
  }

  .round {
    height: 20px;
    width: 20px;
    border: 4px solid var(--main-font-color);
    border-radius: 35px;
    margin: auto 10px;
    flex-shrink: 0;
  }

  .body {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 5px auto;
    height: auto;
  }

  .barContainer {
    width: 20px;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    align-self: stretch;
    flex-shrink: 0;
  }
  
  .bar {
    height: 100%;
    width: 1px;
    border: 3px solid var(--main-font-color);
    border-radius: 35px;
    background-color: var(--main-font-color);
    margin: 0 auto;
    align-self: stretch;
  }
</style>
