/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0b0c15', // Deep rich dark, slightly blueish
        surface: '#151621',    // Slightly lighter
        primary: '#6366f1',    // Indigo 500 - Main accent
        primaryHover: '#4f46e5', // Indigo 600
        textMain: '#f8fafc',   // Slate 50
        textMuted: '#94a3b8',  // Slate 400
      }
    },
  },
  plugins: [],
}
