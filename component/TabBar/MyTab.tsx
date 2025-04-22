import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Tabs } from "expo-router";
import TabBar from "./TabBar";
import { Color } from "@/constants";
import Header from "../Header";

const Tab = createBottomTabNavigator();

const MyTab = () => {
  //   const isLogin = useSelector((state) => state.Auth.isLogin);
  //   const favoriteItems = useSelector((state) => state.Favorite.items);
  //   let favorite = "";

  //   if (!isLogin) {
  //     favorite = 0;
  //   } else {
  //     favorite = favoriteItems.length;
  //   }

  return (
    <Tabs
      screenOptions={({ route }) => ({
        // tabBarActiveTintColor: Color.main,
        // tabBarInactiveTintColor: Color.darkGray,
        // tabBarStyle: {
        //   backgroundColor: Color.white,
        //   height: 47,
        //   paddingTop: 5,
        //   paddingBottom: 2,
        // },
        // tabBarLabelStyle: {
        //   fontSize: 13,
        //   color: Color.darkGray,
        // },
        // headerShown: false,
        tabBarHideOnKeyboard: true,
      })}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          header: () => <Header />,
          title: "home",
        }}
      />
      <Tabs.Screen
        name="product"
        options={{
          header: () => <Header icon={"sort"} />,
        }}
        // options={{
        //   title: "Explore",
        // }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />
    </Tabs>
  );
};

export default MyTab;
