import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./Screens/welcome";
import Login from "./Screens/login";
import SignUp from "./Screens/signup";

const stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
      initialRouteName="welcome">
        <stack.Screen name="welcome" component={Welcome} options={{headerShown: false}}/>
        <stack.Screen name="login" component={Login} options={{headerShown: false}}/>
        <stack.Screen name="signup" component={SignUp} options={{headerShown: false}}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
