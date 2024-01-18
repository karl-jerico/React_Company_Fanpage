/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./styles/**/*.{ts,tsx,scss}",
    "./layouts/**/*.{ts,tsx}"
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
  }
}
