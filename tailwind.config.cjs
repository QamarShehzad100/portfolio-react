/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    colors: {
      current: "currentColor",
      background1: "#060606",
      background2: "#0c0c0e",
      color1: "#edebe8",
      color2: "#999999",
      gray: "#cccccc",
      primary: "#F08000",
      border1: "#333333"
    },
    keyframes: {
      blink: {
        "0%, 100%": { opacity: "1" },
        "50%": { opacity: "0" }
      }
    },
    animation: {
      blink: "blink 1s step-end infinite"
    },
    fontSize: {
      xs: ["12px", "15px"],
      s: ["14px", "17px"],
      m: ["16px", "20px"],
      l: ["18px", "22px"],
      xl: ["20px", "24px"],
      "2xl": ["24px", "28px"],
      "3xl": ["29px", "35px"],
      "4xl": ["35px", "43px"],
      "5xl": ["42px", "49px"],
      "6xl": ["49px", "56px"],
      "7xl": ["64px", "71px"]
    },
    fontFamily: {
      primary: ["Roboto", "Poppins", "popins", "Helvetica", "Arial", "sans-serif"]
    },
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "0ch" },
          "100%": { width: "3ch" } // Adjust width based on text length
        }
      },
      animation: {
        typing: "typing 1s steps(0) forwards" // Duration and steps
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5"
      }
      // backgroundImage: {
      //   "gradient-radial":
      //     "radial-gradient(circle at center, gray 1px, transparent 0), radial-gradient(circle at center, #cccccc35 1px, transparent 0)",
      //   "linear-gradient": "linear-gradient(0deg, #060606 0%, transparent 65%)"
      // }
    }
  },
  plugins: []
};
