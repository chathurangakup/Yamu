import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import CommonButton from "../../components/CommonButton";
import CountryPhoneInput from "../../components/CountryPhoneInput";
import { COLORS } from "../../constants/colors";

const MobileNumValidate = () => {
  return (
    <View className="flex-1 bg-[#FDF2DB] px-6 pt-28 justify-between">
      <View>
        <Text className="text-2xl font-bold mb-8 text-center">
          Enter your mobile number
        </Text>
        <CountryPhoneInput />
        <View className="flex-row items-center justify-center mt-8">
          <Text
            className="text-base font-semibold mr-2"
            style={{ color: COLORS.social }}
          >
            Or Connect with social
          </Text>
          <AntDesign name="arrow-right" size={18} color={COLORS.social} />
        </View>
      </View>
      <View className="mb-8">
        <Text className="text-[#464444] text-[16px]  mb-4">
          By continuing you may recieve an SMS for verification. Message and
          data rates may apply.
        </Text>
        <CommonButton title="Next" onPress={() => {}} />
      </View>
    </View>
  );
};

export default MobileNumValidate;
