import React from "react";
import { Platform } from "react-native";

const SafeArea = Platform.select({
  ios: () => require("react-native").SafeAreaView,
  android: () => require("react-native-safe-area-context").SafeAreaView,
})();

const ScreenWrapper = ({ children }) => {
  return <SafeArea>{children}</SafeArea>;
};

export default ScreenWrapper;
