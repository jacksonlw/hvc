import defaultTheme from "tailwindcss/defaultTheme";
import { fontFamily } from "tailwindcss/defaultTheme";
import { type Config } from "tailwindcss/types/config";
import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        "2xl": "1rem",
      },
      screens: {
        "2xl": "1536px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
      spacing: {
        ...defaultTheme.spacing,
        navOffset: defaultTheme.spacing["14"],
      },
      transitionDuration: {
        ...defaultTheme.transitionDuration,
        DEFAULT: "100ms",
      },
      maxWidth: {
        ...defaultTheme.maxWidth,
        "8xl": "1536px",
      },
      colors: {
        ...colors,
        violet: {
          ...colors.violet,
          25: "#f7f6fd",
        },
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
