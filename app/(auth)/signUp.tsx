import CommonButton from "@/components/CommonButton";
import CommonTextInput from "@/components/CommonTextInput";
import { images } from "@/constants/images";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const SignUp = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <LinearGradient
            colors={["rgba(0,0,0,0.9)", "rgba(0,0,0,0.3)", "rgba(0,0,0,0.1)"]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
              borderRadius: 0,
            }}
            start={{ x: 0.5, y: 1 }}
            end={{ x: 0.5, y: 0 }}
          />
          <Text className="text-2xl text-white font-bold absolute bottom-5 left-5 ">
            Create Your Account
          </Text>
        </View>
        {/* Form Section */}
        <View className="px-5 mt-8 space-y-4">
          <View className="pt-4">
            <Text className="mb-2 text-base font-bold text-black">Name</Text>
            <CommonTextInput
              placeholder="Enter your name"
              autoCapitalize="words"
            />
          </View>
          <View className="pt-4">
            <Text className="mb-2 text-base font-bold text-black">Email</Text>
            <CommonTextInput
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View className="pt-4">
            <Text className="mb-2 text-base font-bold text-black">
              Password
            </Text>
            <CommonTextInput
              placeholder="Enter your password"
              secureTextEntry
              autoCapitalize="none"
            />
          </View>
          {/* Button Section */}
          <View className="pt-6">
            <CommonButton title="Sign Up" onPress={() => {}} />
          </View>
          {/* Divider Section */}
          <View className="flex-row items-center my-6">
            <View className="flex-1 h-px bg-[#E7E7E7]" />
            <Text className="mx-3 text-lg text-[#000] font-bold">Or</Text>
            <View className="flex-1 h-px bg-[#E7E7E7]" />
          </View>
          {/* Google Login Button */}
          <View className="mb-8">
            <View className="flex-row items-center justify-center bg-white rounded-xl border border-[#000] px-4 py-3 mx-4">
              <Image
                source={images.googleLogo}
                className="w-6 h-6 mr-3"
                resizeMode="contain"
              />
              <Text className="text-base font-bold text-black">
                Login with a Google
              </Text>
            </View>
          </View>
          {/* Already have an account? Log in */}
          <View className="items-center mb-8">
            <Text className="text-base text-black">
              Already have an account?{" "}
              <Text
                className="text-[#2563eb] font-bold"
                onPress={() => router.push("/(auth)/signIn")}
              >
                Log in
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
