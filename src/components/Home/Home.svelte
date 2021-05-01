<script>
  import ContactButton from "../../components/contact/ContactButton.svelte";
  import { DataLanguages } from "../../stores/languages";
  import Theme from "../Theme/Theme.svelte";
  import Me from "./Me.svelte";
  const clientHeight = window.screen.height * (4 / 100);
  let lasPosNow = window.scrollY;
  let showTheme = lasPosNow === 0;
  function scrollEvent(e) {
    const windowS = window.scrollY;
    if (windowS > lasPosNow) showTheme = false;
    else if (lasPosNow - windowS > clientHeight || windowS <= 0) {
      showTheme = true;
    }
    lasPosNow = windowS;
  }
  window.addEventListener("scroll", scrollEvent);
</script>

{#if showTheme}
  <div class="themecontainer">
    <Theme />
  </div>
{/if}
<section id="home">
  <Me />
  <div class="container">
    <p class="mainTitle">{@html $DataLanguages["home"]["title"]}</p>
    <p class="subTitle">{$DataLanguages["home"]["subTitle"]}</p>
    <ContactButton href={"#contact"} />
  </div>
</section>

<style>
  .themecontainer {
    z-index: 100;
    position: fixed;
    right: 15px;
    top: 15px;
    transition: all 0.3s ease;
    opacity: 0.3;
  }

  .themecontainer:hover {
    opacity: 1;
  }

  section {
    margin-top: 0px;
    min-height: 100vh;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .container {
    max-width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding: 15px;
  }

  .mainTitle {
    font-size: 9vmin;
    margin-bottom: 15px;
    text-align: center;
    font-family: "Bitter", serif;
  }

  .subTitle {
    font-size: 5vmin;
    margin-top: 5px;
    text-align: center;
  }

  @media (max-width: 800px) {
    section {
      min-height: 100vh;
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: stretch;
    }

    .container {
      max-width: 100%;
      height: auto;
    }

    .mainTitle {
      margin-bottom: 5px;
      margin-top: 5px;
    }
  }
</style>
