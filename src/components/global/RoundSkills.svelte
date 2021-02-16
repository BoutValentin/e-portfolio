<script>

    export let svg;
    export let path;
</script>

<a href={path} rel="external nofollow" target="_blank" >
<div class="skillsRound">
    {@html svg}
</div>
</a>

<style>
    .skillsRound {
        cursor: pointer;
        border: 2px solid var(--main-bg-color);
        height: 60px;
        width: 60px;
        padding: 10px;
        border-radius: 60px;
        background-color: var(--main-font-color);
        -webkit-box-shadow: 0px 0px 7px 2px rgba(230, 230, 230, 0.30); 
        box-shadow: 0px 0px 7px 2px rgba(230, 230, 230, 0.30);
    }
    a:active .skillsRound {
        -webkit-box-shadow: none; 
        box-shadow: none;
    }
</style>