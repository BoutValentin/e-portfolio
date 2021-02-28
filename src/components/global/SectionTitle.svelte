<script>

    import Rounder from "./Rounder.svelte";
    import Title from "./Title.svelte";
    export let title;
</script>

<div class="section_title">
    <Rounder order='right' />
    <Title title={title} />
    <Rounder order='left' />
</div>

<style>
    .section_title {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 100%;
    }

    :global(.section_title  h1) {
        margin: auto min(30px, 5vmin);
        display: inline;
        max-width: 50%;
        flex-shrink: 0;
        text-align: center;
    }
    
</style>
