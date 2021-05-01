<script>
    export let svgComponents;
    export let paragraphe;
</script>

<div class="sub-description">
    <svelte:component this={svgComponents.Component} {...svgComponents.props} />
    <div>
        <p>
            {@html paragraphe}
        </p>
    </div>
</div>

<style>

    .sub-description {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 15px;
    }

    .sub-description > div {
        width: 100%;
        margin: 0 35px;
        border-left: 3px solid var(--main-accent-color-2);
        min-height: 100%;
        align-self: stretch;
        padding: 10px 10px 10px 25px ;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        line-height: 1.6;
    }

    .sub-description > div > p {
        padding: 0;
        margin: 0;
        font-size: min(1.3em, max(4vmin, 16px));
        letter-spacing: 2.5px;
    }

    @media (max-width: 800px) {
        .sub-description {
            flex-direction: column;
            padding: 15px 25px 15px 15px;
        }

        .sub-description > div {
            width: 100%;
            margin: 35px 5px 5px 5px;
            border-top: 3px solid var(--main-accent-color-2);
            border-left: none;
            min-height: 100%;
            align-self: stretch;
            padding: 20px 10px 0px 10px ;
            text-align: justify;
        }
    }
    
</style>
