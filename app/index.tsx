import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";

const Index = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const { colors } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isAuthenticated) {
        router.replace(`/(chat)/Edith`);
      } else {
        router.replace("/onboarding");
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [isAuthenticated]);

  return (
    <View 
      className="flex-1 justify-center items-center"
      style={{ backgroundColor: colors.background }}
    >
      <ActivityIndicator size="large" color={colors.primary} />
      <Text 
        className="mt-4"
        style={{ color: colors.text }}
      >
        {isLoading ? "Checking session..." : "Loading..."}
      </Text>
    </View>
  );
};

export default Index;