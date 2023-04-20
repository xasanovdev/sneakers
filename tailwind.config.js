/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.jsx",
    "./src/components/Header/index.jsx",
    "./src/components/Card/index.jsx",
    "./src/components/shopping/index.jsx",
    "./src/components/shopping/AddedList.jsx",
  ],
  theme: {
    extend: {},
    colors: {
      "background-opacity": "rgba(0, 0, 0, 0.332)",
      "background-white": "#fff",
      "lime-green": "#9DD458",
      "lime-green-dark": "#7da946",
    },
  },
  plugins: [],
};

