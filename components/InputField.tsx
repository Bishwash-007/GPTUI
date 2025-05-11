import { View, Text, TextInput } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const InputField = () => {
  const [text, onChangeText] = React.useState("Useless Text");

  const handleSend = () => {
    console.log("Message sent:", text);
    onChangeText("");
  };

  return (
    <View className="flex-row items-center bg-white p-4 shadow-md">
      <View className="mx-2 border border-gray-300 rounded-full p-2">
        <Ionicons name="add" size={20} color="black" />
      </View>
      <TextInput
        className="flex-1 border border-gray-300 rounded-full p-2"
        onChangeText={onChangeText}
        value={text}
        placeholder="Type a message..."
        placeholderTextColor="#a1a1a1"
        style={{
          fontSize: 16,
          lineHeight: 24,
          fontFamily: "System",
        }}
      />
      <View className="mx-2">
        <Ionicons name="send" size={24} color="black" onPress={handleSend} />
      </View>
    </View>
  );
};

export default InputField;
