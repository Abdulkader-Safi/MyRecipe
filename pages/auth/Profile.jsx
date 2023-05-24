import { View, Text } from "react-native";
import React, { useState } from "react";
import { Loading, ScreenWrapper } from "../../components";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ScreenWrapper>
      {isLoading && <Loading />}

      <View className="h-screen w-screen flex justify-around items-center bg-bg-color">
        <Text>Profile</Text>
      </View>
    </ScreenWrapper>
  );
};

export default Profile;
