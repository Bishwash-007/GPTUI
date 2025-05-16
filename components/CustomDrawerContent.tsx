// components/CustomDrawerContent.tsx
import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const CustomDrawerContent = () => {
  return (
    <View className="flex-1 p-4 bg-gray-50">
      <View className="mt-4 space-y-2">
        <Link href="/" asChild>
          <TouchableOpacity className="p-3 rounded-lg bg-white">
            <Text className="text-lg">Chat</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/" asChild>
          <TouchableOpacity className="p-3 rounded-lg bg-white">
            <Text className="text-lg">Settings</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};
export default CustomDrawerContent;
