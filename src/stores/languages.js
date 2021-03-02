import { derived, writable } from "svelte/store";
import * as Data from "../../public/static/languages.json";
import { LANGUE_SUPPORT } from "../constants";

export let avaiblesLanguages = Object.keys(Data).slice(
  0,
  Object.keys(Data).length - 1
);

function init_langue() {
  const ls_l = window.localStorage.getItem("langue");
  if (ls_l && LANGUE_SUPPORT.includes(ls_l)) return ls_l;

  const langNav = navigator.language || "en";
  const indO = langNav.indexOf("-");
  const finalLang = langNav
    .substring(0, indO >= 0 ? indO : langNav.length)
    .toLocaleLowerCase();
  return LANGUE_SUPPORT.includes(finalLang) ? finalLang : "en";
}

export let currentLanguages = writable(init_langue());

export let DataLanguages = derived(
  currentLanguages,
  ($languages) => Data[$languages]
);
