import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  RefreshControl,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { ProductList } from "@/component";
import { Color } from "@/constants";
import { AppDispatch, RootState } from "@/store";
import { CartType, RemoveAll } from "@/store/slices/cart";
import { ProductListItemType } from "@/component/ProductList";

const wait = (timeout: number | undefined) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Cart = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.Cart.cart);
  const isLogin = useSelector((state: RootState) => state.Auth.isLogin);
  const [total, setTotal] = useState(5);
  const [quantity, setQuantity] = useState(3);
  const [refreshing, setRefreshing] = useState(false);
  // axiosClient.defaults.headers.common['Authorization'] = `Bearer ${122}`;

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  // useEffect(() => {
  //   console.log("cartItems", cartItems);
  // }, [cartItems]);

  useEffect(() => {
    let totalCurrent = 0;
    let sumCurrent = 0;
    cartItems.map((item: CartType) => {
      if (item?.total && item?.quantity) {
        totalCurrent += item.total;
        sumCurrent += item.quantity;
      }
    });
    setTotal(totalCurrent);
    setQuantity(sumCurrent);
  }, [cartItems]);

  // if (!isLogin) {
  //   return <CheckLogin />;
  // } else {
  //   if (cartItems.length <= 0) {
  //     return <Empty />;
  //   }
  // }

  const handleBuy = () => {
    dispatch(RemoveAll({}));
    // navigation.navigate("BuyScreen", {
    //   total,
    //   quantity,
    // });
  };

  const handleRender = ({ item }: { item: ProductListItemType }) => {
    return <ProductList item={item} cart />;
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}
        overScrollMode="never"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.body}>
          <View style={styles.list}>
            <FlatList
              data={cartItems}
              renderItem={handleRender}
              keyExtractor={(item) => item?.id.toString()}
              showsVerticalScrollIndicator={false}
              overScrollMode="never"
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.add}>
        <View style={styles.add_quanity}>
          <View style={styles.add_quanity_more}>
            <Text style={styles.title_quanity}> SL </Text>
            <View style={styles.quantity}>
              <Text style={styles.number_quanity}>{quantity}</Text>
            </View>
          </View>
        </View>
        <View style={styles.add_buy}>
          <TouchableOpacity onPress={handleBuy} style={styles.add_buy_more}>
            <Text style={styles.add_buy_text}>Mua hàng</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  body: {
    backgroundColor: Color.white,
  },
  list: {
    alignItems: "center",
    marginBottom: 10,
  },
  add: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.white,
    elevation: 10,
  },
  add_quanity: {
    height: "65%",
    width: "55%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.white,
  },
  add_quanity_more: {
    width: "80%",
    height: "100%",
    flexDirection: "row",
    backgroundColor: Color.background,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
  },
  title_quanity: {
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 20,
    color: Color.main,
  },
  quantity: {
    flexDirection: "row",
    width: "60%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderStartWidth: 2,
    borderColor: Color.gray,
  },
  number_quanity: {
    fontWeight: "bold",
    fontSize: 16,
  },
  add_buy: {
    width: "40%",
    height: "65%",
  },
  add_buy_more: {
    width: "100%",
    height: "100%",
    backgroundColor: Color.orange,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  add_buy_text: {
    color: Color.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
