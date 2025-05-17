import Button from "@/components/Button";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { router } from "expo-router";
import React, { useState } from "react";
import { ActivityIndicator, Alert, StatusBar, Text, TextInput, View } from "react-native";

const SignInScreen = () => {
  const { theme } = useTheme();
  const backgroundColor = theme === "dark" ? "#000" : "#fff";
  const { login, isLoading, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    try {
      // TODO: Implement API call for sign in
      // const response = await api.signIn({ email, password });
      // await login(response.user);
      
      // Temporary mock login for development
      await login({
        id: "1",
        email: email,
        name: "Test User"
      });
      
      router.replace("/(chat)/Edith");
    } catch (error) {
      Alert.alert(
        "Sign In Failed",
        error instanceof Error ? error.message : "Please try again later"
      );
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-backgroundLight dark:bg-backgroundDark px-6">
      <Text className="text-2xl font-bold mb-6 text-black dark:text-white items-start justify-start">
        Sign In
      </Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#999"
        className="w-[90%] mb-4 border border-gray-300 dark:border-gray-600 rounded-2xl px-4 py-3 text-black dark:text-white bg-white dark:bg-gray-800"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        editable={!isLoading}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#999"
        className="w-[90%] mb-6 border border-gray-300 dark:border-gray-600 rounded-2xl px-4 py-3 text-black dark:text-white bg-white dark:bg-gray-800"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        editable={!isLoading}
      />

      {error && (
        <Text className="text-red-500 mb-4 w-[90%] text-center">{error}</Text>
      )}

      <Button
        onPress={handleSignIn}
        className="bg-green-600 p-3 rounded-xl w-[90%] items-center justify-center"
        textClassName="text-lg font-semibold text-white"
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          "Sign In"
        )}
      </Button>

      <StatusBar
        barStyle={theme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={backgroundColor}
      />
      
      <View>
        <Text className="text-gray-500 mt-4">
          Don&#39;t have an account?{" "}
          <Text
            className="text-blue-500"
            onPress={() => !isLoading && router.push("/signup")}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default SignInScreen;
