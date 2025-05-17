import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  Dimensions,
  FlatList,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import ChatHistoryItem from "./ChatHistory";

const UserName = "John Doe"; // Replace with actual user name

const ChatHistoryData = [
  { id: "1", label: "Chat 1", href: "chat/[1]" },
  { id: "2", label: "Chat 2", href: "chat/[2]" },
  { id: "3", label: "Chat 3", href: "chat/[3]" },
];

type BurgerProps = {
  onClose: () => void;
};

const Burger = ({ onClose }: BurgerProps) => {
  const slideAnim = useRef(new Animated.Value(-300)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Open animation
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
  }, [slideAnim, opacityAnim]);

  const handleClose = () => {
    // Close animation
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: -300,
        duration: 250,
        easing: Easing.in(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onClose();
    });
  };

  return (
    <Animated.View
      className="absolute inset-0"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        opacity: opacityAnim,
      }}
    >
      <TouchableOpacity
        className="flex-1"
        activeOpacity={1}
        onPress={handleClose}
      >
        <Animated.View
          className="absolute top-0 left-0 h-full bg-white p-6"
          style={{
            width: Dimensions.get("window").width * 0.75,
            transform: [{ translateX: slideAnim }],
            shadowColor: "#000",
            shadowOffset: { width: 2, height: 0 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            justifyContent: "space-between",
          }}
        >
          {/* Top: Close + Chat History */}
          <View>
            <TouchableOpacity onPress={handleClose} className="mb-6">
              <Ionicons name="close" size={28} color="#1f2937" />
            </TouchableOpacity>

            <FlatList
              data={ChatHistoryData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ChatHistoryItem
                  label={item.label}
                  href={item.href}
                />
              )}
            />
          </View>

          {/* Bottom: Profile & Settings */}
          <View className="items-center justify-between flex flex-row border-t border-gray-200 my-4">
            <TouchableOpacity
              className="py-3"
              onPress={() => router.push("/profile")}
            >
              <View className="flex-row items-center">
                <Text className="text-lg text-gray-900 font-medium">
                  {UserName}
                </Text>
                <Ionicons
                  name="chevron-forward-outline"
                  size={22}
                  color="#1f2937"
                  style={{ marginLeft: 5 }}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="py-3">
              <Ionicons name="settings-outline" size={22} color="#1f2937" />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Burger;
