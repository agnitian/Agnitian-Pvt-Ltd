/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      /* =======================
         🎨 COLORS (ONLY SOLID)
      ======================= */
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        footage: "var(--footage)",
        "balancing-color": "var(--balancing-color)",
        textattractcolor: "var(--textattractcolor)",

        header: "hsl(var(--accent))",
        "header-foreground": "hsl(var(--accent-foreground))",

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },

        primary: {
          DEFAULT: "hsl(var(--ring))",
          foreground: "hsl(var(--background))",
        },

        secondary: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },

      /* =======================
         🌈 BACKGROUND IMAGES (GRADIENTS)
      ======================= */
      backgroundImage: {
        "header-box": "var(--header-box)",
      },

      /* =======================
         🔵 BORDER RADIUS
      ======================= */
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      /* =======================
         🔤 FONTS
      ======================= */
      fontFamily: {
        korataki: ["Korataki", "sans-serif"],
        sans: ["system-ui", "sans-serif"],
      },
    },
  },

  plugins: [tailwindcssAnimate],
};
