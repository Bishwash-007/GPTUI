import { useTheme } from "@/context/ThemeContext";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Header = ({
  title,
  onMenuPress,
  onNewChat,
}: {
  title: string;
  onMenuPress: () => void;
  onNewChat: () => void;
}) => {
  const { colors } = useTheme();

  return (
    <View
      style={{ backgroundColor: colors.background }}
      className="flex w-full px-4 py-2"
    >
      <View className="flex-row justify-between items-center h-14">
        <TouchableOpacity
          onPress={onMenuPress}
          className="p-2"
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Ionicons name="menu-outline" size={26} color={colors.text} />
        </TouchableOpacity>

        <Text
          style={{ color: colors.text }}
          className="text-xl font-semibold flex-1 text-center mx-2"
        >
          {title}
        </Text>

        <TouchableOpacity
          onPress={onNewChat}
          className="p-2 mr-2"
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Entypo name="new-message" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;