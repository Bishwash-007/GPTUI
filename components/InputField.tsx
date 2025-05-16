import { View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

type InputFieldProps = {
  onPress: (text: string) => void;
};

const InputField = ({ onPress }: InputFieldProps) => {
  const [text, setText] = React.useState("");

  return (
    <View className="flex flex-col items-start justify-center w-[400px] px-6 py-2 bg-white border-t border-gray-100">
      {/* Input Container */}
      <View className="flex flex-row items-center w-full mt-2 rounded-xl px-3">
        <TextInput
          className="flex-1 text-base text-gray-800"
          onChangeText={setText}
          value={text}
          placeholder="Ask me anything..."
          placeholderTextColor="#94a3b8"
          multiline
          numberOfLines={2}
          autoCorrect={false}
          autoCapitalize="sentences"
          returnKeyType="send"
          onSubmitEditing={() => {
            onPress(text);
            setText("");
          }}
        />
      </View>

      {/* Action Row */}
      <View className="flex flex-row items-center justify-between w-full mt-3">
        <View className="flex flex-row gap-1">
          <TouchableOpacity className="p-2 rounded-full justify-start">
            <Ionicons name="add-outline" size={22} color="#1e293b" />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 rounded-full ">
            <Ionicons name="globe-outline" size={22} color="#1e293b" />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 rounded-full">
            <Ionicons name="telescope-outline" size={22} color="#1e293b" />
          </TouchableOpacity>
        </View>

        <View className="flex flex-row gap-1 justify-end">
          <TouchableOpacity
            onPress={() => {
              onPress(text);
              setText("");
            }}
            className="p-2 rounded-full"
          >
            <Ionicons name="mic-outline" size={22} color="#1e293b" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onPress(text);
              setText("");
            }}
            className="p-2 rounded-full"
          >
            <Ionicons
              name="arrow-up-circle-outline"
              size={22}
              color="#1e293b"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default InputField;
