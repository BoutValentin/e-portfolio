<script>
    import FreelanceSvg from "./FreelanceSvg.svelte";
	import { slide } from 'svelte/transition';
import { onMount } from "svelte";
import { DataLanguages } from "../../stores/languages";
    let show = true;

    const handle_hide = (e) => {
        console.log(window.scrollX);
        show = false ;
    }

    onMount(()=> {
        window.setTimeout(()=>show = false, 10000)
    })

</script>

<svelte:window on:scroll={handle_hide} />

{#if show}
<div class="alert-bar" in:slide out:slide>
    <div class="freelance-svg">
        <FreelanceSvg />
    </div>
    <p>{@html $DataLanguages['common']['alert-bar']}</p>
</div>
{/if}

<style>
    .alert-bar {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background: var(--main-font-color);
        width: 100%;
        z-index: 200;
        min-height: 80px;
        padding: 15px 25px;
        color: var(--main-bg-color);
        font-size: 1.2em;
        font-weight: 800;
        border-radius: 0 0 13px 13px;
        text-align: center;
    }

    .freelance-svg {
        height: 50px;
        flex-shrink: 0;
        margin: auto 35px auto 0px;
    }

    .alert-bar p {
        font-weight: 600;

    }
</style>