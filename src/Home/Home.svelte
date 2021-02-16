<script>
import ContactButton from "../contact/ContactButton.svelte";
import { DataLanguages } from "../stores/languages";

</script>

<section>
    <img src="/images/Me.svg" alt="Me" />
    <div class="container">
        <p class="mainTitle">{@html $DataLanguages['home']['title']}</p>
        <p class="subTitle">{$DataLanguages['home']['subTitle']}</p>
        <ContactButton href={"#contact"} />
    </div>

</section>

<style>
    section {
        min-height: 100vh;
        display: flex;
        flex-direction: row;
        align-items: center;

    }
    img {
        filter: invert(100%);
        max-width: 537px;
        height: 100%;
    }
    
    .container {
        max-width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: auto;
        padding: 15px;
    }
    .mainTitle {
        font-size: 9vmin;
        margin-bottom: 15px;
        text-align: center;
    }
    .subTitle {
        font-size: 5vmin;
        margin-top: 5px;
        text-align: center;
    }
    @media (max-width: 800px) {
        section {
            min-height: 100vh;
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
        }
        img {
        filter: invert(100%);
        max-width: 400px;
        width: 100%;
        height: auto;
        }
        .container {
            max-width: 100%;
            height: auto;
        }
        .mainTitle{
            margin-bottom: 5px;
            margin-top: 5px;
        }
    }
</style>