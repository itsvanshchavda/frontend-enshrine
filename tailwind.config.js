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
        "white-1":"#a3a5b8",
        
        
      }
    },
  },
  plugins: [],
}