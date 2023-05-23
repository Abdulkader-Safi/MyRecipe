import { View, Text } from "react-native";
import React from "react";
import { ScreenWrapper } from "../../components";

const ReadyRecipeScreen = () => {
  return (
    <ScreenWrapper>
      <View className="h-screen flex justify-around items-center bg-bg-color">
        <Text>ReadyRecipeScreen</Text>
      </View>
    </ScreenWrapper>
  );
};

export default ReadyRecipeScreen;
