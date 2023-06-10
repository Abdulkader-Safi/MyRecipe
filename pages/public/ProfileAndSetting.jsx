import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Loading, ScreenWrapper } from "../../components";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { REMOVE_ACTIVE_USER } from "../../redux/slices/authSlices";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const ProfileAndSetting = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const handleGotoProfile = () => {
    navigation.navigate("Profile");
  };

  const handleLogout = () => {
    setIsLoading(true);

    signOut(auth)
      .then(() => {
        dispatch(REMOVE_ACTIVE_USER());

        setIsLoading(false);
        // navigation.navigate("Welcome");
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
