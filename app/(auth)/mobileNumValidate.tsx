import { useCheckMobileMutation } from "@/slices/auth/authApi";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Text, View } from "react-native";
import CommonButton from "../../components/CommonButton";
import CountryPhoneInput from "../../components/CountryPhoneInput";
import { COLORS } from "../../constants/colors";

const MobileNumValidate = () => {
  const [countryCode, setCountryCode] = useState("");
  const [phone, setPhone] = useState("");

  const [checkMobile, { isLoading }] = useCheckMobileMutation();

  const isValid = countryCode.length > 0 && phone.length >= 9;

  const handleNext = async () => {
    if (!isValid) return;

    const fullNumber = `${countryCode}${phone}`;

    const result = await checkMobile({ mobile: fullNumber }).unwrap();

    if (result.exists) {
      router.replace("/(auth)/signIn");
    } else {
      router.replace("/(auth)/signUp");
    }
  };

  return (
    <View className="flex-1 bg-[#FDF2DB] px-6 pt-28 justify-between">
      <View>
        <Text className="text-2xl font-bold mb-8 text-center">
          Enter your mobile number
        </Text>

        <CountryPhoneInput
          onChange={(code, value) => {
            setCountryCode(code);
            const cleaned = value.replace(/[^0-9+]/g, "");
            setPhone(cleaned);
          }}
        />

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
        <Text className="text-[#464444] text-[16px] mb-4">
          By continuing you may receive an SMS for verification. Message and
          data rates may apply.
        </Text>

        <CommonButton
          title={isLoading ? "Checking..." : "Next"}
          disabled={!isValid || isLoading}
          onPress={handleNext}
        />
      </View>
    </View>
  );
};

export default MobileNumValidate;
