import { View, Text, Image, Keyboard, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading, ScreenWrapper } from "./../../components";
import { SET_NAVIGATION_PAGE } from "../../redux/slices/routeSlices";
import { ScrollView } from "react-native";
import { useRef } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { TextInput } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { selectUserID, selectUserName } from "../../redux/slices/authSlices";
import { addDoc, collection } from "firebase/firestore";
import * as ImagePicker from "expo-image-picker";
import { db, storage } from "../../firebase";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";

const NewRecipe = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
  const scrollRef = useRef();
  const dispatch = useDispatch();
  const UserID = useSelector(selectUserID);
  const UserName = useSelector(selectUserName);

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
  const [isPublic, setIsPublic] = useState(false);

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

  const HandelCreateNewRecipe = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (Ingredients01 === "" || Measure01 === "") {
      alert("Insert at least one Recipe");
      setIsLoading(false);
      return;
    }

    const recipeRef = await addDoc(collection(db, "Recipe"), {
      uid: UserID,
      userName: UserName,
      photoPath: photoPath,
      recipeName: recipeName,
      ingredients01: Ingredients01,
      ingredients02: Ingredients02,
      ingredients03: Ingredients03,
      ingredients04: Ingredients04,
      ingredients05: Ingredients05,
      ingredients06: Ingredients06,
      ingredients07: Ingredients07,
      ingredients08: Ingredients08,
      ingredients09: Ingredients09,
      ingredients10: Ingredients10,
      ingredients11: Ingredients11,
      ingredients12: Ingredients12,
      ingredients13: Ingredients13,
      ingredients14: Ingredients14,
      ingredients15: Ingredients15,
      ingredients16: Ingredients16,
      ingredients17: Ingredients17,
      ingredients18: Ingredients18,
      ingredients19: Ingredients19,
      ingredients20: Ingredients20,
      measure01: Measure01,
      measure02: Measure02,
      measure03: Measure03,
      measure04: Measure04,
      measure05: Measure05,
      measure06: Measure06,
      measure07: Measure07,
      measure08: Measure08,
      measure09: Measure09,
      measure10: Measure10,
      measure11: Measure11,
      measure12: Measure12,
      measure13: Measure13,
      measure14: Measure14,
      measure15: Measure15,
      measure16: Measure16,
      measure17: Measure17,
      measure18: Measure18,
      measure19: Measure19,
      measure20: Measure20,
      preparations: preparations,
      isPublic: isPublic,
    });

    // alert(recipeRef.id);

    // dispatch(
    //   SET_NAVIGATION_PAGE({
    //     page: "HOME",
    //   })
    // );

    clearInput(e);
    setIsLoading(false);
  };

  const clearInput = (e) => {
    e.preventDefault();
    setIsLoading(true);

    Keyboard.dismiss();
    setImage(null);
    setPhotoPath("");
    SetRecipeName("");
    SetIngredients01("");
    SetMeasure01("");
    SetIngredients02("");
    SetMeasure02("");
    SetIngredients03("");
    SetMeasure03("");
    SetIngredients04("");
    SetMeasure04("");
    SetIngredients05("");
    SetMeasure05("");
    SetIngredients06("");
    SetMeasure06("");
    SetIngredients07("");
    SetMeasure07("");
    SetIngredients08("");
    SetMeasure08("");
    SetIngredients09("");
    SetMeasure09("");
    SetIngredients10("");
    SetMeasure10("");
    SetIngredients11("");
    SetMeasure11("");
    SetIngredients12("");
    SetMeasure12("");
    SetIngredients13("");
    SetMeasure13("");
    SetIngredients14("");
    SetMeasure14("");
    SetIngredients15("");
    SetMeasure15("");
    SetIngredients16("");
    SetMeasure16("");
    SetIngredients17("");
    SetMeasure17("");
    SetIngredients18("");
    SetMeasure18("");
    SetIngredients19("");
    SetMeasure19("");
    SetIngredients20("");
    SetMeasure20("");
    setPreparations("");
    setIsPublic(false);

    setIsLoading(false);
  };

  const HandelPickImage = async () => {
    setIsLoading(true);
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const uploadURL = await uploadImageAsync(result.assets[0].uri);
      setImage(uploadURL);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
      setPhotoPath(uploadURL);
    } else {
      setImage(null);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  const HandelChangePhoto = () => {
    return Alert.alert(
      "Change Image?",
      "Are you sure you want to Change selected Image? (if you press yes old image will be deleted)",
      [
        // The "Yes" button
        {
          text: "Yes",
          onPress: () => {
            deleteImage();
            HandelPickImage();
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "No",
        },
      ]
    );
    HandelPickImage();
  };

  const uploadImageAsync = async (uri) => {
    setIsLoading(true);
    // Why are we using XMLHttpRequest? See:
    // https://github.com/expo/expo/issues/2402#issuecomment-443726662
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    try {
      const storageRef = ref(storage, `Images/Recipes/${Date.now()}`);
      const result = await uploadBytes(storageRef, blob);
      blob.close();
      return await getDownloadURL(storageRef);
    } catch (error) {
      alert(`Error: ${error}`);
    }

    setIsLoading(false);
  };

  const deleteImage = async () => {
    setIsLoading(true);
    const deleteRef = ref(storage, image);
    try {
      deleteObject(deleteRef).then(() => {
        setImage(null);
        setInterval(() => {
          setIsLoading(false);
        }, 2000);
      });
    } catch (error) {
      alert(`Error: ${error}`);
    }
  };

  return (
    <>
      <KeyboardAvoidingView className="flex-1 justify-center items-center" behavior="padding">
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
                <Text className="text-xl m-auto">Create New Recipe</Text>
              </View>
            </View>

            <ScrollView className="bg-bg-while w-11/12 mt-20 mb-2 rounded-3xl" ref={scrollRef}>
              <View className="w-full flex justify-center items-center">
                {image ? (
                  // <TouchableWithoutFeedback onPress={HandelAddPhoto}>
                  <TouchableWithoutFeedback onPress={HandelChangePhoto}>
                    <Image source={{ uri: image }} className="h-60 w-60" />
                  </TouchableWithoutFeedback>
                ) : (
                  <TouchableWithoutFeedback onPress={HandelPickImage}>
                    <Image
                      source={require("../../assets/images/add-photo.png")}
                      className="h-60 w-60"
                    />
                  </TouchableWithoutFeedback>
                )}
              </View>

              <View className="w-full flex justify-center items-center my-5">
                <TextInput
                  placeholder="Recipe Name"
                  onChangeText={SetRecipeName}
                  value={recipeName}
                  autoCapitalize="none"
                  className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-11/12"
                />
              </View>

              <View className="bg-bg-gold flex items-center p-3 rounded-2xl w-11/12 mx-3">
                <View className="w-full flex justify-center">
                  <Text className="text-xl m-auto">Ingredients</Text>
                </View>
              </View>

              <View className="mx-3 w-full my-2 flex justify-center">
                {/* Ingredient 1 */}
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    placeholder="Ingredient 1"
                    onChangeText={SetIngredients01}
                    value={Ingredients01}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12"
                  />
                  <TextInput
                    placeholder="Measure"
                    onChangeText={SetMeasure01}
                    value={Measure01}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12"
                  />
                </View>

                {/* Ingredient 2 */}
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    placeholder="Ingredient 2"
                    onChangeText={SetIngredients02}
                    value={Ingredients02}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12"
                  />
                  <TextInput
                    placeholder="Measure"
                    onChangeText={SetMeasure02}
                    value={Measure02}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12"
                  />
                </View>

                {/* Ingredient 3 */}
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    placeholder="Ingredient 3"
                    onChangeText={SetIngredients03}
                    value={Ingredients03}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12"
                  />
                  <TextInput
                    placeholder="Measure"
                    onChangeText={SetMeasure03}
                    value={Measure03}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12"
                  />
                </View>

                {/* Ingredient 4 */}
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    placeholder="Ingredient 4"
                    onChangeText={SetIngredients04}
                    value={Ingredients04}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12"
                  />
                  <TextInput
                    placeholder="Measure"
                    onChangeText={SetMeasure04}
                    value={Measure04}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12"
                  />
                </View>

                {/* Ingredient 5 */}
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    placeholder="Ingredient 5"
                    onChangeText={SetIngredients05}
                    value={Ingredients05}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12"
                  />
                  <TextInput
                    placeholder="Measure"
                    onChangeText={SetMeasure05}
                    value={Measure05}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12"
                  />
                </View>

                {/* Ingredient 6 */}
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    placeholder="Ingredient 6"
                    onChangeText={SetIngredients06}
                    value={Ingredients06}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12"
                  />
                  <TextInput
                    placeholder="Measure"
                    onChangeText={SetMeasure06}
                    value={Measure06}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12"
                  />
                </View>

                {/* Ingredient 7 */}
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    placeholder="Ingredient 7"
                    onChangeText={SetIngredients07}
                    value={Ingredients07}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12"
                  />
                  <TextInput
                    placeholder="Measure"
                    onChangeText={SetMeasure07}
                    value={Measure07}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12"
                  />
                </View>

                {/* Ingredient 8 */}
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    placeholder="Ingredient 8"
                    onChangeText={SetIngredients08}
                    value={Ingredients08}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12"
                  />
                  <TextInput
                    placeholder="Measure"
                    onChangeText={SetMeasure08}
                    value={Measure08}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12"
                  />
                </View>

                {/* Ingredient 9 */}
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    placeholder="Ingredient 9"
                    onChangeText={SetIngredients09}
                    value={Ingredients09}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12"
                  />
                  <TextInput
                    placeholder="Measure"
                    onChangeText={SetMeasure09}
                    value={Measure09}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12"
                  />
                </View>

                {/* Ingredient 10 */}
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    placeholder="Ingredient 10"
                    onChangeText={SetIngredients10}
                    value={Ingredients10}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12"
                  />
                  <TextInput
                    placeholder="Measure"
                    onChangeText={SetMeasure10}
                    value={Measure10}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12"
                  />
                </View>

                {/* Ingredient 11 */}
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    placeholder="Ingredient 11"
                    onChangeText={SetIngredients11}
                    value={Ingredients11}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12"
                  />
                  <TextInput
                    placeholder="Measure"
                    onChangeText={SetMeasure11}
                    value={Measure11}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12"
                  />
                </View>

                {/* Ingredient 12 */}
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    placeholder="Ingredient 12"
                    onChangeText={SetIngredients12}
                    value={Ingredients12}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12"
                  />
                  <TextInput
                    placeholder="Measure"
                    onChangeText={SetMeasure12}
                    value={Measure12}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12"
                  />
                </View>

                {/* Ingredient 13 */}
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    placeholder="Ingredient 13"
                    onChangeText={SetIngredients13}
                    value={Ingredients13}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12"
                  />
                  <TextInput
                    placeholder="Measure"
                    onChangeText={SetMeasure13}
                    value={Measure13}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12"
                  />
                </View>

                {/* Ingredient 14 */}
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    placeholder="Ingredient 14"
                    onChangeText={SetIngredients14}
                    value={Ingredients14}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12"
                  />
                  <TextInput
                    placeholder="Measure"
                    onChangeText={SetMeasure14}
                    value={Measure14}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12"
                  />
                </View>

                {/* Ingredient 15 */}
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    placeholder="Ingredient 15"
                    onChangeText={SetIngredients15}
                    value={Ingredients15}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12"
                  />
                  <TextInput
                    placeholder="Measure"
                    onChangeText={SetMeasure15}
                    value={Measure15}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12"
                  />
                </View>

                {/* Ingredient 16 */}
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    placeholder="Ingredient 16"
                    onChangeText={SetIngredients16}
                    value={Ingredients16}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12"
                  />
                  <TextInput
                    placeholder="Measure"
                    onChangeText={SetMeasure16}
                    value={Measure16}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12"
                  />
                </View>

                {/* Ingredient 17 */}
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    placeholder="Ingredient 17"
                    onChangeText={SetIngredients17}
                    value={Ingredients17}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12"
                  />
                  <TextInput
                    placeholder="Measure"
                    onChangeText={SetMeasure17}
                    value={Measure17}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12"
                  />
                </View>

                {/* Ingredient 18 */}
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    placeholder="Ingredient 18"
                    onChangeText={SetIngredients18}
                    value={Ingredients18}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12"
                  />
                  <TextInput
                    placeholder="Measure"
                    onChangeText={SetMeasure18}
                    value={Measure18}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12"
                  />
                </View>

                {/* Ingredient 19 */}
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    placeholder="Ingredient 19"
                    onChangeText={SetIngredients19}
                    value={Ingredients19}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12"
                  />
                  <TextInput
                    placeholder="Measure"
                    onChangeText={SetMeasure19}
                    value={Measure19}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12"
                  />
                </View>

                {/* Ingredient 20 */}
                <View className="w-11/12 flex-row justify-between items-center my-1">
                  <TextInput
                    placeholder="Ingredient 20"
                    onChangeText={SetIngredients20}
                    value={Ingredients20}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-8/12"
                  />
                  <TextInput
                    placeholder="Measure"
                    onChangeText={SetMeasure20}
                    value={Measure20}
                    autoCapitalize="none"
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border w-4/12"
                  />
                </View>
              </View>

              <View className="bg-bg-gold flex items-center p-3 rounded-2xl w-11/12 mx-3">
                <View className="w-full flex justify-center">
                  <Text className="text-xl m-auto">Preparations</Text>
                </View>
              </View>

              <View className="mx-3 w-full my-2 flex justify-center">
                <TextInput
                  className="p-3 rounded-2xl border-2 border-input-border w-11/12"
                  placeholder="Enter text here"
                  multiline={true}
                  autoCapitalize="none"
                  numberOfLines={6}
                  onChangeText={setPreparations}
                  value={preparations}
                />
              </View>

              <View className="flex-row justify-center items-center p-1">
                <TouchableOpacity
                  onPress={() => setIsPublic(true)}
                  className={
                    isPublic
                      ? "bg-bg-gold flex justify-center items-center p-6 rounded-2xl mx-3 w-5/12"
                      : "border-input-border flex justify-center items-center p-6 rounded-2xl mx-3 w-5/12"
                  }
                >
                  <Text>Public</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setIsPublic(false)}
                  className={
                    !isPublic
                      ? "bg-bg-gold flex justify-center items-center p-6 rounded-2xl mx-3 w-5/12"
                      : "border-input-border flex justify-center items-center p-6 rounded-2xl mx-3 w-5/12"
                  }
                >
                  <Text>Private</Text>
                </TouchableOpacity>
              </View>

              <View className="flex justify-center items-center p-5">
                <TouchableOpacity
                  onPress={HandelCreateNewRecipe}
                  className="bg-bg-gold flex justify-center items-center p-6 rounded-2xl mx-3 w-8/12"
                >
                  <Text>Create</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </ScreenWrapper>
      </KeyboardAvoidingView>
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

export default NewRecipe;
