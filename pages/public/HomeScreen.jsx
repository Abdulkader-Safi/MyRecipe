import { View, Text, TouchableOpacity, Image } from "react-native";
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

  const dispatch = useDispatch();

  const HandleGoingBackToHomePage = (e) => {
    e.preventDefault();
    alert(Username);
  };

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
    console.log("running...");
  }, [isLoggedIn, Username]);

  return (
    <>
      <ScreenWrapper>
        <View className="h-screen w-screen flex justify-around items-center bg-bg-color">
          <View className="bg-bg-gold flex flex-row items-center p-3 rounded-2xl w-full mx-3">
            <TouchableOpacity
              className="bg-bg-color flex justify-center items-center p-2 rounded-2xl absolute left-5"
            >
              <Image source={require("./../../assets/icons/double-left.png")} />
            </TouchableOpacity>
            <View className="w-full flex justify-center">
              <Text className="text-xl m-auto">{Username}</Text>
            </View>
          </View>
        </View>
      </ScreenWrapper>
      {isLoading ? <Loading /> : null}
    </>
  );
};

export default HomeScreen;
