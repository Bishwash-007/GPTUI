import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import InputField from "./InputField";
import Message from "./Message";

type MessageType = {
  text: string;
  isBot: boolean;
  id: number;
};

const ChatScreen = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [currentId, setCurrentId] = useState(1);

  const handleTextInput = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage = {
      id: currentId,
      text: text.trim(),
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setCurrentId((prev) => prev + 1);

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: currentId + 1,
        text: "The goal of the Fundamentals section is to help you gain a strong foundation on the core concepts of Reanimated and give you the confidence to explore more advanced use cases on your own. This section is packed with interactive examples, code snippets and explanations. Are you ready? Let's dive in!",
        isBot: true,
      };
      setMessages((prev) => [...prev, botMessage]);
      setCurrentId((prev) => prev + 2);
    }, 1000);
  };

  return (
    <View className="flex-1 bg-white items-center justify-center mb-2">
      <ScrollView
        className="flex-1 p-4"
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {messages.map((message) => (
          <Message
            key={message.id}
            isBot={message.isBot}
            message={message.text}
          />
        ))}
      </ScrollView>

      <InputField onPress={handleTextInput} />
    </View>
  );
};

export default ChatScreen;
