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

export const IMAGES = {
  homeBackground: `${IMAGE_URL}/home-bg.jpg`,
  clubhouse: `${IMAGE_URL}/clubhouse.jpg`,
  members: `${IMAGE_URL}/members.jpg`,
} as const satisfies Record<string, string>;
