import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { ScreenWrapper } from "./../../components";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase";
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from "../../redux/slices/authSlices";
import { useDispatch } from "react-redux";
import { collection, doc, getDoc } from "firebase/firestore";

const HomeScreen = () => {
  const [displayName, setDisplayName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
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
      } else {
        setDisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch, setDisplayName]);

  return (
    <ScreenWrapper>
      <View className="h-screen flex justify-around items-center bg-bg-color">
        <Text>HomeScreen</Text>
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;
