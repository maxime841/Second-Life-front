/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", "sans-serif"],
        styling: ["charm", "Indie flower"]
      },
      colors: {
        "fond_claire": "#E6E697",
        "fond_dark": "#801818",
        "input_color": "#FBF2B7",
        "fond_header": "#288990",
        "color_title": "#75C9E3",
        "fond_color_button": "#A5D152",
        action: "#6C0277",
        "action-hover": "#6C0277",
        "action-bg-hover": '#CCCCCC',
        warning: "#FFB300",
        error: "#DF0000",
        "text-dark": "#FFFFFF",
      },
      fontSize: {
        // input
        "input-size-text": "1rem",
      },
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
}
