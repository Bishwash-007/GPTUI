import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useAuth } from "@/context/AuthContext";

const SignInScreen = () => {

  const { setIsAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {

    if (email === "user@example.com" && password === "password123") {
      setIsAuthenticated(true);
    } else {
      Alert.alert("Invalid Credentials", "Please check your email or password.");
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-backgroundLight dark:bg-backgroundDark px-6">
      <Text className="text-2xl font-bold mb-6 text-black dark:text-white">
        Sign In
      </Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#999"
        className="w-full mb-4 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-black dark:text-white bg-white dark:bg-gray-800"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#999"
        className="w-full mb-6 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-black dark:text-white bg-white dark:bg-gray-800"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        onPress={handleSignIn}
        className="w-full bg-blue-600 py-3 rounded-lg"
      >
        <Text className="text-center text-white font-semibold">Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;