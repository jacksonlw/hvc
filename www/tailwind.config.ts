import theme, { fontFamily } from "tailwindcss/defaultTheme";
import { type Config } from "tailwindcss/types/config";
import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    container: {
      center: true,
      screens: {
        DEFAULT: "100%",
        "2xl": theme.screens["2xl"],
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
      spacing: {
        ...theme.spacing,
        navOffset: theme.spacing["14"],
      },
      transitionDuration: {
        ...theme.transitionDuration,
        DEFAULT: "100ms",
      },
      maxWidth: {
        ...theme.maxWidth,
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
        ...theme.animation,
        radixAccordionSlideDown: "radixAccordionSlideDown 200ms ease-out",
        radixAccordionSlideUp: "radixAccordionSlideUp 200ms ease-out",
        spinningLoader: "spinningLoader 500ms infinite linear",
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
        spinningLoader: {
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
