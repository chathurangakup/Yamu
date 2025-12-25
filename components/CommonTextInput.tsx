import { COLORS } from "@/constants/colors";
import React from "react";
import { TextInput, TextInputProps } from "react-native";

const CommonTextInput: React.FC<TextInputProps> = (props) => {
  return (
    <TextInput
      className="rounded-3xl px-8 py-3 text-base text-[#222]"
      style={[{ backgroundColor: COLORS.inputBg }, props.style]}
      placeholderTextColor="#888"
      {...props}
    />
  );
};

export default CommonTextInput;
