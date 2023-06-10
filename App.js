import { View, Text } from "react-native";
import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Starter from "./Starter";

const App = () => {
  return (
    <Provider store={store}>
      <Starter />
    </Provider>
  );
};

export default App;
