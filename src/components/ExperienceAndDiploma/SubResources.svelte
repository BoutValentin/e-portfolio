<script>
    export let title;
    export let subTitle;
    export let linkSubTitle;
    export let text;
</script>

<div>
    <p class="title">{title}
    {#if subTitle}
        <span class="subTitle"><a href={linkSubTitle} rel="external nofollow" target="_blank" >{subTitle}</a></span>
    {/if}
    </p>
    {#if text}
        <p class="text">{@html text}</p>
    {/if}
</div>

<style>
    div {
        padding: 15px;
        width: 100%;
    }

    span {
        border-left: 2px solid var(--main-accent-color-2);
        padding-left: 10px;
        color: var(--main-accent-color-2);
        margin-left: 10px;
    }
    span a {
        color: var(--main-accent-color-2);
    }

    .title {
        font-size: 24px;
        letter-spacing: 2.5px;
        margin: 15px 5px 25px;
        display: flex;
        flex-direction: row;
    }
    .text {
        font-size: 19px;
        letter-spacing: 2.5px;
        margin: 10px 15px;
    }
    @media (max-width: 800px) {
        .title {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        span {
            border-left: none;
            padding-left: 0;
            border-top: 2px solid var(--main-accent-color-2);
            padding-top: 8px;
            color: var(--main-accent-color-2);
            margin: 15px auto;
        }

    }
</style>
