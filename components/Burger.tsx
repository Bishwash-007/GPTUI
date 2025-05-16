import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { Link } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

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

            <Text className="text-base text-gray-500 mb-3">Chat History</Text>
            <Link href="/" className="py-2">
              <Text className="text-lg text-gray-900 font-medium">
                Dont Press Not Implemented
              </Text>
            </Link>
            <Link href="/" className="py-2">
              <Text className="text-lg text-gray-900 font-medium">
                Dont Press Not Implemented
              </Text>
            </Link>
            <Link href="/" className="py-2">
              <Text className="text-lg text-gray-900 font-medium">
                Dont Press Not Implemented
              </Text>
            </Link>
          </View>

          {/* Bottom: Profile & Settings */}
          <View className="flex-row items-center justify-between">
            <Link href="/profile" className="py-3">
              <Text className="text-lg text-gray-900 font-medium">Profile</Text>
            </Link>
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
