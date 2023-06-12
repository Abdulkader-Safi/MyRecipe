import { View, Text, Keyboard, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Loading, ScreenWrapper } from "../../components";
import { SET_NAVIGATION_PAGE } from "../../redux/slices/routeSlices";
import { useDispatch } from "react-redux";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const HandleGoingBackToHomePage = (e) => {
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

  return (
    <>
      <ScreenWrapper>
        <View className="h-screen w-screen flex justify-around items-center bg-bg-color">
          <Text>Profile</Text>
          <TouchableOpacity
            onPress={HandleGoingBackToHomePage}
            className="bg-bg-gold flex justify-center items-center p-3 rounded-2xl"
          >
            <Text>Back Home</Text>
          </TouchableOpacity>
        </View>
      </ScreenWrapper>
      {isLoading ? <Loading /> : null}
    </>
  );
};

export default Profile;
