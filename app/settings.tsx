import { useTheme } from "@/context/ThemeContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const Settings = () => {
  const { theme, themeType, setTheme, colors } = useTheme();
  const router = useRouter();

  const themeOptions = [
    { label: "Light", value: "light", icon: "sunny-outline" },
    { label: "Dark", value: "dark", icon: "moon-outline" },
    { label: "System", value: "system", icon: "phone-portrait-outline" },
  ];

  return (
    <View 
      className="flex-1"
      style={{ backgroundColor: colors.background }}
    >
      {/* Header */}
      <View 
        className="flex-row items-center p-4 border-b"
        style={{ borderColor: colors.border }}
      >
        <TouchableOpacity 
          onPress={() => router.back()}
          className="p-2"
        >
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text 
          className="text-xl font-semibold ml-2"
          style={{ color: colors.text }}
        >
          Settings
        </Text>
      </View>

      <ScrollView className="flex-1 p-4">
        {/* Theme Section */}
        <View className="mb-6">
          <Text 
            className="text-lg font-semibold mb-4"
            style={{ color: colors.text }}
          >
            Theme
          </Text>
          <View 
            className="rounded-lg overflow-hidden"
            style={{ backgroundColor: colors.card }}
          >
            {themeOptions.map((option) => (
              <TouchableOpacity
                key={option.value}
                onPress={() => setTheme(option.value as "light" | "dark" | "system")}
                className={`flex-row items-center p-4 ${
                  themeType === option.value ? "bg-primary/10" : ""
                }`}
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: colors.border,
                }}
              >
                <Ionicons 
                  name={option.icon as any} 
                  size={24} 
                  color={colors.text} 
                />
                <Text 
                  className="ml-3 flex-1"
                  style={{ color: colors.text }}
                >
                  {option.label}
                </Text>
                {themeType === option.value && (
                  <Ionicons 
                    name="checkmark" 
                    size={24} 
                    color={colors.primary} 
                  />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Other Settings Sections */}
        <View className="mb-6">
          <Text 
            className="text-lg font-semibold mb-4"
            style={{ color: colors.text }}
          >
            Appearance
          </Text>
          <View 
            className="rounded-lg overflow-hidden"
            style={{ backgroundColor: colors.card }}
          >
            <TouchableOpacity
              className="flex-row items-center p-4"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: colors.border,
              }}
            >
              <Ionicons name="text-outline" size={24} color={colors.text} />
              <Text 
                className="ml-3 flex-1"
                style={{ color: colors.text }}
              >
                Text Size
              </Text>
              <Ionicons name="chevron-forward" size={24} color={colors.text} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Settings;
