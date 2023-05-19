import { View, Text } from "react-native";
import React from "react";
import { ScreenWrapper } from "../../components";

const Login = () => {
  return (
    <ScreenWrapper>
      <View className="h-full flex justify-around items-center bg-bg-color">
        <Text>Login</Text>
      </View>
    </ScreenWrapper>
  );
};

export default Login;
