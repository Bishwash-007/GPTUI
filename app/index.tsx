import { StatusBar, View } from "react-native";
import ChatScreen from "@/components/ChatScreen";
import Header from "@/components/Header";
import React from "react";
import Burger from "@/components/Burger";

export default function Index() {
  const [menuVisible, setMenuVisible] = React.useState(false);
  return (
    <View className="flex-1 bg-white w-full">
      <Header title="Edith" onMenuPress={() => setMenuVisible(true)} />
      <ChatScreen />
      {menuVisible && <Burger onClose={() => setMenuVisible(false)} />}
      <StatusBar barStyle="dark-content" />
    </View>
  );
}
