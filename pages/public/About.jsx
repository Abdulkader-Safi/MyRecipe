import { View, Text, Keyboard, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { Loading, ScreenWrapper } from "../../components";
import { SET_NAVIGATION_PAGE } from "../../redux/slices/routeSlices";
import { useDispatch } from "react-redux";

const About = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const HandleGoBackHome = (e) => {
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
        <View className="h-screen w-screen flex items-center bg-bg-color">
          <View className="w-11/12 mb-14 items-center absolute top-0.5 z-10">
            <View className="bg-bg-gold flex flex-row items-center p-3 rounded-2xl w-full mx-3 absolute top-2">
              <TouchableOpacity
                className="bg-bg-color flex justify-center items-center p-2 rounded-2xl absolute left-5 z-10"
                onPress={HandleGoBackHome}
              >
                <Image source={require("./../../assets/icons/double-left.png")} />
              </TouchableOpacity>
              <View className="w-full flex justify-center">
                <Text className="text-xl m-auto">About</Text>
              </View>
            </View>
          </View>

          <View className="mt-20 h-max bg-bg-while flex justify-between items-center rounded-lg">
            <View className="flex-row">
              <Image
                source={require("./../../assets/images/jinan_university_logo.png")}
                className="w-40 h-40"
              />
              <Image
                source={require("./../../assets/images/jinan_university_scince_department_logo.png")}
                className="w-40 h-40"
              />
            </View>
            <View>
              <Text className="text-5xl">Jinan University</Text>
            </View>

            <View className="my-16">
              <Text className="">Supervised By:</Text>
              <Text className="text-3xl">Dr. Samar Allosh</Text>
            </View>

            <View className="my-16">
              <Text className="">Dean of science department:</Text>
              <Text className="text-3xl">Dr. Azza Dib Assil</Text>
            </View>

            <View className="my-16">
              <Text className="">Developed By:</Text>
              <Text className="text-3xl">Abdulkader Safi</Text>
            </View>
          </View>
        </View>
      </ScreenWrapper>
      {isLoading ? <Loading /> : null}
    </>
  );
};

export default About;
