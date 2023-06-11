import { View, Text, Image, Keyboard, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Loading, ScreenWrapper } from "./../../components";
import { SET_NAVIGATION_PAGE } from "../../redux/slices/routeSlices";

const NewRecipe = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const HandleGoBackHome = (e) => {
    e.preventDefault();
    Keyboard.dismiss();

    setIsLoading(true);
    dispatch(
      SET_NAVIGATION_PAGE({
        page: "HOME",
      })
    );

    setIsLoading(false);
  };

  return (
    <ScreenWrapper>
      {isLoading && <Loading />}

      <View className="h-screen w-screen flex justify-around items-center bg-bg-color">
        <View className="bg-bg-gold flex flex-row justify-between items-center p-3 rounded-2xl w-full mx-3">
          <TouchableOpacity
            className="bg-bg-color flex justify-center items-center p-2 rounded-2xl"
            onPress={HandleGoBackHome}
          >
            <Image source={require("./../../assets/icons/double-left.png")} />
          </TouchableOpacity>
          <View>
            <Text className="text-xl">Add New Recipe</Text>
          </View>
          <TouchableOpacity
            className="bg-bg-while flex justify-center items-center p-2 rounded-2xl"
            onPress={HandleGoBackHome}
          >
            <Image source={require("./../../assets/icons/double-right.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default NewRecipe;
