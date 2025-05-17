import React from "react";
import { Text, TouchableOpacity, ViewStyle } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "@/context/ThemeContext";

type SettingsItemProps = {
  label: string;
  iconName: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
  style?: ViewStyle;
};

const SettingsItem = ({ label, iconName, onPress, style }: SettingsItemProps) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      className="flex-row items-center p-4"
      onPress={onPress}
      style={[
        {
          borderBottomWidth: 1,
          borderBottomColor: colors.border,
        },
        style,
      ]}
    >
      <Ionicons name={iconName} size={24} color={colors.text} />
      <Text
        className="ml-3 flex-1"
        style={{ color: colors.text }}
      >
        {label}
      </Text>
      <Ionicons name="chevron-forward" size={24} color={colors.text} />
    </TouchableOpacity>
  );
};

export default SettingsItem;