import { type Section } from "~/types";

export const SECTIONS = {
  about: {
    id: "about",
    title: "About",
  },
  events: {
    id: "events",
    title: "Events",
  },
  reserve: {
    id: "reserve",
    title: "Reserve",
  },
  contact: {
    id: "contact",
    title: "Contact",
  },
} as const satisfies Record<string, Section>;

const IMAGE_URL = "https://hvc-website-assets.s3.us-west-1.amazonaws.com/img";

export const IMAGE_URLS = {
  homeBackground: `${IMAGE_URL}/home-bg.jpg`,
  clubhouseOutsideFront: `${IMAGE_URL}/clubhouse-outside-front.jpg`,
  clubhouseEntrance: `${IMAGE_URL}/clubhouse-entrance.jpg`,
  clubhouseInside: `${IMAGE_URL}/clubhouse-inside.jpg`,
  members: `${IMAGE_URL}/members.jpg`,
} as const satisfies Record<string, string>;

export const ADDRESS = "1808 B Street, Hayward, CA";
export const ADDRESS_WITH_ZIP = `${ADDRESS} 94541`;
