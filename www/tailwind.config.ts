import defaultTheme from "tailwindcss/defaultTheme";
import { fontFamily } from "tailwindcss/defaultTheme";
import { type Config } from "tailwindcss/types/config";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
      screens: {
        ...defaultTheme.screens,
        "3xl": "1700px",
      },
      transitionDuration: {
        ...defaultTheme.transitionDuration,
        DEFAULT: "100ms",
      },
      colors: {
        ...defaultTheme.colors,
        black: "#0F0F10",
        white: "#FDFDFD",
        transparent: "transparent",
      },
      animation: {
        ...defaultTheme.animation,
        radixAccordionSlideDown: "radixAccordionSlideDown 200ms ease-out",
        radixAccordionSlideUp: "radixAccordionSlideUp 200ms ease-out",
      },
      keyframes: {
        radixAccordionSlideDown: {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        radixAccordionSlideUp: {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
