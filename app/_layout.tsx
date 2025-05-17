import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import { Stack } from "expo-router";
import { View } from "react-native";

import "../global.css";

const LayoutWrapper = () => {
  const { theme } = useTheme();

  return (
    <View className={theme === "dark" ? "dark flex-1" : "flex-1"}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(chat)" />
      </Stack>
    </View>
  );
};

export default function RootLayout() {
  return (
    <ThemeProvider>
      <LayoutWrapper />
    </ThemeProvider>
  );
}
