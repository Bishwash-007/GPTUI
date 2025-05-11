import { View, Text } from "react-native";
import React from "react";
import InputField from "./InputField";
import Header from "./Header";

const ChatScreen = () => {
  return (
    <View className="flex-1 h-full bg-white">
      <Header />

      <View>

      </View>
      {}
      <View className="absolute bottom-0 w-full">
        <InputField />
      </View>
      <View />
    </View>
  );
};

export default ChatScreen;
