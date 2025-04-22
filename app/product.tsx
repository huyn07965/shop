import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { fetchData } from "@/store/slices/getData";
import { useNavigation } from "expo-router";
import { NavigationProp, ProductType } from "@/common";
import { Product, Slide } from "@/component";
import { Color } from "@/constants";
import axios from "axios";
import axiosClient from "@/services";

const wait = (timeout: number | undefined) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
const ProductAll = () => {
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch<AppDispatch>();
  // const items = useSelector((state: RootState) => state.getData.data);
  const itemsFilter = useSelector((state: RootState) => state.Filter.data);
  const [refreshing, setRefreshing] = useState(false);
  const [items, setItems] = useState();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    let min_price = itemsFilter.fromValue;
    let max_price = itemsFilter.toValue;
    let sortBy: string, order: string;
    switch (itemsFilter?.active) {
      case "Giảm dần":
        sortBy = "price";
        order = "desc";
        break;
      case "Tăng dần":
        sortBy = "price";
        order = "asc";
        break;
      case "Mới nhất":
        sortBy = "id";
        order = "asc";
        break;
      case "Cũ nhất":
        sortBy = "id";
        order = "desc";
        break;
      case "Đang giảm giá":
        sortBy = "price_sale_off";
        order = "desc";
        break;
    }
    // dispatch(
    //   fetchData({
    //     path: `products`,
    //     params: {
    //       sortBy,
    //       order,
    //       min_price,
    //       max_price,
    //       // name: "items",
    //     },
    //   })
    // );
    const fetchData = async () => {
      try {
        const result = await axiosClient.get(
          `http://apiforlearning.zendvn.com/api/mobile/products`,
          {
            params: {
              sortBy,
              order,
              min_price,
              max_price,
              // name: "items",
            },
          }
        );
        // console.log("result category", result.data);
        setItems(result.data);
      } catch (error: any) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [itemsFilter]);

  const showItems = ({ item }: { item: ProductType }) => {
    return <Product data={item} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.aside}>
        <FlatList
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
          data={items}
          renderItem={showItems}
          keyExtractor={(item) => item.name.toString()}
          numColumns={2}
          nestedScrollEnabled={true}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListHeaderComponent={
            <View>
              <Slide />
              <View style={styles.title}>
                <Text style={styles.title_text}>Tất cả sản phẩm</Text>
              </View>
            </View>
          }
        />
      </View>
    </View>
  );
};

export default ProductAll;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  aside: {
    backgroundColor: Color.white,
    paddingHorizontal: 4,
  },
  title: {
    backgroundColor: Color.white,
    height: 40,
    marginTop: 5,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    flexDirection: "row",
    marginLeft: -10,
  },
  title_text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
