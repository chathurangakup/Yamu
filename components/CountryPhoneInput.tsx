import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import CountrySelect, { ICountry } from "react-native-country-select";

export default function CountryPhoneInput() {
  const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [phone, setPhone] = useState("");
  return (
    <View className="flex-row items-center rounded-xl p-2 shadow-sm">
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="flex-row items-center"
      >
        {/* Flag on left side */}
        {selectedCountry?.flag ? (
          <Text className="text-2xl mr-2">{selectedCountry.flag}</Text>
        ) : (
          <Text className="text-2xl mr-2">🌐</Text>
        )}
        {/* Dropdown icon next to flag */}
        <AntDesign
          name="down"
          size={12}
          color="#333"
          style={{ marginRight: 8 }}
        />
        {/* Country calling code (e.g. '+94') */}
        <Text className="font-bold"></Text>
      </TouchableOpacity>
      <View className="flex-1 flex-row items-center ml-3 border-b border-gray-200">
        <Text className="text-lg font-bold mr-1">
          {selectedCountry?.idd?.root ? `${selectedCountry.idd.root}` : "+"}
        </Text>
        <TextInput
          className="flex-1 text-lg"
          placeholder="Phone number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
      </View>
      <CountrySelect
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelect={setSelectedCountry}
      />
    </View>
  );
}
