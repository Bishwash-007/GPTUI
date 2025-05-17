import Button from "@/components/Button";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, Image, StatusBar, Text, View } from "react-native";

const Onboarding = () => {
  const { theme } = useTheme();
  const { isAuthenticated, isLoading, error } = useAuth();
  const backgroundColor = theme === "dark" ? "#000" : "#fff";

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      router.replace("/(chat)/Edith");
    }
  }, [isAuthenticated, isLoading]);

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center" style={{ backgroundColor }}>
        <ActivityIndicator size="large" />
        <Text className="text-gray-500 mt-4">Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center p-6" style={{ backgroundColor }}>
        <Text className="text-red-500 mb-4 text-center">{error}</Text>
        <Button
          onPress={() => router.replace("/signin")}
          className="bg-green-600 p-3 rounded-xl w-[90%] items-center justify-center"
          textClassName="text-lg font-semibold text-white"
        >
          Try Again
        </Button>
      </View>
    );
  }

  return (
    <View className="flex-1 justify-center items-center p-6" style={{ backgroundColor }}>
      <Image
        source={require("../../assets/images/background.jpg")}
        className="w-72 h-72 mb-8"
        resizeMode="contain"
      />
      <Text className="text-3xl font-bold text-center mb-4 text-black dark:text-white">
        Welcome to Edith
      </Text>
      <Text className="text-base text-gray-600 dark:text-gray-300 text-center mb-8">
        Discover features, stay productive, and get started quickly!
      </Text>
      <Button
        onPress={() => router.push("/signin")}
        className="bg-green-600 p-3 rounded-xl w-[90%] items-center justify-center"
        textClassName="text-lg font-semibold text-white"
      >
        Get Started
      </Button>
      <StatusBar
        barStyle={theme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={backgroundColor}
      />
    </View>
  );
};

export default Onboarding;