import { View, Text } from "react-native";
import React from "react";
import { ScreenWrapper } from "../../components";

const PublicRecipesScreen = () => {
  return (
    <ScreenWrapper>
      <View className="h-screen flex justify-around items-center bg-bg-color">
        <Text>PublicRecipesScreen</Text>
      </View>
    </ScreenWrapper>
  );
};

export default PublicRecipesScreen;
