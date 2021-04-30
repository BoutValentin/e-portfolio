import { writable } from "svelte/store";

const DEFAULT_THEME = "dark";

function getTheme() {
  if (typeof window === "undefined") return DEFAULT_THEME;
  return window.localStorage.getItem("theme") || DEFAULT_THEME;
}

export let theme = writable(getTheme());
