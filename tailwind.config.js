/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textAlign: {
        justify: 'justify',
      }
    },
    fontFamily : {
      signature : ["Great Vibes"]
    }
  },
  plugins: [],
}

