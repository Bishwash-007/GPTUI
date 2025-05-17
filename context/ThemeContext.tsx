import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";

type ThemeType = "light" | "dark" | "system";

interface ThemeContextType {
  theme: "light" | "dark";
  themeType: ThemeType;
  setTheme: (theme: ThemeType) => void;
  colors: {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    accent: string;
    border: string;
    error: string;
    success: string;
    card: string;
    input: string;
  };
}

const lightColors = {
  background: "#f8f9fa",
  text: "#000000",
  primary: "#4CAF50",
  secondary: "#2196F3",
  accent: "#FF9800",
  border: "#E0E0E0",
  error: "#FF5252",
  success: "#4CAF50",
  card: "#FFFFFF",
  input: "#F5F5F5",
};

const darkColors = {
  background: "#000814",
  text: "#FFFFFF",
  primary: "#66BB6A",
  secondary: "#42A5F5",
  accent: "#FFA726",
  border: "#424242",
  error: "#FF5252",
  success: "#66BB6A",
  card: "#1A1A1A",
  input: "#2C2C2C",
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  themeType: "system",
  setTheme: () => {},
  colors: lightColors,
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemTheme = useColorScheme();
  const [themeType, setThemeType] = useState<ThemeType>("system");
  const [theme, setThemeState] = useState<"light" | "dark">(systemTheme || "light");

  // Load saved theme preference
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem("theme");
        if (savedTheme) {
          setThemeType(savedTheme as ThemeType);
        }
      } catch (error) {
        console.error("Failed to load theme preference:", error);
      }
    };
    loadTheme();
  }, []);

  useEffect(() => {
    if (themeType === "system") {
      setThemeState(systemTheme || "light");
    } else {
      setThemeState(themeType);
    }
  }, [themeType, systemTheme]);

  const setTheme = async (newTheme: ThemeType) => {
    try {
      await AsyncStorage.setItem("theme", newTheme);
      setThemeType(newTheme);
    } catch (error) {
      console.error("Failed to save theme preference:", error);
    }
  };

  const colors = theme === "light" ? lightColors : darkColors;

  return (
    <ThemeContext.Provider value={{ theme, themeType, setTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};
