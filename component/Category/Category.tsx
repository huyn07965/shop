import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Color, Images } from "@/constants";
import axios from "axios";
import { NavigationProp } from "@/common";
import { SalePercent } from "../FormatValue";
import { FormatPrice } from "../FormatValue";
import { ProductType } from "@/common";
import axiosClient from "@/services";

type CategoryPropsType = {
  nameCategory: string;
  sale?: boolean;
};

const Category = ({ nameCategory, sale = true }: CategoryPropsType) => {
  const navigation = useNavigation<NavigationProp>();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let result;
    switch (nameCategory) {
      case "Sản Phẩm Nổi Bật":
        const fetchDataCateSpec = async () => {
          try {
            const result = await axiosClient.get(
              "http://apiforlearning.zendvn.com/api/mobile/products?offset=0&sortBy=id&order=asc&special=true",

              {
                headers: {
                  Accept: "application/json",
                },
              }
            );
            setItems(result.data);
          } catch (error: any) {
            console.log("error", error);
          }
        };
        fetchDataCateSpec();

        break;
      case "Sản Phẩm Mới":
        const fetchDataCateIsNew = async () => {
          try {
            const result = await axiosClient.get(
              "http://apiforlearning.zendvn.com/api/mobile/products?offset=0&sortBy=id&order=asc&is_new=true",
              {
                headers: {
                  Accept: "application/json",
                },
              }
            );
            setItems(result.data);
          } catch (error: any) {
            console.log("error", error);
          }
        };
        fetchDataCateIsNew();
        break;

      default:
        break;
    }
  }, []);

  const goProduct = (id: number) => {
    navigation.navigate("ProductScreen", { productId: id });
  };

  const showItems = ({ item }: { item: ProductType }) => {
    return (
      <TouchableOpacity onPress={() => goProduct(item.id)} style={styles.box}>
        <View style={styles.product}>
          <View style={styles.boxImg}>
            <Image style={styles.imgItem} source={{ uri: item.image }} />
          </View>
          <View style={styles.titleProduct}>
            <Text numberOfLines={1} style={styles.name}>
              {item.name}
            </Text>
            <Text numberOfLines={1} style={styles.titleSumary}>
              {item.summary}
            </Text>
            {sale && (
              <View style={styles.sale}>
                <Image style={styles.saleImg} source={Images.sale} />
                <View style={styles.boxSale}>
                  <Text style={styles.saleOf}>Đến</Text>
                  <Text style={styles.saleOf}>
                    {SalePercent({
                      price: item.price,
                      priceSale: item.price_sale_off,
                    })}
                  </Text>
                </View>
              </View>
            )}
            <Text style={styles.price}>
              {FormatPrice({ yourNumber: item.price_sale_off })}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{nameCategory}</Text>
        <MaterialCommunityIcons
          name="chevron-double-left"
          size={24}
          color="#0ca89e"
        />
      </View>
      <FlatList
        data={items}
        renderItem={showItems}
        keyExtractor={(item) => item?.name.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  titleText: {
    width: "90%",
    fontSize: 19,
    fontWeight: "bold",
    marginVertical: 15,
    marginLeft: 8,
  },
  title: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "space-between",
  },
  box: {
    width: 190,
    height: 380,
    marginTop: 10,
    paddingHorizontal: 5,
  },
  product: {
    backgroundColor: Color.second,
    width: "100%",
    height: "100%",
    borderRadius: 3,
    borderWidth: 0.1,
    borderColor: Color.background,
    paddingBottom: 10,
  },
  boxImg: {
    width: "100%",
    height: "65%",
    alignItems: "center",
    backgroundColor: Color.background,
    padding: 5,
    borderRadius: 3,
  },
  imgItem: {
    width: "60%",
    height: "100%",
    resizeMode: "center",
  },
  titleProduct: {
    height: "35%",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    marginTop: 5,
    marginLeft: 5,
  },
  iconLike: {
    height: 35,
    width: 35,
    position: "absolute",
    bottom: 22,
    right: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Color.main,
    backgroundColor: Color.main,
    borderRadius: 11,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  titleSumary: {
    color: Color.darkGray,
  },
  sale: {
    width: 90,
    height: 20,
    position: "absolute",
    top: -245,
    right: 0.5,
    alignItems: "center",
    marginLeft: -8,
  },
  saleImg: {
    width: "100%",
    height: "160%",
    position: "absolute",
  },
  boxSale: {
    flexDirection: "row",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  saleOf: {
    fontSize: 14,
    color: Color.white,
    fontWeight: "bold",

    marginLeft: 6,
  },
  price: {
    color: Color.red,
    fontWeight: "bold",
    fontSize: 16,
  },
});
