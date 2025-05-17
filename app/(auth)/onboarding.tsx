import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

const onboarding = () => {

  return (
    <View className="flex-1 bg-white justify-center items-center p-6">
      <Image
        source={{ uri: 'https://example.com/onboarding-image.png' }} // Replace with your image URL
        className="w-72 h-72 mb-8"
        resizeMode="contain"
        alt='Onboarding Image'
      />
      <Text className="text-3xl font-bold text-center mb-4">Welcome to MyApp</Text>
      <Text className="text-base text-gray-600 text-center mb-8">
        Discover features, stay productive, and get started quickly!
      </Text>
      <TouchableOpacity
        onPress={() => router.push('/signin')}
        className="bg-blue-600 px-6 py-3 rounded-2xl shadow-md"
      >
        <Text className="text-white text-lg font-semibold">Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default onboarding;