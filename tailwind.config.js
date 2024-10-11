/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#DADADA",
        foreground: "#A7A7A7",
        input: {
          DEFAULT: "#D9D9D9",
          secondary: "#989898",
        },
        success: "#17C500",
        failure: "#C50000",
      },
    },
  },
  plugins: [],
};
