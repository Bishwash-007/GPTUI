import { useTheme } from "@/context/ThemeContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useRef, useState } from "react";
import { ActivityIndicator, TextInput, TouchableOpacity, View } from "react-native";

type InputFieldProps = {
  onPress: (text: string) => void;
  isLoading?: boolean;
};

const InputField = ({ onPress, isLoading = false }: InputFieldProps) => {
  const { colors } = useTheme();
  const [text, setText] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const handleSend = () => {
    if (text.trim() && !isLoading) {
      onPress(text);
      setText("");
      inputRef.current?.clear();
    }
  };

  const handleAttachment = async () => {
    try {
      // TODO: Implement file attachment functionality
      // const result = await ImagePicker.launchImageLibraryAsync({
      //   mediaTypes: ImagePicker.MediaTypeOptions.All,
      //   allowsEditing: true,
      //   quality: 1,
      // });
      
      // if (!result.canceled) {
      //   // Handle the selected file
      //   console.log(result.assets[0]);
      // }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  const handleVoiceInput = () => {
    // TODO: Implement voice input functionality
    setIsRecording(!isRecording);
    // if (isRecording) {
    //   // Stop recording
    // } else {
    //   // Start recording
    // }
  };

  const handleWebSearch = () => {
    // TODO: Implement web search functionality
    console.log('Web search clicked');
  };

  const handleExplore = () => {
    // TODO: Implement explore functionality
    console.log('Explore clicked');
  };

  return (
    <View 
      className="flex flex-col items-start justify-center w-[400px] px-6 py-2 border-t"
      style={{ 
        backgroundColor: colors.background,
        borderColor: colors.border 
      }}
    >
      {/* Input Container */}
      <View 
        className="flex flex-row items-center w-full mt-2 rounded-xl px-3"
        style={{ backgroundColor: colors.card }}
      >
        <TextInput
          ref={inputRef}
          className="flex-1 text-base"
          onChangeText={setText}
          value={text}
          placeholder="Ask me anything..."
          placeholderTextColor={colors.text + "80"}
          multiline
          numberOfLines={2}
          autoCorrect={false}
          autoCapitalize="sentences"
          returnKeyType="send"
          onSubmitEditing={handleSend}
          editable={!isLoading}
          style={{ color: colors.text }}
        />
      </View>

      {/* Action Row */}
      <View className="flex flex-row items-center justify-between w-full mt-3">
        <View className="flex flex-row gap-1">
          <TouchableOpacity 
            onPress={handleAttachment}
            className="p-2 rounded-full justify-start"
            disabled={isLoading}
          >
            <Ionicons name="add-outline" size={22} color={colors.text} />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={handleWebSearch}
            className="p-2 rounded-full"
            disabled={isLoading}
          >
            <Ionicons name="globe-outline" size={22} color={colors.text} />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={handleExplore}
            className="p-2 rounded-full"
            disabled={isLoading}
          >
            <Ionicons name="telescope-outline" size={22} color={colors.text} />
          </TouchableOpacity>
        </View>

        <View className="flex flex-row gap-1 justify-end">
          <TouchableOpacity
            onPress={handleVoiceInput}
            className="p-2 rounded-full"
            disabled={isLoading}
          >
            <Ionicons 
              name={isRecording ? "stop-circle-outline" : "mic-outline"} 
              size={22} 
              color={isRecording ? colors.error : colors.text} 
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSend}
            className="p-2 rounded-full"
            disabled={isLoading || !text.trim()}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color={colors.text} />
            ) : (
              <Ionicons
                name="arrow-up-circle-outline"
                size={22}
                color={text.trim() ? colors.text : colors.text + "80"}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default InputField;
