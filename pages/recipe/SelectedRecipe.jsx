import { View, Text, Keyboard, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading, ScreenWrapper } from "./../../components";
import { SET_NAVIGATION_PAGE, selectRecipeUID } from "../../redux/slices/routeSlices";

const SelectedRecipe = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [recipe, setRecipe] = useState();
  const recipeUID = useSelector(selectRecipeUID);

  const getMeals = async () => {
    setIsLoading(false);
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52874`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data.meals[0]);
      })
      .catch((error) => {
        // alert(error);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getMeals();
  }, []);

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
    <>
      <ScreenWrapper>
        <View className="h-screen w-screen flex justify-around items-center bg-bg-color">
          <View className="bg-bg-gold flex flex-row items-center p-3 rounded-2xl w-full mx-3 absolute top-2">
            <TouchableOpacity
              className="bg-bg-color flex justify-center items-center p-2 rounded-2xl absolute left-5 z-10"
              onPress={HandleGoBackHome}
            >
              <Image source={require("./../../assets/icons/double-left.png")} />
            </TouchableOpacity>
            <View className="w-full flex justify-center">
              <Text className="text-xl m-auto">Add New Recipe</Text>
            </View>
          </View>

          <Text>{recipeUID}</Text>
        </View>
      </ScreenWrapper>
      {isLoading ? <Loading /> : null}
    </>
  );
};

export default SelectedRecipe;
