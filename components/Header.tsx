import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";

const Header = () => {
  return (
    <View className="bg-white shadow-md">
      <View className="flex-row justify-between items-center bg-white p-4 shadow-md">
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="font-normal text-2xl">EDITH</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="new-message" size={22} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
// This is a workaround for the issue with the expo-router and the app directory
// export const unstable_settings = {
//   initialRouteName: "index",
// };
