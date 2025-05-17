import React from "react";
import { Text } from "react-native";
import { Link } from "expo-router";

import type { LinkProps } from "expo-router";

const ChatHistoryItem = ({
  label,
  href = "/",
}: {
  label: string;
  href: LinkProps["href"];
}) => {
  return (
    <Link href={href} className="py-2">
      <Text className="text-lg text-gray-900 font-medium">{label}</Text>
    </Link>
  );
};

export default ChatHistoryItem;
