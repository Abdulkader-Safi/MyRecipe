import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { ScreenWrapper } from "../../components";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const HandleForgetPassword = (e) => {
    e.preventDefault();
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView className="flex-1 justify-center items-center" behavior="padding">
      <ScreenWrapper>
        <View className="h-screen flex justify-between items-center bg-bg-color">
          <View className="flex-col justify-center items-center mt-10"></View>
          <View className="flex-col justify-center items-center mt-10">
            <Image className="h-72 w-72" source={require("./../../assets/images/Main.png")} />
          </View>
          <View className="w-screen h-2/6 rounded-t-3xl bg-wlc-color flex justify-center items-center">
            <View className="w-4/5 mb-14 h-4/5 justify-around">
              <View className="">
                <Text className="text-slate-800 mb-2">Email</Text>
                <TextInput
                  placeholder="Email"
                  onChangeText={setEmail}
                  value={email}
                  autoCapitalize="none"
                  className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border"
                />
              </View>
              <View className="">
                <TouchableOpacity
                  onPress={HandleForgetPassword}
                  className="bg-bg-gold flex justify-center items-center p-3 rounded-2xl"
                >
                  <Text>Send Email</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScreenWrapper>
    </KeyboardAvoidingView>
  );
};

export default ForgetPassword;
