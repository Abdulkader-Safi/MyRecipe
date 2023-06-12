import { View, Text } from "react-native";
import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppNavigation from "./navigation/appNavigation";

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
