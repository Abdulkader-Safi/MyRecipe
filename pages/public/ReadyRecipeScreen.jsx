import {
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Loading, ScreenWrapper } from "../../components";
import { Card, Paragraph } from "react-native-paper";
import { useDispatch } from "react-redux";
import { SET_NAVIGATION_PAGE } from "../../redux/slices/routeSlices";

const ReadyRecipeScreen = () => {
  const scrollRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading1, setIsLoading1] = useState(false);
  const [mainPage, setMainPage] = useState(true);
  const [displaySelectedCategory, setDisplaySelectedCategory] = useState(false);
  const [meals, setMeals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  // Public Meals API
  const getMeals = async () => {
    setIsLoading1(true);
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
    const response = await fetch(url);
    const data = await response.json();
    setMeals(data.categories);
    setIsLoading1(false);
    scrollRef.current?.scrollTo({
      y: 0,
    });
  };

  useEffect(() => {
    setIsLoading1(true);
    getMeals();
  }, []);

  const handelRequestedType = async (category) => {
    setMainPage(false);
    setIsLoading(true);
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    const response = await fetch(url);
    const data = await response.json();
    setSelectedCategory(data.meals);
    setSearchQuery("");
    setDisplaySelectedCategory(true);
    setIsLoading(false);
    scrollRef.current?.scrollTo({
      y: 0,
    });
  };

  const HandleGoBackHome = () => {
    if (mainPage) {
      return;
    }
    setIsLoading(true);
    setDisplaySelectedCategory(false);
    setMainPage(true);
    setSearchQuery("");
    setIsLoading(false);
    scrollRef.current?.scrollTo({
      y: 0,
    });
  };

  const handel = (mealID) => {
    setIsLoading(true);
    // dispatch(
    //   SET_MEAL_ID({
    //     MealID: mealID,
    //   })
    // );

    dispatch(
      SET_NAVIGATION_PAGE({
        page: "SelectedRecipe",
      })
    );
    setIsLoading(false);
  };

  return (
    <>
      {isLoading1 ? (
        <View className="h-screen bg-bg-color">
          <Loading />
        </View>
      ) : (
        <ScreenWrapper>
          <View className="h-screen w-screen flex justify-around items-center bg-bg-color">
            <View className="w-11/12 mb-14 justify-around absolute top-0.5 z-10">
              <View className="flex flex-row w-12/12 justify-center items-center mt-2">
                <TouchableOpacity
                  className="flex justify-center items-center p-3.5 rounded-2xl border-2 border-input-border bg-wlc-color z-10"
                  onPress={HandleGoBackHome}
                >
                  <Image source={require("./../../assets/icons/double-left.png")} />
                </TouchableOpacity>

                <TextInput
                  placeholder="Search..."
                  onChangeText={setSearchQuery}
                  value={searchQuery}
                  autoCapitalize="none"
                  className="w-11/12 p-3 rounded-2xl border-2 border-input-border bg-wlc-color"
                />
              </View>
            </View>

            <View className="w-full items-center">
              <ScrollView className="w-full mt-16 mb-12 rounded-3xl" ref={scrollRef}>
                {displaySelectedCategory
                  ? selectedCategory
                      .filter((meal) => {
                        return searchQuery.toLowerCase() === ""
                          ? meal
                          : meal.strMeal.toLowerCase().includes(searchQuery);
                      })
                      .map((meal, index) => (
                        <View className="m-1" key={index}>
                          <TouchableWithoutFeedback
                            className="mt-4"
                            onPress={() => handel(meal.idMeal)}
                          >
                            <Card className="mx-3">
                              <Card.Cover source={{ uri: meal.strMealThumb }} />
                              <Card.Title title={meal.strMeal} />
                            </Card>
                          </TouchableWithoutFeedback>
                        </View>
                      ))
                  : meals
                      .filter((meal) => {
                        return searchQuery.toLowerCase() === ""
                          ? meal
                          : meal.strCategory.toLowerCase().includes(searchQuery);
                      })
                      .map((meal, index) => (
                        <View className="m-1" key={index}>
                          <TouchableWithoutFeedback
                            className="mt-4"
                            onPress={() => handelRequestedType(meal.strCategory)}
                          >
                            <Card className="mx-3">
                              <Card.Cover source={{ uri: meal.strCategoryThumb }} />
                              <Card.Title title={meal.strCategory} />
                            </Card>
                          </TouchableWithoutFeedback>
                        </View>
                      ))}
              </ScrollView>
            </View>
          </View>
        </ScreenWrapper>
      )}

      {isLoading ? <Loading /> : null}
    </>
  );
};

export default ReadyRecipeScreen;
