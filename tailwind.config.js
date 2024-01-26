/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx,scss}"],
  theme: {
    extend: {
      backgroundImage: {
        "welcome-bg": "url('/src/assets/welcome-bg.png')",
        "blob": "url('/src/assets/blob-haikei.svg')",
        "yellow-gradient":
          "linear-gradient(109.6deg, rgb(255, 207, 84) 11.2%, rgb(255, 158, 27) 91.1%)",
        "orange-gradient": "linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%)",
        "pink-gradient": "linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)",
        "violet-gradient": "linear-gradient(to top left, #747DEF 0%, #5E3BE1 100%)",
      },
      colors: {
        orange: "#DF6951",
        black: "#212832",
        cream: "#FFF1DA",
        darkblue: "#181E4B",
        "light-orange": "#F1A501",
        "gray": "#5E6282",
        "penk": "#DFD7F9",
        "penk1": "#D5AEE4"
      },
    },
  },
  plugins: [require("daisyui")],
};
