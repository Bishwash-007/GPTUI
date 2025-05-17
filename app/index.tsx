import React, { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { router } from "expo-router";

const Index = () => {
  
  const isLoggedIn = true; 

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoggedIn) {
        router.replace("/chats"); 
      } else {
        router.replace("/signin");
      }
    }, 500); 

    return () => clearTimeout(timer);
  }, [isLoggedIn]);

  return (
    <View className="flex-1 justify-center items-center bg-backgroundLight dark:bg-backgroundDark">
      <ActivityIndicator size="large" />
      <Text className="text-gray-500 mt-4">Checking session...</Text>
    </View>
  );
};

export default Index;