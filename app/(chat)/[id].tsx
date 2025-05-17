import Burger from "@/components/Burger";
import ChatScreen from "@/components/ChatScreen";
import Header from "@/components/Header";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StatusBar, View } from "react-native";

const ChatLayout = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const { theme, colors } = useTheme();

  const [isLoading, setIsLoading] = useState(true);
  const [burgerVisible, setBurgerVisible] = useState(false);

  useEffect(() => {
    if (!authLoading) {
      if (!isAuthenticated) {
        router.replace("/onboarding");
      } else {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [isAuthenticated, authLoading]);

  const handleNewChat = () => {
    router.replace("/(chat)/new");
  };

  const handleMenuPress = () => {
    setBurgerVisible(true);
  };

  if (authLoading || isLoading) {
    return (
      <View
        className="flex-1 justify-center items-center"
        style={{ backgroundColor: colors.background }}
      >
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <View className="flex-1" style={{ backgroundColor: colors.background }}>
      <Header
        title="Chat"
        onNewChat={handleNewChat}
        onMenuPress={handleMenuPress}
      />
      <ChatScreen onNewChat={handleNewChat} />
      {burgerVisible && (
        <Burger
          onClose={() => setBurgerVisible(false)}
          chatHistory={[
            { id: "1", label: "Chat 1", href: "/(chat)/[1]" },
            { id: "2", label: "Chat 2", href: "/(chat)/[2]" },
            { id: "3", label: "Chat 3", href: "/(chat)/[3]" },
          ]}
          userName="John Doe"
        />
      )}
      <StatusBar
        barStyle={theme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={colors.background}
      />
    </View>
  );
};

export default ChatLayout;
