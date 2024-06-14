/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ["Titillium Web"],
        title:["Outfit"]
      },

      colors: {
        "soft-black": "#18181c"
      }
    },
  },
  plugins: [],
}