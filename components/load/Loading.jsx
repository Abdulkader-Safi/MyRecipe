import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Loading = () => {
  return (
    // <View className="w-screen h-screen mx-auto fixed flex justify-center items-center bg-bg-color">
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <Image className="h-72 w-72" source={require("./../../assets/Loading/Loading.gif")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
});

export default Loading;
