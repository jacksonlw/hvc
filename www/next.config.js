/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hvc-website-assets.s3.us-west-1.amazonaws.com",
        pathname: "/img/**",
      },
    ],
  },
};

export default config;
