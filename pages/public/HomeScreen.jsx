import {
  View,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
  Text,
  Alert,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Loading, ScreenWrapper } from "./../../components";
import { useSelector } from "react-redux";
import {
  SET_ACTIVE_USER,
  selectIsLoggedIn,
  selectUserID,
  selectUserName,
} from "../../redux/slices/authSlices";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { collection, deleteDoc, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import {
  SET_NAVIGATION_PAGE,
  SET_SELECTED_RECIPE_WITH_NAVIGATION,
} from "../../redux/slices/routeSlices";
import { Card } from "react-native-paper";
import { deleteObject, ref } from "firebase/storage";

const HomeScreen = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isLoading, setIsLoading] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const Username = useSelector(selectUserName);
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const scrollRef = useRef();
  const userID = useSelector(selectUserID);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(collection(db, "users"), user?.uid);
        const getUserData = getDoc(userRef);
        const userData = (await getUserData).data();

        setDisplayName(userData.fullName);
        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: displayName,
            userID: user.uid,
          })
        );
        dispatch(
          SET_NAVIGATION_PAGE({
            page: "HOME",
          })
        );

        getRecipes(user.uid);

        setIsLoading(false);
      }
    });

    // scrollRef.current?.scrollTo({
    //   y: 0,
    // });

    setIsLoading(false);
  }, [isLoggedIn, Username]);

  const getRecipes = async (id) => {
    setIsLoading(true);
    const RecipesRef = collection(db, "Recipe");
    const q = query(RecipesRef, where("uid", "==", id));
    const querySnapshot = await getDocs(q);
    setRecipes([]);
    querySnapshot.forEach((doc) => {
      setRecipes((recipes) => [...recipes, { id: doc.id, ...doc.data() }]);
    });
    setIsLoading(false);
  };

  const HandelNewRecipe = (e) => {
    e.preventDefault();
    dispatch(
      SET_NAVIGATION_PAGE({
        page: "NewRecipe",
      })
    );
  };

  const HandelGoTopPage = () => {
    setIsLoading(true);
    scrollRef.current?.scrollTo({
      y: 0,
    });
    Keyboard.dismiss();
    setIsLoading(false);
  };

  const handelGoToSelectedRecipePage = (id) => {
    // alert(id);
    dispatch(
      SET_SELECTED_RECIPE_WITH_NAVIGATION({
        page: "SelectedRecipe",
        uid: id,
      })
    );
  };

  const handelDeleteRecipe = (meal) => {
    return Alert.alert(
      "Delete Recipe",
      `Are you sure you want to delete (${meal.recipeName}) recipe`,
      [
        // The "Yes" button
        {
          text: "Yes",
          onPress: () => {
            deleteRecipe(meal);
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "No",
        },
      ]
    );
  };

  const deleteRecipe = async (meal) => {
    setIsLoading(true);
    const deleteRef = ref(storage, meal.photoPath);

    try {
      await deleteDoc(doc(db, "Recipe", meal.id));
      await deleteObject(deleteRef);
    } catch (error) {
      alert(`Error: ${error}`);
    }
    setIsLoading(false);
    getRecipes(userID);
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
                onPress={HandelNewRecipe}
              >
                <Image source={require("./../../assets/icons/add.png")} />
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
                      <TouchableWithoutFeedback
                        className="mt-4"
                        onPress={() => {
                          handelGoToSelectedRecipePage(meal.id);
                        }}
                        onLongPress={() => {
                          handelDeleteRecipe(meal);
                        }}
                      >
                        <Card className="mx-3">
                          <Card.Cover source={{ uri: meal.photoPath }} />
                          <Card.Title
                            className=" flex justify-center items-center"
                            title={meal.recipeName}
                          />
                        </Card>
                      </TouchableWithoutFeedback>
                    </View>
                  ))
              ) : (
                <View className="w-full h-screen flex justify-center items-center">
                  <TouchableWithoutFeedback className="mt-4 " onPress={() => getRecipes(userID)}>
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

export default HomeScreen;
