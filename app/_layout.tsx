import { persistor, store } from "@/store";
import { Redirect, Stack } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function RootNavigator() {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

  // 🔐 Auth-based routing
  if (isLoggedIn) {
    return <Redirect href="/(tabs)/home" />;
  }

  return <Redirect href="/(auth)/mobileNumValidate" />;
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <View className="flex-1 items-center justify-center">
            <ActivityIndicator size="large" />
          </View>
        }
        persistor={persistor}
      >
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="index" />
        </Stack>

        <RootNavigator />
      </PersistGate>
    </Provider>
  );
}
