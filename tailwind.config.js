/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: "#EDF6F4",
          100: "#D8EBE7",
          200: "#B2D7D0",
          300: "#82BCB2",
          400: "#4F9A8E",
          500: "#2A7C6F",
          600: "#166158",
          700: "#114C45",
          800: "#0D3B36",
          900: "#0A2E2A",
          950: "#06201D",
        },
        orange: {
          50: "#FDF3EA",
          100: "#FAE3D0",
          200: "#F3C6A3",
          300: "#EBA675",
          400: "#E48A4E",
          500: "#DC7134",
          600: "#C45E27",
          700: "#9E4B20",
          800: "#7B3C1C",
          900: "#5C2D15",
        },
        ivory: {
          DEFAULT: "#FBF8F3",
          warm: "#F7F2E9",
          deep: "#F1EADC",
        },
        skysoft: {
          50: "#F3FAFD",
          100: "#E7F4FA",
          200: "#C2E4F2",
          300: "#A5D5EA",
        },
        mint: {
          50: "#F2FAF6",
          100: "#E2F3EB",
          200: "#CBE7DA",
        },
        charcoal: {
          DEFAULT: "#1E2B2E",
          soft: "#3A4A4E",
          mute: "#5C6B6F",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 6px 24px -8px rgba(13, 59, 54, 0.10), 0 2px 8px -2px rgba(13, 59, 54, 0.05)",
        lift: "0 18px 44px -14px rgba(13, 59, 54, 0.18), 0 6px 14px -6px rgba(13, 59, 54, 0.08)",
        btn: "0 10px 24px -10px rgba(196, 94, 39, 0.55)",
        teal: "0 10px 24px -10px rgba(17, 76, 69, 0.45)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "floaty-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-16px) rotate(3deg)" },
        },
        "pulse-soft": {
          "0%, 100%": { transform: "scale(1)", boxShadow: "0 10px 24px -10px rgba(196, 94, 39, 0.55)" },
          "50%": { transform: "scale(1.03)", boxShadow: "0 14px 30px -10px rgba(196, 94, 39, 0.65)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.35", transform: "scale(0.9)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        "floaty-slow": "floaty-slow 9s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3.2s ease-in-out infinite",
        twinkle: "twinkle 3.5s ease-in-out infinite",
        "spin-slow": "spin-slow 26s linear infinite",
      },
    },
  },
  plugins: [],
};
