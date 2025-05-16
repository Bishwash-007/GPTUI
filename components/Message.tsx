import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";

type MessageProps = {
  isBot: boolean;
  message: string;
};

const Message = ({ isBot, message }: MessageProps) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isBot) {
      setDisplayedText("");

      interval = setInterval(() => {
        setDisplayedText((prev) => {
          const nextChar = message[prev.length];
          if (nextChar) {
            return prev + nextChar;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 30);
    } else {
      setDisplayedText(message);
    }

    return () => clearInterval(interval);
  }, [isBot, message]);

  const isTyping = isBot && displayedText.length < message.length;

  return (
    <Animated.View
      entering={FadeIn.duration(300)}
      className={`my-1.5 mx-0 w-full ${isBot ? "items-start" : "items-end"}`}
    >
      <Animated.View
        entering={isBot ? FadeInDown.duration(400) : undefined}
        className={`max-w-[95%] p-3 rounded-lg ${
          isBot ? " rounded-tl-none " : " rounded-tr-none "
        }`}
        style={{
          shadowOpacity: 0.05,
          shadowRadius: 3,
          shadowOffset: { width: 0, height: 2 },
        }}
      >
        <View className="flex-row items-center">
          <Text
            className={`text-base font-medium ${
              isBot ? "text-gray-800" : "text-gray-800"
            }`}
            selectable
          >
            {displayedText}
          </Text>
          {isTyping && (
            <Animated.View
              entering={FadeIn.duration(100)}
              className="ml-1 h-5 w-[2px]"
            />
          )}
        </View>
      </Animated.View>
    </Animated.View>
  );
};

export default Message;
