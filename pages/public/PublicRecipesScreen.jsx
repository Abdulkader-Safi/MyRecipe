import { View, Text, TextInput, Keyboard, ScrollView, TouchableOpacity, Image, TouchableWithoutFeedback } from "react-native";
import React, { useRef, useState } from "react";
import { Loading, ScreenWrapper } from "../../components";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { Card, Paragraph } from "react-native-paper";

const PublicRecipesScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const scrollRef = useRef();

  const HandelGoTopPage = () => {
    setIsLoading(true);
    scrollRef.current?.scrollTo({
      y: 0,
    });
    Keyboard.dismiss();
    setIsLoading(false);
  };

  const getRecipes = async () => {
    setIsLoading(true);
    setSearchQuery("");
    const RecipesRef = collection(db, "Recipe");
    const q = query(RecipesRef, where("isPublic", "==", true));
    const querySnapshot = await getDocs(q);
    setRecipes([]);
    querySnapshot.forEach((doc) => {
      setRecipes((recipes) => [...recipes, doc.data()]);
    });
    setIsLoading(false);
  };

  return (
    <>
      <ScreenWrapper>
        <View className="h-screen w-screen flex items-center bg-bg-color">
        <View className="w-11/12 mb-14 justify-around absolute top-0.5 z-10">
            <View className="flex flex-row w-12/12 justify-center items-center mt-2">
              <TextInput
                placeholder="Search..."
                onChangeText={setSearchQuery}
                value={searchQuery}
                autoCapitalize="none"
                className="w-11/12 p-3 rounded-2xl border-2 border-input-border bg-wlc-color"
              />
              <TouchableOpacity
                className="flex justify-center items-center p-3.5 rounded-2xl border-2 border-input-border bg-wlc-color z-10"
                onPress={getRecipes}
              >
                <Image source={require("./../../assets/icons/refresh.png")} />
              </TouchableOpacity>
            </View>
          </View>
          <View className="w-full items-center">
            <ScrollView className="w-full mt-16 mb-12 rounded-3xl" ref={scrollRef}>
              {recipes.length !== 0 ? (
                recipes
                  .filter((meal) => {
                    return searchQuery.toLowerCase() === ""
                      ? meal
                      : meal.recipeName.toLowerCase().includes(searchQuery);
                  })
                  .map((meal, index) => (
                    <View className="m-1" key={index}>
                      <TouchableWithoutFeedback className="mt-4" onPress={() => {}}>
                        <Card className="mx-3">
                          <Card.Cover source={{ uri: meal.photoPath }} />
                          <Card.Title
                            className=" flex justify-center items-center"
                            title={meal.recipeName}
                          />
                          <Paragraph className="mx-5 mb-1 p-1">{meal.userName}</Paragraph>
                        </Card>
                      </TouchableWithoutFeedback>
                    </View>
                  ))
              ) : (
                <View className="w-full h-screen flex justify-center items-center">
                  <TouchableWithoutFeedback className="mt-4 " onPress={getRecipes}>
                    <View className="flex justify-center items-center">
                      <Text className="text-4xl text-wlc-color">No Recipes Found</Text>
                      <Text className="text-lg text-bg-gold">Click to refresh</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              )}
            </ScrollView>
          </View>
        </View>
      </ScreenWrapper>
      <TouchableOpacity
        className="bg-bg-gold flex justify-center items-center p-2 rounded-2xl absolute bottom-5 right-5 z-10"
        onPress={HandelGoTopPage}
      >
        <Image source={require("./../../assets/icons/double-up.png")} />
      </TouchableOpacity>

      {isLoading ? <Loading /> : null}
    </>
  );
};

export default PublicRecipesScreen;
