/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        jclothinggreenblue: "#10e6c5",
        jclothingblack: "#102E44",
        jred: "#DB2B39",
        jblue: "#29335C",
        jyellow: "#F3A712",
        jLightyellow: "#F0CEA0",
        jbrown: "#534D41"

      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

