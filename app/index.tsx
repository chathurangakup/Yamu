import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";
import { COLORS } from "../constants/colors";
import "./global.css";

export default function App() {
  return (
    <View
      className={`flex-1 justify-center items-center`}
      style={{ backgroundColor: COLORS.background }}
    >
      <View className="w-[150px] h-[150px] rounded-2xl shadow-lg overflow-hidden">
        <LinearGradient
          colors={[COLORS.gradientTop, COLORS.gradientBottom]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          className="justify-center items-center"
        >
          <Text className="text-white text-4xl font-bold tracking-widest">
            Yamu
          </Text>
        </LinearGradient>
      </View>
    </View>
  );
}
