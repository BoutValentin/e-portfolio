import { derived, writable } from 'svelte/store';
import * as Data from '../../public/static/languages.json'

export let avaiblesLanguages = Object.keys(Data).slice(0, Object.keys(Data).length -1);

const langNav = navigator.language;
const indO = langNav.indexOf('-');
const finalLang = langNav.substring(0, indO >= 0 ? indO : langNav.length).toLocaleLowerCase();

export let currentLanguages = writable(finalLang || "en");

export let DataLanguages = derived(currentLanguages, ($languages) => Data[$languages]);
