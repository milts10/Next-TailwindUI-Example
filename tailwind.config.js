module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        onion: "url('/public/vercel.svg')",
      },
      colors: {
        soilGreen: {
          10: "#F0F7E9",
          20: "#E1EFD3",
          50: "#ACCEA0",
          70: "#6BAF22",
          100: "#268A02",
        },
        bgGrey: "#F1F6F7",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
