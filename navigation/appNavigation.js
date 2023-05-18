import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome } from "../pages";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  // if (user) {
  //   return (
  //     <NavigationContainer>
  //       <Stack.Navigator initialRouteName="Home">
  //         {/* <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} /> */}
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   );
  // } else {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen options={{ headerShown: false }} name="Welcome" component={Welcome} />
        {/* <Stack.Screen options={{ headerShown: false, presentation: "modal" }} name="SignIn" component={SignInScreen} />
          <Stack.Screen options={{ headerShown: false, presentation: "modal" }} name="SignUp" component={SignUpScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
  // }
};

export default AppNavigation;
