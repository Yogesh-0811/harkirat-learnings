import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
            300: "#e0e7fe",
            500: "#3e38a7",
            600: "#5046e4"
        }
      },
    },
  },
  plugins: [],
}

export default config
