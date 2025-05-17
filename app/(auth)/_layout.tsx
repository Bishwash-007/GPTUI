import { useAuth } from "@/context/AuthContext";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

const AuthLayoutWrapper = () => {
  const { theme } = useTheme();
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      router.replace("/(chat)/Edith");
    }
  }, [isAuthenticated, isLoading]);

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-backgroundLight dark:bg-backgroundDark">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View className={theme === "dark" ? "dark flex-1" : "flex-1"}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="signin" />
        <Stack.Screen name="signup" />
      </Stack>
    </View>
  );
};

export default function AuthLayout() {
  return (
    <ThemeProvider>
      <AuthLayoutWrapper />
    </ThemeProvider>
  );
}