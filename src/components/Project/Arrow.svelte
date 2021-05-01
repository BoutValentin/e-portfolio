<script>
    export let svg;
    export let callback;
    export let disabled;
</script>

<div class={`arrowContainer ${disabled ? 'disabled' : ''}`} on:click={callback} >
    {@html svg}
</div>

<style>
    .arrowContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 2em;
        width: 2em;
    }

    .disabled {
        opacity: 0.2;
        cursor: none;
    }

    :global(.arrowContainer svg) {
        cursor: pointer;
        fill: var(--main-font-color);
        transition: all 0.3s ease;
    }

    :global(.arrowContainer svg:active) {
        transform: scale(0.8);

    }

    :global(.arrowContainer.disabled svg:active) {
        transform: none;
    }
</style>
