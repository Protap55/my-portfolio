/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-bg": "#0f0525",
        "brand-purple": "#a855f7",
        "brand-pink": "#ec4899",
        "brand-cyan": "#22d3ee",
        "brand-dark-purple": "#1e113b",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "glow-cyan":
          "0 0 15px rgba(34, 211, 238, 0.6), 0 0 5px rgba(34, 211, 238, 0.8)",
        "glow-pink":
          "0 0 15px rgba(236, 72, 153, 0.6), 0 0 5px rgba(236, 72, 153, 0.8)",
        "glow-purple":
          "0 0 20px rgba(168, 85, 247, 0.7), 0 0 8px rgba(168, 85, 247, 0.9)",
        "glow-purple-intense": "0 0 20px rgba(168, 85, 247, 0.7), 0 0 10px rgba(168, 85, 247, 0.9)", // Added based on usage
        "glow-cyan-intense": "0 0 20px rgba(34, 211, 238, 0.7), 0 0 10px rgba(34, 211, 238, 0.9)", // Added based on usage
        "glow-pink-intense": "0 0 20px rgba(236, 72, 153, 0.7), 0 0 10px rgba(236, 72, 153, 0.9)", // Added based on usage
        "glow-blue": "0 0 15px rgba(59, 130, 246, 0.6), 0 0 5px rgba(59, 130, 246, 0.8)",
        "glow-green": "0 0 15px rgba(34, 197, 94, 0.6), 0 0 5px rgba(34, 197, 94, 0.8)",
      },
      textShadow: {
        "glow-white": "0 0 8px rgba(255, 255, 255, 0.8)",
        "glow-purple": "0 0 10px rgba(192, 132, 252, 0.8)",
        "glow-cyan": "0 0 8px rgba(34, 211, 238, 0.8)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    },
  ],
}
