import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface CommonButtonProps {
  title: string;
  onPress: () => void;
  className?: string;
  disabled?: boolean;
}

export default function CommonButton({
  title,
  onPress,
  className = "",
  disabled = false,
}: CommonButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
      className={`
        rounded-[10px] py-3 items-center m-4
        ${disabled ? "bg-gray-400" : "bg-[#080000]"}
        ${className}
      `}
    >
      <Text
        className={`text-base font-bold ${
          disabled ? "text-gray-700" : "text-white"
        }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
