import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
// import EditQuantity from "../quantity";
// import { AddCart, RemoveCart } from "../../store/slices/cart";
// import { fetchSingleProduct } from "../../store/slices/product";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Color } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import axios from "axios";
import { ProductType } from "@/common";
import EditQuantity from "../Quanity";
import { AddCart, RemoveCart } from "@/store/slices/cart";
import { FormatPrice } from "../FormatValue";
import axiosClient from "@/services";

export type ProductListItemType = {
  id: number;
  sum: number;
};

type ProductListProps = {
  item: ProductListItemType;
  check?: boolean;
  cart?: boolean;
};

const ProductList = ({ item, check, cart }: ProductListProps) => {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  // const itemForOder = useSelector((state: RootState) => state.getData.data);
  const [number, setNumber] = useState<number>(item?.sum || 1);
  const [data, setData] = useState<ProductType>();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    console.log("cart", data);
  }, [data]);

  useEffect(() => {
    const fetchItemForOder = async () => {
      try {
        const result = await axiosClient.get(
          `http://apiforlearning.zendvn.com/api/mobile/products/${item.id}`,
          {
            headers: {
              Accept: "application/json",
            },
          }
        );

        setData(result.data);
        dispatch(
          AddCart({
            id: item?.id,
            total: number * result.data.price_sale_off,
            update: true,
            sumUpdate: item?.sum,
          })
        );
      } catch (error: any) {
        console.log("error", error);
      }
    };
    fetchItemForOder();
  }, []);

  // useEffect(() => {
  //   setloading(true);
  //   dispatch(fetchSingleProduct({ id: item?.id, name: "product" })).then(
  //     (res) => {
  //       if (!res.error) {
  //         setData(res.payload);
  //         setloading(false);
  //         if (!check) {
  //           dispatch(
  //             AddCart({
  //               id: item?.id,
  //               total: number * res.payload.price_sale_off,
  //               update: true,
  //               sumUpdate: item?.sum,
  //             })
  //           );
  //         }
  //       }
  //     }
  //   );
  // }, []);

  const handleChangeNumber = (val: number) => {
    if (data?.price_sale_off) {
      val === 0
        ? dispatch(RemoveCart({ id: item?.id }))
        : dispatch(
            AddCart({
              id: item?.id,
              update: true,
              sumUpdate: val,
              total: val * data.price_sale_off,
            })
          );
      setNumber(val);
    }
  };
  const showProduct = () => {
    // navigation.navigate("ProductScreen", {
    //   id: data.id,
    // });
  };

  return (
    <>
      {cart ? (
        <View style={styles.container}>
          <TouchableOpacity onPress={showProduct}>
            <View style={styles.bgimg}>
              <Image style={styles.img} source={{ uri: data?.image }} />
            </View>
          </TouchableOpacity>
          <View style={styles.content}>
            <Text numberOfLines={1} style={styles.content_name}>
              {data?.name}
            </Text>
            <Text numberOfLines={1} style={styles.content_description}>
              {data?.summary}
            </Text>
            <View style={styles.content_more}>
              <View style={styles.content_price}>
                {data?.price_sale_off && (
                  <Text numberOfLines={2} style={styles.price_text}>
                    {FormatPrice({ yourNumber: number * data?.price_sale_off })}
                  </Text>
                )}
              </View>
              <View style={styles.edit}>
                <EditQuantity
                  quantity={number}
                  quantityAddCart={(val: number) => handleChangeNumber(val)}
                />
              </View>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.container_buy}>
          <TouchableOpacity>
            <View style={styles.bgimg}>
              <Image style={styles.img} source={{ uri: data?.image }} />
            </View>
          </TouchableOpacity>
          <View style={styles.content_buy}>
            <Text numberOfLines={1} style={styles.content_name}>
              {data?.name}
              iphone
            </Text>
            <Text numberOfLines={1} style={styles.content_description}>
              {data?.summary}
              10
            </Text>
            <View style={styles.content_more}>
              <View style={styles.content_price}>
                <Text numberOfLines={1} style={styles.price_text}>
                  {/* {FormatPrice(number * data.price_sale_off)} */}
                </Text>
              </View>
              <View style={styles.insert_left}>
                <Text style={styles.quantity_text}>SL :</Text>
              </View>
              <View style={styles.insert_right}></View>
              <View style={styles.edit}>
                <EditQuantity
                  quantity={number}
                  product
                  // quanityAddCart={(val: number) => handleChangeNumber(val)}
                />
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};
export default ProductList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Color.background,
    width: "95%",
    height: 150,
    paddingVertical: 10,
    backgroundColor: "white",
  },
  container_buy: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 150,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: Color.background,
    backgroundColor: "white",
  },
  bgimg: {
    width: 100,
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    backgroundColor: Color.background,
    borderRadius: 11,
    paddingHorizontal: 20,
    paddingVertical: 2,
    elevation: 2,
  },
  img: {
    width: "100%",
    height: "80%",
    resizeMode: "center",
  },
  content: {
    marginHorizontal: 18,
  },
  content_buy: {
    marginHorizontal: 10,
  },
  content_name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content_description: {
    marginBottom: 10,
  },
  content_price: {
    width: "50%",
    backgroundColor: Color.white,
  },
  price_text: {
    color: "red",
    fontSize: 16,
  },
  content_more: {
    flexDirection: "row",
    alignItems: "center",
  },
  edit: {
    width: "30%",
    marginLeft: 10,
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: Color.main,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  button_text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  insert_right: {
    width: 45,
    height: 40,
    backgroundColor: Color.white,
    position: "absolute",
    right: 35,
    bottom: 0,
    zIndex: 2,
  },
  insert_left: {
    width: 45,
    height: 40,
    backgroundColor: Color.white,
    position: "absolute",
    right: 105,
    bottom: 0,
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  quantity_text: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 7,
    color: Color.main,
  },
});
