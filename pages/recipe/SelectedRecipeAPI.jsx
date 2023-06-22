import {
  View,
  Text,
  Image,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading, ScreenWrapper } from "./../../components";
import { SET_NAVIGATION_PAGE, selectRecipeUID } from "../../redux/slices/routeSlices";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const SelectedRecipe = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const scrollRef = useRef();
  const recipeUID = useSelector(selectRecipeUID);

  const [photoPath, setPhotoPath] = useState("");
  const [recipeName, SetRecipeName] = useState("");

  const [Ingredients01, SetIngredients01] = useState("");
  const [Measure01, SetMeasure01] = useState("");

  const [Ingredients02, SetIngredients02] = useState("");
  const [Measure02, SetMeasure02] = useState("");

  const [Ingredients03, SetIngredients03] = useState("");
  const [Measure03, SetMeasure03] = useState("");

  const [Ingredients04, SetIngredients04] = useState("");
  const [Measure04, SetMeasure04] = useState("");

  const [Ingredients05, SetIngredients05] = useState("");
  const [Measure05, SetMeasure05] = useState("");

  const [Ingredients06, SetIngredients06] = useState("");
  const [Measure06, SetMeasure06] = useState("");

  const [Ingredients07, SetIngredients07] = useState("");
  const [Measure07, SetMeasure07] = useState("");

  const [Ingredients08, SetIngredients08] = useState("");
  const [Measure08, SetMeasure08] = useState("");

  const [Ingredients09, SetIngredients09] = useState("");
  const [Measure09, SetMeasure09] = useState("");

  const [Ingredients10, SetIngredients10] = useState("");
  const [Measure10, SetMeasure10] = useState("");

  const [Ingredients11, SetIngredients11] = useState("");
  const [Measure11, SetMeasure11] = useState("");

  const [Ingredients12, SetIngredients12] = useState("");
  const [Measure12, SetMeasure12] = useState("");

  const [Ingredients13, SetIngredients13] = useState("");
  const [Measure13, SetMeasure13] = useState("");

  const [Ingredients14, SetIngredients14] = useState("");
  const [Measure14, SetMeasure14] = useState("");

  const [Ingredients15, SetIngredients15] = useState("");
  const [Measure15, SetMeasure15] = useState("");

  const [Ingredients16, SetIngredients16] = useState("");
  const [Measure16, SetMeasure16] = useState("");

  const [Ingredients17, SetIngredients17] = useState("");
  const [Measure17, SetMeasure17] = useState("");

  const [Ingredients18, SetIngredients18] = useState("");
  const [Measure18, SetMeasure18] = useState("");

  const [Ingredients19, SetIngredients19] = useState("");
  const [Measure19, SetMeasure19] = useState("");

  const [Ingredients20, SetIngredients20] = useState("");
  const [Measure20, SetMeasure20] = useState("");

  const [preparations, setPreparations] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getMeals();
  }, []);

  const getMeals = async () => {
    const recipeRef = doc(db, "Recipe", recipeUID);
    const getRecipeData = getDoc(recipeRef);
    const recipeData = (await getRecipeData).data();

    setPhotoPath(recipeData.photoPath);
    SetRecipeName(recipeData.recipeName);
    SetIngredients01(recipeData.ingredients01);
    SetIngredients02(recipeData.ingredients02);
    SetIngredients03(recipeData.ingredients03);
    SetIngredients04(recipeData.ingredients04);
    SetIngredients05(recipeData.ingredients05);
    SetIngredients06(recipeData.ingredients06);
    SetIngredients07(recipeData.ingredients07);
    SetIngredients08(recipeData.ingredients08);
    SetIngredients09(recipeData.ingredients09);
    SetIngredients10(recipeData.ingredients10);
    SetIngredients11(recipeData.ingredients11);
    SetIngredients12(recipeData.ingredients12);
    SetIngredients13(recipeData.ingredients13);
    SetIngredients14(recipeData.ingredients14);
    SetIngredients15(recipeData.ingredients15);
    SetIngredients16(recipeData.ingredients16);
    SetIngredients17(recipeData.ingredients17);
    SetIngredients18(recipeData.ingredients18);
    SetIngredients19(recipeData.ingredients19);
    SetIngredients20(recipeData.ingredients20);

    SetMeasure01(recipeData.measure01);
    SetMeasure02(recipeData.measure02);
    SetMeasure03(recipeData.measure03);
    SetMeasure04(recipeData.measure04);
    SetMeasure05(recipeData.measure05);
    SetMeasure06(recipeData.measure06);
    SetMeasure07(recipeData.measure07);
    SetMeasure08(recipeData.measure08);
    SetMeasure09(recipeData.measure09);
    SetMeasure10(recipeData.measure10);
    SetMeasure11(recipeData.measure11);
    SetMeasure12(recipeData.measure12);
    SetMeasure13(recipeData.measure13);
    SetMeasure14(recipeData.measure14);
    SetMeasure15(recipeData.measure15);
    SetMeasure16(recipeData.measure16);
    SetMeasure17(recipeData.measure17);
    SetMeasure18(recipeData.measure18);
    SetMeasure19(recipeData.measure19);
    SetMeasure20(recipeData.measure20);

    setPreparations(recipeData.preparations);

    setIsLoading(false);
  };

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

  const HandelGoTopPage = () => {
    setIsLoading(true);
    scrollRef.current?.scrollTo({
      y: 0,
    });
    Keyboard.dismiss();
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
              <Text className="text-xl m-auto">{recipeName}</Text>
            </View>
          </View>

          <ScrollView className="bg-bg-while w-11/12 mt-20 mb-2 rounded-3xl" ref={scrollRef}>
            <View className="w-full flex justify-center items-center mt-2">
              <TouchableWithoutFeedback>
                <Image source={{ uri: photoPath }} className="h-60 w-60" />
              </TouchableWithoutFeedback>
            </View>

            <View className="bg-bg-gold flex items-center p-3 rounded-2xl w-11/12 mx-3 mt-5">
              <View className="w-full flex justify-center">
                <Text className="text-xl m-auto">Ingredients</Text>
              </View>
            </View>

            <View className="mx-3 w-full my-2 flex justify-center">
              {/* Ingredient 1 */}
              {Ingredients01 === "" ? (
                <></>
              ) : (
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Ingredient 1"
                    value={Ingredients01}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12 text-txt-color"
                  />
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Measure"
                    value={Measure01}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12 text-txt-color"
                  />
                </View>
              )}

              {/* Ingredient 2 */}
              {Ingredients02 === "" ? (
                <></>
              ) : (
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Ingredient 2"
                    value={Ingredients02}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12 text-txt-color"
                  />
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Measure"
                    value={Measure02}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12 text-txt-color"
                  />
                </View>
              )}

              {/* Ingredient 3 */}
              {Ingredients03 === "" ? (
                <></>
              ) : (
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Ingredient 3"
                    value={Ingredients03}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12 text-txt-color"
                  />
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Measure"
                    value={Measure03}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12 text-txt-color"
                  />
                </View>
              )}

              {/* Ingredient 4 */}
              {Ingredients04 === "" ? (
                <></>
              ) : (
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Ingredient 4"
                    value={Ingredients04}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12 text-txt-color"
                  />
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Measure"
                    value={Measure04}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12 text-txt-color"
                  />
                </View>
              )}

              {/* Ingredient 5 */}
              {Ingredients05 === "" ? (
                <></>
              ) : (
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Ingredient 5"
                    value={Ingredients05}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12 text-txt-color"
                  />
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Measure"
                    value={Measure05}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12 text-txt-color"
                  />
                </View>
              )}

              {/* Ingredient 6 */}
              {Ingredients06 === "" ? (
                <></>
              ) : (
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Ingredient 6"
                    value={Ingredients06}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12 text-txt-color"
                  />
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Measure"
                    value={Measure06}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12 text-txt-color"
                  />
                </View>
              )}

              {/* Ingredient 7 */}
              {Ingredients07 === "" ? (
                <></>
              ) : (
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Ingredient 7"
                    value={Ingredients07}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12 text-txt-color"
                  />
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Measure"
                    value={Measure07}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12 text-txt-color"
                  />
                </View>
              )}

              {/* Ingredient 8 */}
              {Ingredients08 === "" ? (
                <></>
              ) : (
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Ingredient 8"
                    value={Ingredients08}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12 text-txt-color"
                  />
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Measure"
                    value={Measure08}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12 text-txt-color"
                  />
                </View>
              )}

              {/* Ingredient 9 */}
              {Ingredients09 === "" ? (
                <></>
              ) : (
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Ingredient 9"
                    value={Ingredients09}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12 text-txt-color"
                  />
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Measure"
                    value={Measure09}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12 text-txt-color"
                  />
                </View>
              )}

              {/* Ingredient 10 */}
              {Ingredients10 === "" ? (
                <></>
              ) : (
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Ingredient 10"
                    value={Ingredients10}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12 text-txt-color"
                  />
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Measure"
                    value={Measure10}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12 text-txt-color"
                  />
                </View>
              )}

              {/* Ingredient 11 */}
              {Ingredients11 === "" ? (
                <></>
              ) : (
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Ingredient 11"
                    value={Ingredients11}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12 text-txt-color"
                  />
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Measure"
                    value={Measure11}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12 text-txt-color"
                  />
                </View>
              )}

              {/* Ingredient 12 */}
              {Ingredients12 === "" ? (
                <></>
              ) : (
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Ingredient 12"
                    value={Ingredients12}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12 text-txt-color"
                  />
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Measure"
                    value={Measure12}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12 text-txt-color"
                  />
                </View>
              )}

              {/* Ingredient 13 */}
              {Ingredients13 === "" ? (
                <></>
              ) : (
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Ingredient 13"
                    value={Ingredients13}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12 text-txt-color"
                  />
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Measure"
                    value={Measure13}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12 text-txt-color"
                  />
                </View>
              )}

              {/* Ingredient 14 */}
              {Ingredients14 === "" ? (
                <></>
              ) : (
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Ingredient 14"
                    value={Ingredients14}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12 text-txt-color"
                  />
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Measure"
                    value={Measure14}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12 text-txt-color"
                  />
                </View>
              )}

              {/* Ingredient 15 */}
              {Ingredients15 === "" ? (
                <></>
              ) : (
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Ingredient 15"
                    value={Ingredients15}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12 text-txt-color"
                  />
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Measure"
                    value={Measure15}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12 text-txt-color"
                  />
                </View>
              )}

              {/* Ingredient 16 */}
              {Ingredients16 === "" ? (
                <></>
              ) : (
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Ingredient 16"
                    value={Ingredients16}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12 text-txt-color"
                  />
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Measure"
                    value={Measure16}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12 text-txt-color"
                  />
                </View>
              )}

              {/* Ingredient 17 */}
              {Ingredients17 === "" ? (
                <></>
              ) : (
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Ingredient 17"
                    value={Ingredients17}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12 text-txt-color"
                  />
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Measure"
                    value={Measure17}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12 text-txt-color"
                  />
                </View>
              )}

              {/* Ingredient 18 */}
              {Ingredients18 === "" ? (
                <></>
              ) : (
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Ingredient 18"
                    value={Ingredients18}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12 text-txt-color"
                  />
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Measure"
                    value={Measure18}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12 text-txt-color"
                  />
                </View>
              )}

              {/* Ingredient 19 */}
              {Ingredients19 === "" ? (
                <></>
              ) : (
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Ingredient 19"
                    value={Ingredients19}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12 text-txt-color"
                  />
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Measure"
                    value={Measure19}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12 text-txt-color"
                  />
                </View>
              )}

              {/* Ingredient 20 */}
              {Ingredients20 === "" ? (
                <></>
              ) : (
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Ingredient 20"
                    value={Ingredients20}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12 text-txt-color"
                  />
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Measure"
                    value={Measure20}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12 text-txt-color"
                  />
                </View>
              )}
            </View>

            <View className="bg-bg-gold flex items-center p-3 rounded-2xl w-11/12 mx-3">
              <View className="w-full flex justify-center">
                <Text className="text-xl m-auto">Preparations</Text>
              </View>
            </View>

            <View className="mx-3 w-full my-2 flex justify-center">
              {preparations === "" ? (
                <TextInput
                  editable={false}
                  selectTextOnFocus={false}
                  className="p-3 rounded-2xl border-2 border-input-border w-11/12 text-txt-color"
                  placeholder="Enter text here"
                  multiline={true}
                  autoCapitalize="none"
                  numberOfLines={6}
                  value="There is no Preparations set for this recipe"
                />
              ) : (
                <TextInput
                  editable={false}
                  selectTextOnFocus={false}
                  className="p-3 rounded-2xl border-2 border-input-border w-11/12 text-txt-color"
                  placeholder="Enter text here"
                  multiline={true}
                  autoCapitalize="none"
                  numberOfLines={6}
                  value={preparations}
                />
              )}
            </View>

            {/* <View className="flex justify-center items-center p-5">
              <TouchableOpacity
                // onPress={HandelCreateNewRecipe}
                className="bg-bg-gold flex justify-center items-center p-6 rounded-2xl mx-3 w-8/12"
              >
                <Text>Create</Text>
              </TouchableOpacity>
            </View> */}
          </ScrollView>
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

export default SelectedRecipe;
