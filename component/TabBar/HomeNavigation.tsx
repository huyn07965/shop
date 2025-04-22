import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Color } from "@/constants";
import Header from "../Header";
import index from "@/app";

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Color.main,
        },
        headerTintColor: Color.red,
      }}
    >
      <HomeStack.Screen
        name="HomeScreen"
        component={index}
        options={{ header: () => <Header /> }}
      />
      {/* <HomeStack.Screen name="CategoryScreen" component={CategoryScreen} options={{ header: () => (<HeaderCategory />) }} /> */}
    </HomeStack.Navigator>
  );
};
export default HomeStackScreen;
