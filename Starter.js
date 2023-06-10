import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import AppNavigation from "./navigation/appNavigation";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from "./redux/slices/authSlices";

const Starter = () => {
  const [displayName, setDisplayName] = useState("");

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

  return <AppNavigation />;
};

export default Starter;
