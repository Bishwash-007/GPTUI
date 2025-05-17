import { StatusBar, View } from "react-native";
import ChatScreen from "@/components/ChatScreen";
import Header from "@/components/Header";
import React from "react";
import Burger from "@/components/Burger";
import { useTheme } from "@/context/ThemeContext";

export default function Index() {
  const { theme } = useTheme();
  const backgroundColor = theme === "dark" ? "#000" : "#fff";
  const [menuVisible, setMenuVisible] = React.useState(false);
  return (
    <View style={{ flex: 1, backgroundColor, width: "100%", height: "100%" }}>
      <Header title="Edith" onMenuPress={() => setMenuVisible(true)} />
      <ChatScreen />
      {menuVisible && <Burger onClose={() => setMenuVisible(false)} />}
      <StatusBar
        barStyle={theme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={backgroundColor}
      />
    </View>
  );
}
