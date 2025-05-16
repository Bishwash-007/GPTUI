import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";

const Header = ({ title, onMenuPress }: { title: string; onMenuPress: () => void }) => {
  const router = useRouter();

  return (
    <View className="flex bg-white w-full px-4 py-2">
      <View className="flex-row justify-between items-center h-14">
        <TouchableOpacity onPress={onMenuPress} className="p-2">
          <Ionicons name="menu-outline" size={26} color="#1f2937" />
        </TouchableOpacity>

        <Text className="text-gray-900 text-xl font-semibold flex-1 text-center mx-2">
          {title}
        </Text>

        <TouchableOpacity
          onPress={() => router.push('/')}
          className="p-2"
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Entypo name="new-message" size={24} color="#1f2937" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;