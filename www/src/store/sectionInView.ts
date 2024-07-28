import { atom } from "jotai";
import { type SECTIONS } from "~/constants";

export const sectionInViewAtom = atom<Record<keyof typeof SECTIONS, boolean>>({
  about: false,
  events: false,
  reserve: false,
  contact: false,
});
