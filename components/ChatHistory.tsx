import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import type { LinkProps } from "expo-router";
import { useTheme } from "@/context/ThemeContext";

type ChatHistoryItemProps = {
  label: string;
  href?: LinkProps["href"];
  onPress?: () => void;
};

const ChatHistoryItem = ({ label, href = "/", onPress }: ChatHistoryItemProps) => {
  const { colors } = useTheme();

  const labelText = (
    <Text className="text-lg font-medium" style={{ color: colors.text }}>
      {label}
    </Text>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} className="py-4 ">
        {labelText}
      </TouchableOpacity>
    );
  }

  return (
    <Link href={href} asChild>
      <TouchableOpacity className="py-4">{labelText}</TouchableOpacity>
    </Link>
  );
};

export default ChatHistoryItem;