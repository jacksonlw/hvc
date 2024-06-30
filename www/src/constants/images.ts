const IMAGE_URL = "https://hvc-website-assets.s3.us-west-1.amazonaws.com/img";

export const images = {
  homeBackground: `${IMAGE_URL}/home-bg.jpg`,
  clubhouse: `${IMAGE_URL}/clubhouse.jpg`,
  members: `${IMAGE_URL}/members.jpg`,
} as const satisfies Record<string, string>;
