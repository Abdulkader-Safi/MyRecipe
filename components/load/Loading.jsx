import { View, Text, Image } from "react-native";
import React from "react";

const Loading = () => {
  return (
    <View className="w-screen h-screen mx-auto fixed flex justify-center items-center bg-bg-color">
      <Image className="h-72 w-72" source={require("./../../assets/Loading/Loading.gif")} />
    </View>
  );
};

export default Loading;
