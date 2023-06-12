import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { Loading, ScreenWrapper } from "../../components";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { SET_LOGGED_IN } from "../../redux/slices/authSlices";
import { collection, doc, setDoc } from "firebase/firestore";
import { SET_NAVIGATION_PAGE } from "../../redux/slices/routeSlices";

const Register = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandRegistration = (e) => {
    e.preventDefault();
    Keyboard.dismiss();

    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userRef = doc(collection(db, "users"), userCredential.user.uid);
        setDoc(userRef, {
          email: email,
          fullName: fullName,
        });

        setEmail("");
        setFullName("");
        setPassword("");

        dispatch(SET_LOGGED_IN());
        dispatch(
          SET_NAVIGATION_PAGE({
            page: "HOME",
          })
        );
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err.message);
      });
  };

  return (
    <>
      <KeyboardAvoidingView className="flex-1 justify-center items-center" behavior="padding">
        <ScreenWrapper>
          <View className="h-screen flex justify-between items-center bg-bg-color">
            <View className="flex-col justify-center items-center mt-10"></View>
            <View className="flex-col justify-center items-center mt-10">
              <Image className="h-72 w-72" source={require("./../../assets/images/Main.png")} />
            </View>
            <View className="w-screen h-3/5 rounded-t-3xl bg-wlc-color flex justify-center items-center">
              <View className="w-4/5 mb-14 h-4/5 justify-around">
                <View className="">
                  <Text className="text-slate-800 mb-2">Full Name</Text>
                  <TextInput
                    placeholder="Full Name"
                    onChangeText={setFullName}
                    value={fullName}
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border"
                  />
                </View>
                <View className="">
                  <Text className="text-slate-800 mb-2">Email</Text>
                  <TextInput
                    placeholder="Email"
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    value={email}
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border"
                  />
                </View>
                <View className="">
                  <Text className="text-slate-800 mb-2">Password</Text>
                  <TextInput
                    placeholder="Password"
                    onChangeText={setPassword}
                    secureTextEntry
                    value={password}
                    className=" flex justify-center items-center p-3 rounded-2xl border-2 border-input-border"
                  />
                </View>
                <View className="">
                  <TouchableOpacity
                    onPress={HandRegistration}
                    className="bg-bg-gold flex justify-center items-center p-3 rounded-2xl"
                  >
                    <Text>Register</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScreenWrapper>
      </KeyboardAvoidingView>
      {isLoading ? <Loading /> : null}
    </>
  );
};

export default Register;
