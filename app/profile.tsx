import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import SettingsItem from "@/components/ListItem";

const Profile = () => {
  const { colors } = useTheme();
  const router = useRouter();
  const { user } = useAuth();

  const settingsData = [
    {
      label: "Settings",
      iconName: "settings-outline",
      onPress: () => router.push("/settings"),
    },
    {
      label: "Notifications",
      iconName: "notifications-outline",
      onPress: () => console.log("Notifications pressed"),
    },
    {
      label: "Help & Support",
      iconName: "help-circle-outline",
      onPress: () => console.log("Help & Support pressed"),
    },
  ];

  return (
    <View className="flex-1" style={{ backgroundColor: colors.background }}>
      {/* Header */}
      <View
        className="flex-row items-center p-4 border-b"
        style={{ borderColor: colors.border }}
      >
        <TouchableOpacity onPress={() => router.back()} className="p-2">
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text className="text-xl font-semibold ml-2" style={{ color: colors.text }}>
          Profile
        </Text>
      </View>

      <FlatList
        ListHeaderComponent={
          <>
            {/* Profile Info */}
            <View className="p-4">
              <View className="rounded-lg p-4 mb-6" style={{ backgroundColor: colors.card }}>
                <View className="items-center mb-4">
                  <View
                    className="w-20 h-20 rounded-full items-center justify-center mb-2"
                    style={{ backgroundColor: colors.primary }}
                  >
                    <Text className="text-2xl font-bold" style={{ color: colors.text }}>
                      {user?.name?.[0] || "U"}
                    </Text>
                  </View>
                  <Text className="text-xl font-semibold" style={{ color: colors.text }}>
                    {user?.name || "User"}
                  </Text>
                  <Text className="text-sm" style={{ color: colors.text }}>
                    {user?.email || "user@example.com"}
                  </Text>
                </View>
              </View>

              <Text className="text-lg font-semibold mb-4" style={{ color: colors.text }}>
                Account
              </Text>
            </View>
          </>
        }
        data={settingsData}
        keyExtractor={(item) => item.label}
        renderItem={({ item, index }) => (
          <SettingsItem
            label={item.label}
            iconName={item.iconName}
            onPress={item.onPress}
            borderBottom={index !== settingsData.length - 1}
          />
        )}
        contentContainerStyle={{
          backgroundColor: colors.card,
          borderRadius: 12,
          marginHorizontal: 16,
          paddingBottom: 24,
        }}
      />
    </View>
  );
};

export default Profile;