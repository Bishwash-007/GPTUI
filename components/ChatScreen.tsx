import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import InputField from "./InputField";
import Message from "./Message";

export type MessageType = {
  text: string;
  isBot: boolean;
  id: number;
  timestamp: number;
  status?: "sending" | "sent" | "error";
};

const ChatScreen = () => {
  const { user } = useAuth();
  const { colors } = useTheme();

  const [messages, setMessages] = useState<MessageType[]>([]);
  const [currentId, setCurrentId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  const handleTextInput = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMessage: MessageType = {
      id: currentId,
      text: trimmed,
      isBot: false,
      timestamp: Date.now(),
      status: "sending",
    };

    setMessages((prev) => [...prev, userMessage]);
    setCurrentId((prev) => prev + 1);
    setIsLoading(true);

    try {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === userMessage.id ? { ...msg, status: "sent" } : msg
        )
      );

      setTimeout(() => {
        const botMessage: MessageType = {
          id: currentId + 1,
          text: "This is a simulated response. Replace with actual API response.",
          isBot: true,
          timestamp: Date.now(),
          status: "sent",
        };
        setMessages((prev) => [...prev, botMessage]);
        setCurrentId((prev) => prev + 2);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Failed to send message:", error);

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === userMessage.id ? { ...msg, status: "error" } : msg
        )
      );
      setIsLoading(false);
    }
  };

  return (
    <View
      className="flex-1"
      style={{ backgroundColor: colors.background }}
    >
      <ScrollView
        ref={scrollViewRef}
        className="flex-1 w-full px-4 pt-4"
        style={{ backgroundColor: colors.background }}
        contentContainerStyle={{ paddingBottom: 20 }}
        keyboardShouldPersistTaps="handled"
      >
        {messages.map((message) => (
          <Message
            key={message.id}
            isBot={message.isBot}
            message={message.text}
            timestamp={message.timestamp}
            status={message.status}
          />
        ))}

        {isLoading && (
          <View className="flex-row items-center mt-2">
            <ActivityIndicator size="small" color={colors.primary} />
            <Text className="ml-2" style={{ color: colors.text }}>
              Edith is typing...
            </Text>
          </View>
        )}
      </ScrollView>

      <InputField onPress={handleTextInput} isLoading={isLoading} />
    </View>
  );
};

export default ChatScreen;