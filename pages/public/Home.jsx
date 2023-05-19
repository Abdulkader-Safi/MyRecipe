import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { ScreenWrapper } from "./../../components";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from "../../redux/slices/authSlices";
import { useDispatch } from "react-redux";

const Home = () => {
  const [displayName, setDisplayName] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (user.displayName == null) {
          const u1 = user.email?.slice(0, -10);
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setDisplayName(uName);
        } else {
          setDisplayName(user.displayName);
        }

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
          })
        );
        // dispatch(SET_IS_ADMIN());
      } else {
        setDisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch, setDisplayName]);

  return (
    <ScreenWrapper>
      <View className="h-screen flex justify-around items-center bg-bg-color">
        <Text>Hello World</Text>
      </View>
    </ScreenWrapper>
  );
};

export default Home;
