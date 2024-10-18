/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'details': "url('../src/assets/background_details_7.jpg')",
        'test_img_details': "url('../src/assets/jo-sonn-M-tzZD5z720-unsplash2.png')",
        'icon_recipes': "url('../src/assets/recipe_14899906.png')"
      }
    },
  },
  plugins: [],
}