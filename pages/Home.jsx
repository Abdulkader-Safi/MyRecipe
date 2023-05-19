import { View, Text } from "react-native";
import React from "react";
import { ScreenWrapper } from "../components";

const Home = () => {
  return (
    <ScreenWrapper>
      <View className="h-full flex justify-around items-center bg-bg-color">
        <Text>Hello World</Text>
      </View>
    </ScreenWrapper>
  );
};

export default Home;
