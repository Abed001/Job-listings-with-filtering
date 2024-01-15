/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightblue:'#E3E8F2',
        cyanbluecolor:'#0a7eb4',
        lightbg:'#F8EDFF',
        DesaturatedDarkCyan:'#5a7f7f',
        LightGrayishCyan:'#75f4f4',
        LightGrayishCyantab:'#a7f2f2',
        DarkGrayishCyan:'#798484',
        VeryDarkGrayishCyan:'#2b3333',
      },
      fontFamily: {
        Spartan: 'League Spartan, sans-serif',
      },
      fontSize: {
        bodycopy: "16px",

      },
      fontWeight: {
        normal: 500,
        bold: 700,

      },
      backgroundImage: {
        'desktopbg': "url('/images/bg-header-desktop.svg')",
        'phonebg': "url('/images/bg-header-mobile.svg')",
      },
    },
  },
  plugins: [],
}