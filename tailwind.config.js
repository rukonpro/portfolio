/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'blue': '0 4px 14px 0 rgba(19, 51, 81, 0.39), 0 6px 30px 0 rgba(19, 51, 81, 0.23)',
        'red': '0 4px 14px 0 rgba(81, 19, 20, 0.39), 0 6px 30px 0 rgba(81, 19, 20, 0.23)',
      },
    },
  },
  plugins: [],
}

