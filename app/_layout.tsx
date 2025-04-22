import React from "react";
import { Tabs } from "expo-router";
import { TabBar } from "@/component";
import { Provider } from "react-redux";
import { store } from "@/store";
import TabStackScreen from "@/component/TabBar";

const _layout = () => {
  return (
    <Provider store={store}>
      <TabStackScreen />
    </Provider>
  );
};

export default _layout;
