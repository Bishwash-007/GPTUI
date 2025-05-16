import { View, Text } from "react-native";
import React from "react";
import { router } from "expo-router";

const settings = () => {
  return (
    <View className="flex-1 bg-white w-full items-center justify-center">
      <Text className="text-center" onPress={router.back}>
        Go Back
      </Text>
    </View>
  );
};

export default settings;
