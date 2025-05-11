import ChatScreen from "@/components/ChatScreen";
import Header from "@/components/Header";
import { SafeAreaView } from "react-native";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ChatScreen />
    </SafeAreaView>
  );
}
