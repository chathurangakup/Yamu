import CommonButton from "@/components/CommonButton";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../../slices/auth/authSlice";

const Account = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    router.replace("/(auth)/signIn");
  };

  return (
    <View className="pt-11">
      <Text>Account Screen</Text>
      <CommonButton title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Account;
