import { View, Text, TouchableOpacity, Keyboard } from "react-native";
import React, { useState } from "react";
import { Loading, ScreenWrapper } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_ACTIVE_USER, selectUserEmail } from "../../redux/slices/authSlices";
import { sendPasswordResetEmail, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { SET_NAVIGATION_PAGE } from "../../redux/slices/routeSlices";

const ProfileAndSetting = () => {
  const [isLoading, setIsLoading] = useState(false);
  const userEmail = useSelector(selectUserEmail);

  const dispatch = useDispatch();

  const HandelLogout = () => {
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

  const HandelForgetPassword = (e) => {
    e.preventDefault();
    Keyboard.dismiss();
    setIsLoading(true);

    sendPasswordResetEmail(auth, userEmail)
      .then(() => {
        setIsLoading(false);
        alert("Check your email for a reset link");
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  const HandelAbout = (e) => {
    e.preventDefault();
    Keyboard.dismiss();
(true);

    dispatch(
      SET_NAVIGATION_PAGE({
        page: "About",
      })
    );

  };

  return (
    <>
      <ScreenWrapper>
        <View className="h-screen w-screen flex justify-around items-center bg-bg-color">
          <View className="w-4/5 mb-14 h-4/5 justify-around">
            <View className="">
              <TouchableOpacity
                onPress={HandelForgetPassword}
                className="bg-bg-while flex justify-center items-center p-3 rounded-2xl"
              >
                <Text>Reset Password</Text>
              </TouchableOpacity>
              <Text className="mt-2">Will send you an email to reset your password</Text>
            </View>

            <View className="">
              <TouchableOpacity
                onPress={HandelAbout}
                className="bg-bg-while flex justify-center items-center p-3 rounded-2xl"
              >
                <Text>About</Text>
              </TouchableOpacity>
            </View>

            <View className="">
              <TouchableOpacity
                onPress={HandelLogout}
                className="bg-bg-gold flex justify-center items-center p-3 rounded-2xl"
              >
                <Text>logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScreenWrapper>
      {isLoading ? <Loading /> : null}
    </>
  );
};

export default ProfileAndSetting;
