import { useState, useEffect } from "react";
import { View, Text, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";
import "../global.css";
import { ArrowRight } from "lucide-react";
import arrow from "../assets/images/arrow-right-svgrepo-com.png";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center bg-black">
      <Text className="text-center text-lg uppercase text-white">
        Welcome to ERS
      </Text>

      <Pressable
        className="w-[80%] p-4 rounded-md mx-auto mt-5" // Added background color for visibility
        onPress={() => router.push("/(tabs)")}
      >
        <View className="flex flex-row items-center justify-center">
          <Text className="text-white capitalize text-center">Go to Tabs</Text>
          <Image
            source={arrow} // Fixed Image source
            className="w-5 h-5 ml-2"
          />
        </View>
      </Pressable>
    </View>
  );
}
