import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Welcome,
  Login,
  Register,
  ForgetPassword,
  HomeScreen,
  ReadyRecipeScreen,
  PublicRecipesScreen,
  ProfileAndSetting,
} from "../pages";
import React from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/slices/authSlices";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="HomeScreen">
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: () => {},
          }}
        />
        <Tab.Screen
          name="ReadyRecipeScreen"
          component={ReadyRecipeScreen}
          options={{
            tabBarLabel: "Ready Recipe",
            tabBarIcon: () => {},
          }}
        />
        <Tab.Screen
          name="PublicRecipesScreen"
          component={PublicRecipesScreen}
          options={{
            tabBarLabel: "Public Recipes",
            tabBarIcon: () => {},
          }}
        />
        <Tab.Screen
          name="Profile And Setting"
          component={ProfileAndSetting}
          options={{
            tabBarLabel: "Profile And Setting",
            tabBarIcon: () => {},
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen options={{ headerShown: false }} name="Welcome" component={Welcome} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ForgetPassword"
          component={ForgetPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
