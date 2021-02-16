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
    }

    :global(.section_title  h1) {
        margin: auto 30px;
        flex-shrink: 0;
    }
</style>
