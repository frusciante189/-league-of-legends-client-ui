module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        settingsBg: "#77787e",
        lolBg: "#f9f9f9",
        icons: "#c7c7c7",
        inputBg: "#ededed",
        inputTxt: "#999999"
      },
      backgroundImage: {
        "lol": "url('https://user-assets.tailory.io/components/yhb69wCFjyQ1gO6bmdjqFqpB76u1/1633008028616-lol.jpg')",
        "lolwp": "url('https://images.unsplash.com/photo-1515896769750-31548aa180ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
