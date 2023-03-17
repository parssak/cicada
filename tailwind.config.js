module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./node_modules/@parssa/universal-ui/src/components/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      mono: ["JetBrains Mono", "monospace"]
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "3rem",
        lg: "6rem",
        xl: "7rem"
      },
      center: true
    },
    transitionTimingFunction: {
      spring: "cubic-bezier(.175,.885,.32,1.275)"
    }
  },
  variants: {},
  plugins: [require("@parssa/universal-ui/src/plugin")]
};
