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
        title:["Outfit"],
        lora:['Lora']
      },

      colors: {
        "soft-black": "#18181c",
        "gray-1": "#33343e",
        
      }
    },
  },
  plugins: [],
}