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
  NewRecipe,
  SelectedRecipe,
  About,
} from "../pages";
import React from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/slices/authSlices";
import { Image } from "react-native";
import { selectNavPage } from "../redux/slices/routeSlices";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navPage = useSelector(selectNavPage);

  return isLoggedIn ? (
    navPage === "About" ? (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="About">
          <Stack.Screen
            options={{ headerShown: false }}
            name="About"
            component={About}
          />
        </Stack.Navigator>
      </NavigationContainer>
    ) : navPage === "HOME" ? (
      <NavigationContainer>
        <Tab.Navigator
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
    ) : navPage === "NewRecipe" ? (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="NewRecipe">
          <Stack.Screen options={{ headerShown: false }} name="NewRecipe" component={NewRecipe} />
        </Stack.Navigator>
      </NavigationContainer>
    ) : navPage === "SelectedRecipe" ? (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SelectedRecipe">
          <Stack.Screen
            options={{ headerShown: false }}
            name="SelectedRecipe"
            component={SelectedRecipe}
          />
        </Stack.Navigator>
      </NavigationContainer>
    ) : (
      <></>
    )
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
