import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface CommonButtonProps {
  title: string;
  onPress: () => void;
  className?: string;
}

export default function CommonButton({
  title,
  onPress,
  className,
}: CommonButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`bg-[#080000] rounded-[10px] py-3 items-center m-4 ${className || ""}`}
      activeOpacity={0.8}
    >
      <Text className="text-white text-base font-bold">{title}</Text>
    </TouchableOpacity>
  );
}
