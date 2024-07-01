import colors from "tailwindcss/colors";
import { fontFamily } from "tailwindcss/defaultTheme";
import { type Config } from "tailwindcss/types/config";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
      transitionDuration: {
        DEFAULT: "100ms",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1000: "1000ms",
      },
      colors: {
        gray: colors.gray,
        blue: colors.blue,
        green: colors.emerald,
        red: colors.red,
        orange: colors.orange,
        yellow: colors.yellow,
        violet: colors.violet,
        black: "#0F0F10",
        white: "#f2f2f2",
        transparent: "transparent",
      },
      animation: {
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
