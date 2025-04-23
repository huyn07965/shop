import React, { useEffect, useState } from "react";
import { View, FlatList, RefreshControl, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import { Color } from "@/constants";
import { RootState } from "@/store";
import axiosClient from "@/services";
import { ProductType } from "@/common";
import { CheckLogin, Product } from "@/component";

const wait = (timeout: number | undefined) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Favorite = () => {
  const isLogin = useSelector((state: RootState) => state.Auth.isLogin);
  const dataFavorite = useSelector((state: RootState) => state.Favorite.items);
  const [items, setItems] = useState<ProductType[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [product, setProduct] = useState<ProductType[]>([]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axiosClient.get(
          `http://apiforlearning.zendvn.com/api/mobile/products`
        );
        // console.log("result category", result.data);
        setProduct(result.data);
      } catch (error: any) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let itemsFavorite = product?.filter(
      (item) => dataFavorite.indexOf(item.id) !== -1
    );
    setItems(itemsFavorite);
  }, [dataFavorite]);

  const showItems = ({ item }: { item: ProductType }) => {
    return <Product data={item} />;
  };

  if (!isLogin) {
    return <CheckLogin />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.aside}>
        <Text style={styles.title}>Các sản phẩm đã yêu thích</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={items}
          renderItem={showItems}
          keyExtractor={(item) => item.name.toString()}
          numColumns={2}
          nestedScrollEnabled={true}
          overScrollMode="never"
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  aside: {
    backgroundColor: Color.white,
    paddingHorizontal: 4,
    paddingBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 8,
    paddingBottom: 5,
    paddingTop: 5,
    color: Color.main,
  },
});
