import { writable } from "svelte/store";

export const isTouchScreen = writable(
  navigator.maxTouchPoints || "ontouchstart" in document.documentElement
);
