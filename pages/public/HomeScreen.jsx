import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { Loading, ScreenWrapper } from "./../../components";
import { useSelector } from "react-redux";
import {
  REMOVE_ACTIVE_USER,
  SET_ACTIVE_USER,
  selectIsLoggedIn,
  selectUserName,
} from "../../redux/slices/authSlices";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { SET_NAVIGATION_PAGE } from "../../redux/slices/routeSlices";

const HomeScreen = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isLoading, setIsLoading] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const Username = useSelector(selectUserName);
  const [searchQuery, setSearchQuery] = useState("");

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
        setIsLoading(false);
      } else {
        setDisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
        setIsLoading(false);
      }
    });
    setIsLoading(false);
  }, [isLoggedIn, Username]);

  const HandelNewRecipe = (e) => {
    e.preventDefault();
    dispatch(
      SET_NAVIGATION_PAGE({
        page: "NewRecipe",
      })
    );
  };

  return (
    <>
      <ScreenWrapper>
        <View className="h-screen w-screen flex justify-around items-center bg-bg-color">
          <View className="w-11/12 mb-14 justify-around absolute top-0.5">
            <View className="flex flex-row w-12/12 justify-center items-center mt-2">
              <TextInput
                placeholder="Search..."
                onChangeText={setSearchQuery}
                value={searchQuery}
                className="w-11/12 p-3 rounded-2xl border-2 border-input-border bg-wlc-color"
              />
              <TouchableOpacity
                className="flex justify-center items-center p-3.5 rounded-2xl border-2 border-input-border bg-wlc-color"
                onPress={HandelNewRecipe}
              >
                <Image source={require("./../../assets/icons/add.png")} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScreenWrapper>
      {isLoading ? <Loading /> : null}
    </>
  );
};

export default HomeScreen;
