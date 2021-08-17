<script lang="ts">
  import Footer from "./components/global/Footer.svelte";
  import Home from "./components/Home/Home.svelte";
  import Contact from "./components/contact/Contact.svelte";
  import HelpYouFor from "./components/HelpYourFor/HelpYouFor.svelte";
  import Skills from "./components/skills/Skills.svelte";
  import ExpDipl from "./components/ExperienceAndDiploma/ExpDipl.svelte";
  import About from "./components/About/About.svelte";
  import Project from "./components/Project/Project.svelte";
  import { theme } from "./stores/theme";
  import AlertBar from "./components/Alert/AlertBar.svelte";
</script>

<main data-theme={$theme}>
  <div id="body">
    <AlertBar />
    <Home />
    <HelpYouFor />
    <Skills />
    <Project />
    <ExpDipl />
    <About />
    <Contact />
    <Footer />
  </div>
</main>

<style>
</style>
