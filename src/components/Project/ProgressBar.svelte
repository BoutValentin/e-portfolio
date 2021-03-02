<script>
    export let max = 15;
    export let current = 1;
    let currentWidht = 100 - (current * 100) / max;
    $: {
        currentWidht = 100 - (current * 100) / max;
    }
</script>

<div class="progress-bar-Container" style={`--width:${currentWidht}%; --display-round:${currentWidht != 0 ? '-8px' : '-16px'}`}>
    <div class="modal-bar">
        <div class="rouund"></div>
    </div>
</div>


<style>
    .progress-bar-Container {
        width: 100%;
        height: 20px;
        border: 2px solid var(--main-font-color);
        background-color: var(--main-font-color);
        border-radius: 40px;
        position: relative;
        padding: 0;
        overflow: hidden;
    }

    .modal-bar {
        top:0;
        right: 0;
        width: var(--width);
        height: 100%;
        position: absolute;
        background-color: var(--main-bg-color);
        border-radius: 40px;
        transition: all 0.4s cubic-bezier(.22,.47,.61,1.04);
    }
    
    .rouund {
        height: 16px;
        width: 16px;
        background-color: var(--main-font-color);
        border-radius: 50%;
        position: relative;
        left: var(--display-round);
        top: 0;
        transition-delay: 0.4s;
        transition: display 0.4s cubic-bezier(.22,.47,.61,1.04);

    }
</style>
