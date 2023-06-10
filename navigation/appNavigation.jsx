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
  Profile,
} from "../pages";
import React from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/slices/authSlices";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            position: "absolute",
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: "#FFFFFF"
          },
        }}
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
          tabBarActiveBackgroundColor: "#FAB24B",
          tabBarActiveTintColor: "#000000",
          tabBarInactiveTintColor: "#675E5E",
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return <Image source={require("./../assets/icons/Home.png")} />;
            },
          }}
        />
        <Tab.Screen
          name="ReadyRecipeScreen"
          component={ReadyRecipeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return <Image source={require("./../assets/icons/PublicChicken.png")} />;
            },
          }}
        />
        <Tab.Screen
          name="PublicRecipesScreen"
          component={PublicRecipesScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return <Image source={require("./../assets/icons/Chicken.png")} />;
            },
          }}
        />
        <Tab.Screen
          name="Profile And Setting"
          component={ProfileAndSetting}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return <Image source={require("./../assets/icons/Settings.png")} />;
            },
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
