/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#7c3aed",
        "primary-light": "#f3e8ff",
        "accent-orange": "#f97316",
        "background-light": "#f8f9fa",
        "surface-white": "#ffffff",
        "border-subtle": "#e5e7eb",
        "text-main": "#1e293b",
        "text-sub": "#64748b",
        "price-red": "#ef4444",
      },
      fontFamily: {
        "display": ["Plus Jakarta Sans", "sans-serif"]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
