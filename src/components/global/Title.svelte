<script>
    export let title;
    const duration = 350;
    const delay = 650;
    function appear(node, {duration, delay}) {
        return {
            duration,
            delay,
            css: t => `
                opacity: ${t};
                transform: translateY(${10 + (t * (-10))}px)
            `
        }
    }
</script>

<h1 in:appear="{{duration: duration, delay: delay}}" out:appear="{{duration:duration, delay:0}}">
{title.toUpperCase()}
</h1>

<style>
    h1 {
        font-size: 35px;
        font-weight: 600;
    }
</style>
