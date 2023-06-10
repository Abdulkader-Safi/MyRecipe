import { View, Text } from "react-native";
import React, { useState } from "react";
import { Loading, ScreenWrapper } from "./../../components";

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ScreenWrapper>
      {isLoading && <Loading />}

      <View className="h-screen flex justify-around items-center bg-bg-color">
        <Text>HomeScreen</Text>
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;
