import { View, Text } from "react-native";
import React, { useState } from "react";
import { Loading, ScreenWrapper } from "../../components";

const PublicRecipesScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <ScreenWrapper>
        <View className="h-screen w-screen flex justify-center items-center bg-bg-color">
          <Text>PublicRecipesScreen</Text>
        </View>
      </ScreenWrapper>
      {isLoading ? <Loading /> : null}
    </>
  );
};

export default PublicRecipesScreen;
