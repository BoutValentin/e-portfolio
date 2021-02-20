<script>
    import { DataLanguages, avaiblesLanguages, currentLanguages } from "../../stores/languages";
import { firstLetterUppercase } from "../../utils/uppercase";
import Theme from "../Theme/Theme.svelte";

    function changeLanguages(lang) {
        currentLanguages.set(lang);
    }
</script>

<div class="footer">
    <div class="row1">
    <p>{@html $DataLanguages['footer'].mainText}</p>
    <div class="avaiableLanguagesContainer">
        <p>{firstLetterUppercase($DataLanguages['common'].languages)} :</p>
    {#each avaiblesLanguages as langues}
        <p class={`langues ${langues==$currentLanguages ? "active" : ''}`} on:click={()=>changeLanguages(langues)}>{firstLetterUppercase(langues)}</p>
    {/each}
    </div>
    </div>
    <div class="licence">
        <a href="http://iuristus.com" rel="external nofollow" target="_blank" >
            <img src="/images/iuristus.png" alt="iuristus logo" />
            <p>Iuristus 0</p>
        </a>
        <Theme/>
    </div>
</div>

<style>

    .footer {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        min-height: 60px;
        border-top: 2px solid var(--main-font-color);
        flex-wrap: wrap;
    }

    .row1 {
        margin-top: 15px;
        margin-bottom: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .footer p {
        margin: auto 10px;
        padding: 0;
    }

    .avaiableLanguagesContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        align-self: right;
        margin: auto 10px;
    }

    .avaiableLanguagesContainer p {
        margin: auto 5px
    }

    .langues {
        cursor: pointer;
        margin: auto 10px
    }

    .active {
        text-decoration: underline;
    }

    .licence {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 5px 0px 15px;
    }

    .licence a {
        color: var(--main-accent-color-3);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: auto 10px auto 0;
        align-self: flex-end;
    }

    .licence p {
        margin: auto 0;
        padding: 0;
    }

    .licence img {
        height: 25px;
        width: 25px;
        margin: auto 10px
    }

    @media (max-width: 530px) {
        .row1 {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
        .row1 > p, .row1 > div{
            margin: 15px 5px 5px 5px;
            padding: 0;
        }
        .licence {
            min-width: none;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: auto;
            margin-bottom: 20px;
        }   
        .licence a {
            align-self: center;
            margin: 5px 5px 15px 5px; 
        }
    }
</style>
