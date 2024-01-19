/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx,scss}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "welcome-bg": "url('/src/assets/hero-bg.png')",
      },
      colors: {
        "orange": "#DF6951",
        "black": "#212832",
        "cream": "#FFF1DA",
        "darkblue": "#181E4B",
        "light-orange": "#F1A501",
        "gray": "#5E6282",
      }
    }
  },
  plugins: [require("daisyui")]
};
