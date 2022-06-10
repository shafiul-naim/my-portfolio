/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#134e4a",
        
"secondary": "#0e7490",
        
"accent": "#a5f3fc",
        
"neutral": "#9ca3af",
        
"base-100": "#423C48",
        
"info": "#45AFC9",
        
"success": "#189A87",
        
"warning": "#FCBD36",
        
"error": "#EE7672",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
