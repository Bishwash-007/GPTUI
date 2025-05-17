import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ChatHistoryItem from "./ChatHistory";
import { useTheme } from "@/context/ThemeContext";

const SLIDE_WIDTH = Dimensions.get("window").width * 0.75;

type ChatItem = {
  id: string;
  label: string;
  href: string;
};

type BurgerProps = {
  onClose: () => void;
  chatHistory: ChatItem[];
  userName: string;
};

const Burger = ({ onClose, chatHistory, userName }: BurgerProps) => {
  const { colors } = useTheme();
  const slideAnim = useRef(new Animated.Value(-SLIDE_WIDTH)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start();
  }, []); // <-- added dependency array

  const handleClose = () => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: -SLIDE_WIDTH,
        duration: 250,
        easing: Easing.in(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start(onClose);
  };

  const handleNavigate = (href: string) => {
    handleClose();
    router.push(href);
  };

  const handleLogOut = () => {
    handleClose();
    router.replace("/signin");
  };

  return (
    <Animated.View
      className="absolute inset-0"
      style={{ backgroundColor: "rgba(0,0,0,0.5)", opacity: opacityAnim }}
    >
      <TouchableOpacity
        className="flex-1"
        activeOpacity={1}
        onPress={handleClose}
      >
        <Animated.View
          className="absolute top-0 left-0 h-full p-6"
          style={{
            width: SLIDE_WIDTH,
            backgroundColor: colors.card,
            transform: [{ translateX: slideAnim }],
            shadowColor: "#000",
            shadowOffset: { width: 2, height: 0 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            justifyContent: "space-between",
          }}
        >
          {/* Close + Chat History */}
          <View>
            <TouchableOpacity onPress={handleClose} className="mb-6">
              <Ionicons name="close" size={28} color={colors.text} />
            </TouchableOpacity>

            <FlatList
              data={chatHistory}
              keyExtractor={(item) => item.id}
              ListHeaderComponent={
                <Text
                  className="text-lg font-semibold mb-4"
                  style={{ color: colors.text }}
                >
                  Chat History
                </Text>
              }
              renderItem={({ item }) => (
                <ChatHistoryItem
                  label={item.label}
                  onPress={() => handleNavigate(item.href)}
                />
              )}
            />
          </View>

          {/* Profile + Settings */}
          <View
            className="flex-row items-center justify-between pt-4 mt-4"
            style={{ borderTopWidth: 1, borderColor: colors.border }}
          >
            <TouchableOpacity onPress={() => handleNavigate("/profile")}>
              <View className="flex-row items-center">
                <Text
                  style={{ color: colors.text }}
                  className="text-lg font-medium"
                >
                  {userName}
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLogOut}>
              <Ionicons name="exit-outline" size={22} color={colors.text} />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Burger;