/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light theme colors
        backgroundLight: "#f8f9fa",
        textLight: "#000000",
        primaryLight: "#4CAF50",
        secondaryLight: "#2196F3",
        accentLight: "#FF9800",
        borderLight: "#E0E0E0",
        errorLight: "#FF5252",
        successLight: "#4CAF50",
        cardLight: "#FFFFFF",
        inputLight: "#F5F5F5",

        // Dark theme colors
        backgroundDark: "#000814",
        textDark: "#FFFFFF",
        primaryDark: "#66BB6A",
        secondaryDark: "#42A5F5",
        accentDark: "#FFA726",
        borderDark: "#424242",
        errorDark: "#FF5252",
        successDark: "#66BB6A",
        cardDark: "#1A1A1A",
        inputDark: "#2C2C2C",

        // Common colors
        primary: {
          DEFAULT: "#4CAF50",
          light: "#66BB6A",
          dark: "#388E3C",
        },
        secondary: {
          DEFAULT: "#2196F3",
          light: "#42A5F5",
          dark: "#1976D2",
        },
        accent: {
          DEFAULT: "#FF9800",
          light: "#FFA726",
          dark: "#F57C00",
        },
        error: {
          DEFAULT: "#FF5252",
          light: "#FF5252",
          dark: "#D32F2F",
        },
        success: {
          DEFAULT: "#4CAF50",
          light: "#66BB6A",
          dark: "#388E3C",
        },
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
    },
  },
  plugins: [],
}