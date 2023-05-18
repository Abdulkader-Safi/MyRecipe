import { View, Text } from "react-native";
import React from "react";
import AppNavigation from "./navigation/appNavigation";

const App = () => {
  return (
    <View className="h-screen w-screen bg-bg-color">
      <AppNavigation />
    </View>
  );
};

export default App;
