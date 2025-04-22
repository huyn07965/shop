import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Color } from "@/constants";
import HeaderMore from "../HeaderMore";
import Header from "../Header";
import { Cart, FilterScreen, InfoOder, ProductDetail, SignIn } from "@/screens";
import MyTab from "./MyTab";
import { SearchProduct } from "@/screens";
import ProductCategory from "@/screens/ProductCategory";
import HeaderCategory from "../HeaderCategory";

const TabStack = createStackNavigator();

const TabStackScreen = () => {
  return (
    <TabStack.Navigator
      screenOptions={{
        headerStyle: {
          // backgroundColor: Color.main,
          elevation: 0,
          height: 1,
        },
      }}
    >
      <TabStack.Screen
        name="MyTab"
        component={MyTab}
        options={{ title: "Trang chủ" }}
      />
      <TabStack.Screen
        name="ProductScreen"
        component={ProductDetail}
        options={{ header: () => <HeaderMore name="DetailProduct" /> }}
      />
      <TabStack.Screen
        name="CartScreen"
        component={Cart}
        options={{ header: () => <HeaderMore name="Cart" /> }}
      />
      <TabStack.Screen
        name="InfoOderScreen"
        component={InfoOder}
        options={{ header: () => <HeaderMore name="Info Oder" /> }}
      />
      <TabStack.Screen
        name="SearchProductScreen"
        component={SearchProduct}
        options={{ header: () => <HeaderMore name="Search Screen" /> }}
      />
      <TabStack.Screen
        name="SignInScreen"
        component={SignIn}
        options={{ title: "Đăng nhập" }}
      />
      <TabStack.Screen
        name="ProductCategoryScreen"
        component={ProductCategory}
        options={{ header: () => <HeaderCategory /> }}
      />
      <TabStack.Screen
        name="FilterScreen"
        component={FilterScreen}
        // options={{ header: () => <HeaderCategory /> }}
      />
      {/* <TabStack.Screen name="FilterScreen" component={FilterScreen} options={{ header: () => (<HeaderMore name='Filter' />) }} />
      <TabStack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Đăng nhập' }} />
      <TabStack.Screen name="SearchScreen" component={InfoSearchScreen} options={{ header: () => (<Header />) }} />
      <TabStack.Screen name="BuyScreen" component={BuyScreen} options={{ header: () => (<HeaderMore name='Buy' />) }} /> */}
    </TabStack.Navigator>
  );
};
export default TabStackScreen;
