import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import CountrySelect, { ICountry } from "react-native-country-select";

type Props = {
  onChange?: (countryCode: string, phone: string) => void;
};

export default function CountryPhoneInput({ onChange }: Props) {
  const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [phone, setPhone] = useState("");

  // ✅ Extract country calling code safely
  const countryCode = selectedCountry?.idd?.root
    ? `${selectedCountry.idd.root}`
    : "";

  // ✅ Notify parent whenever value changes
  useEffect(() => {
    if (onChange) {
      onChange(countryCode, phone);
    }
  }, [countryCode, phone]);

  return (
    <View className="flex-row items-center rounded-xl p-2 shadow-sm">
      {/* Country selector */}
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="flex-row items-center"
      >
        <Text className="text-2xl mr-2">{selectedCountry?.flag ?? "🌐"}</Text>

        <AntDesign
          name="down"
          size={12}
          color="#333"
          style={{ marginRight: 8 }}
        />
      </TouchableOpacity>

      {/* Phone input */}
      <View className="flex-1 flex-row items-center ml-3 border-b border-gray-200">
        <Text className="text-lg font-bold mr-1">{countryCode || "+"}</Text>

        <TextInput
          className="flex-1 text-lg pb-3" // Added padding bottom
          placeholder="Phone number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      {/* Country modal */}
      <CountrySelect
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelect={(country) => {
          setSelectedCountry(country);
          setModalVisible(false);
        }}
      />
    </View>
  );
}
