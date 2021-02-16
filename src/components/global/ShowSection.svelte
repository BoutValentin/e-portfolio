<script>

    export let components;
</script>

<div class="showSection" >
    <div class="header">
        <div class="round">

        </div>
        <p class="title">
            Prototyping
        </p>
    </div>
    <div class="body">
        <div class="barContainer">
            <div class="bar"></div>
        </div>
        <svelte:component this={components?.Components} {...components?.props} />
    </div>
</div>

<style>
    .showSection {

    }
    .header{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .title {
        font-size: 25px;
        margin-left: 15px;
    }
    .round {
        height: 20px;
        width: 20px;
        border: 4px solid #fff;
        border-radius: 35px;
        margin: auto 10px;
        flex-shrink: 0;
    }
    .body {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 5px auto;
        height: auto;
    }
    .barContainer {
        height: 100%;
        width: 28px;
        margin: auto 10px;
        display: flex;
        flex-direction: column;
    }
    .bar {
        height: 100%;
        width: 1px;
        border: 3px solid #fff;
        border-radius: 35px;
        background-color: #fff;
        margin: 0 auto;
    }
</style>
