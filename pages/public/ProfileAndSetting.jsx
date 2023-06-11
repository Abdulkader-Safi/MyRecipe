import { View, Text, TouchableOpacity, Keyboard } from "react-native";
import React, { useState } from "react";
import { Loading, ScreenWrapper } from "../../components";
import { useDispatch } from "react-redux";
import { REMOVE_ACTIVE_USER } from "../../redux/slices/authSlices";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { SET_NAVIGATION_PAGE } from "../../redux/slices/routeSlices";

const ProfileAndSetting = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const handleGotoProfile = (e) => {
    e.preventDefault();
    Keyboard.dismiss();

    setIsLoading(true);
    dispatch(
      SET_NAVIGATION_PAGE({
        page: "PROFILE",
      })
    );
    setIsLoading(false);
  };

  const handleLogout = () => {
    setIsLoading(true);

    signOut(auth)
      .then(() => {
        dispatch(REMOVE_ACTIVE_USER());

        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error.message);
      });
    setIsLoading(false);
  };

  return (
    <ScreenWrapper>
      {isLoading && <Loading />}

      <View className="h-screen w-screen flex justify-around items-center bg-bg-color">
        <View className="w-4/5 mb-14 h-4/5 justify-around">
          <View className="">
            <TouchableOpacity
              onPress={handleGotoProfile}
              className="bg-bg-while flex justify-center items-center p-3 rounded-2xl"
            >
              <Text>Profile</Text>
            </TouchableOpacity>
          </View>

          <View className="">
            <TouchableOpacity
              onPress={handleLogout}
              className="bg-bg-gold flex justify-center items-center p-3 rounded-2xl"
            >
              <Text>logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ProfileAndSetting;
