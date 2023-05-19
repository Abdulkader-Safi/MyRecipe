import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { ScreenWrapper } from "../components";

const Welcome = () => {
  const navigation = useNavigation();

  const handleGotoLogin = () => {
    navigation.navigate("Login");
  };

  const handleGotoRegistration = () => {
    navigation.navigate("Register");
  };

  return (
    <ScreenWrapper>
      <View className="h-full flex justify-around items-center bg-bg-color">
        <View className="flex-col justify-center items-center mt-10">
          <Text className="text-4xl text-wlc-color">Welcome</Text>
          <Image className="h-72 w-72" source={require("../assets/images/Main.png")} />
        </View>
        <View className="w-4/5">
          <View className="my-3">
            <Text className="text-slate-800 mb-2">Please Login</Text>
            <TouchableOpacity
              onPress={handleGotoLogin}
              className="bg-bg-gold flex justify-center items-center p-3 rounded-2xl"
            >
              <Text>Login</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text className="mb-2">Don't have account Register</Text>
            <TouchableOpacity
              onPress={handleGotoRegistration}
              className="bg-bg-gold flex justify-center items-center p-3 rounded-2xl"
            >
              <Text>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;
