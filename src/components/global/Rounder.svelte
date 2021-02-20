<script lang="ts">

    export let order = 'right';
    const duration = 750
    function roundInOut(node, {duration}) {
        /**
         * 0% {
            transform: scale(0);
            opacity: 0;
        }
        75% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
        */
       return {
           duration, 
           css: t => `
            transform: scale(${t});
            opacity: ${t};
           `
       }
    }
    function barInOut(node, { duration }) {
        return {
            duration, 
            css: t => `
                width: ${t * 100}%;
                opacity: ${t};
            `
        }
    }
</script>

<div class={`order_container order_${order}`}>
    <div class="bar_container">
        <div class={`bar bar_${order}`} in:barInOut="{{duration: duration}}" out:barInOut="{{duration: duration}}" ></div>
    </div>
    <div class="round" in:roundInOut="{{duration: duration}}" out:roundInOut="{{duration: duration}}" ></div>
</div>

<style>
    .order_container {
        display: flex;
        align-items: center;
        align-content: center;
        width: 100%;
    }

    .order_left {
        flex-direction: row-reverse;
    }

    .order_right {
        flex-direction: row;
    }
    .bar_container {
        height: 100%;
        width: 100%;
        margin: auto 10px;
        display: flex;
        flex-direction: column;
    }
    .bar {
        height: 1px;
        width: 100%;
        min-width: 12px;
        border: 2px solid var(--main-font-color);
        border-radius: 35px;
        background-color: var(--main-font-color);
    }
    .bar_left {
        align-self: flex-end;
    }
    .bar_right {
        align-self: flex-start;
    }

    .round {
        height: 20px;
        width: 20px;
        border: 4px solid var(--main-font-color);
        border-radius: 35px;
        margin: auto 10px;
        flex-shrink: 0;
    }
</style>
