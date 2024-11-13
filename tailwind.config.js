/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a202c",
        secondary: "#2d3748",
        accent: "#3182ce",
        textPrimary: "#edf2f7",
        textSecondary: "#a0aec0",

        lightBlue: "#2196f3",
        graydark: "#343a40",
        darkRich: "#020D19",
        darkNavy: "#011222",
        darkOil: "#0C0C0C",
      },
      fontFamily: {
        robo: ["Roboto Slab", "serif"],
      },
      boxShadow: {
        "custom-light": "0 0 10px rgba(0, 0, 0, 0.1)",
        "custom-dark": "0 0 20px rgba(0, 0, 0, 0.4)",
        "custom-lightBlue": "0 0 5px #2196f3",
      },
    },
  },
  plugins: [],
};
