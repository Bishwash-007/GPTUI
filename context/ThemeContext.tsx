import React, { createContext, useState, useContext, useEffect } from "react";
import { useColorScheme } from "react-native";

const ThemeContext = createContext({
  theme: "dark",
  setTheme: (theme: "light" | "dark") => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState<"light" | "dark">(systemTheme || "light");

  useEffect(() => {
    setTheme(systemTheme || "light");
  }, [systemTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <>{children}</>
    </ThemeContext.Provider>
  );
};
