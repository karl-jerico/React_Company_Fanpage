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
    }
  }
}
