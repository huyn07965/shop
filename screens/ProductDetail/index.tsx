import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  Comment,
  EditQuantity,
  FormatPrice,
  RatingComponent,
  SalePercent,
} from "@/component";
import { useDispatch, useSelector } from "react-redux";
import { RouteProp, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Color, Images } from "@/constants";
import { AppDispatch, RootState } from "@/store";
import { fetchData } from "@/store/slices/getData";
import axios from "axios";
import { CategoryType, RootStackParamList } from "@/common";
import { AddCart } from "@/store/slices/cart";
import axiosClient from "@/services";

const wait = (timeout: number | undefined) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

type ProfileRouteProp = RouteProp<RootStackParamList, "ProductScreen">;

const ProductDetail = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isLogin = useSelector((state: RootState) => state.Auth.isLogin);
  const product = useSelector((state: RootState) => state.getData.data);
  const route = useRoute<ProfileRouteProp>();
  const productId = route?.params?.productId;
  const [number, setNumber] = useState(1);
  const [productInCategory, setProductInCategory] = useState();
  const [loading, setLoading] = useState(false);
  const [sale, setSale] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    dispatch(
      fetchData({
        path: `products/${productId}`,
      })
    );
  }, [productId]);

  useEffect(() => {
    if (productId) {
      const fetchData = async () => {
        try {
          const result = await axiosClient.get(
            `http://apiforlearning.zendvn.com/api/mobile/categories/${product.category_id}/products`,
            {
              headers: {
                Accept: "application/json",
              },
            }
          );
          // console.log("result category", result.data);
          setProductInCategory(result.data);
        } catch (error: any) {
          console.log("error", error);
        }
      };
      fetchData();
    }
  }, [productId]);

  useEffect(() => {
    // console.log("product detail", product);
    // console.log("category haha", productInCategory);
  }, [, product]);

  const handleChangeNumber = (val: number) => {
    setNumber(val);
  };

  // const showItems = ( item : CategoryType) => {
  //   return (
  //       <ProductHorizital data={item} />
  //   )
  // };

  const handleAddCart = () => {
    if (!isLogin)
      // ShowToast(MESSAGE.notLogin)
      alert("ban chua login");
    else {
      dispatch(AddCart({ id: productId, sum: number }));
      setNumber(1);
      // ShowToast(MESSAGE.addCartSuccess)
    }
  };

  return (
    <>
      {!loading ? (
        <>
          <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
            overScrollMode="never"
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            <View style={styles.product}>
              <View style={styles.productImg}>
                <Image style={styles.img} source={{ uri: product?.image }} />
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_main}>
                <View style={styles.productContent}>
                  <View style={styles.price}>
                    <View style={styles.priceDetail}>
                      <Text style={styles.priceText}>
                        {FormatPrice({
                          yourNumber: product?.price_sale_off,
                        })}
                      </Text>
                      <Text style={styles.oldPrice}>
                        {FormatPrice({ yourNumber: product.price })}
                      </Text>
                    </View>
                    {sale && (
                      <View style={styles.sale}>
                        <Image style={styles.saleImg} source={Images.sale2} />
                        <View style={styles.boxSale}>
                          <Text style={styles.saleOf}>Đến </Text>
                          <Text style={styles.salePr}>
                            {SalePercent({
                              price: product.price,
                              priceSale: product.price_sale_off,
                            })}
                          </Text>
                        </View>
                      </View>
                    )}
                  </View>
                </View>
                <View style={styles.name}>
                  <Text numberOfLines={2} style={styles.textName}>
                    {product?.name}
                  </Text>
                  <View>
                    <RatingComponent />
                  </View>
                </View>
                <View style={styles.configuration}>
                  <Text style={styles.configuration_text}>Cấu hình: </Text>
                  <Text>{product?.summary}</Text>
                </View>
                <Text style={styles.title}> Mô tả sản phẩm </Text>
                <Text> {product?.description} </Text>
              </View>
              <View style={styles.view_main}>
                <Text style={styles.title}> Sản phẩm liên quan </Text>
                <View style={styles.boxProduct}>
                  {/* <FlatList
                    data={productInCategory}
                    renderItem={showItems}
                    keyExtractor={(item) => item?.name.toString()}
                    horizontal={true}
                    showHorizontalScrollIndicator={false}
                    overScrollMode="never"
                  /> */}
                </View>
              </View>
            </View>
            <View style={styles.view_main}>
              <Comment />
            </View>
          </ScrollView>
          <View style={styles.add}>
            <View style={styles.add_quanity}>
              <View style={styles.add_quanity_more}>
                <Text style={styles.title_quanity}> SL </Text>
                <View style={styles.quantity}>
                  <EditQuantity
                    quantityAddCart={(quantity: number) =>
                      handleChangeNumber(quantity)
                    }
                    quantity={number}
                    product
                  />
                </View>
              </View>
            </View>
            <View style={styles.add_buy}>
              <TouchableOpacity
                onPress={handleAddCart}
                style={styles.add_buy_more}
              >
                <Text style={styles.add_buy_text}>Thêm vào giỏ hàng</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      ) : (
        // <Skeleton layout="layoutProductDetail" />
        <Text>chưa có dữ liệu</Text>
      )}
      <StatusBar style="auto" />
    </>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  product: {
    height: 330,
    width: "100%",
    alignItems: "center",
    backgroundColor: Color.background,
  },
  productImg: {
    width: "50%",
    height: "100%",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "center",
  },
  productContent: {
    height: 50,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  view: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    backgroundColor: Color.white,
    paddingTop: 30,
    paddingHorizontal: 15,
  },
  view_main: {
    marginBottom: 10,
  },
  price: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  priceDetail: {
    width: "75%",
  },
  priceText: {
    color: Color.main,
    fontSize: 20,
    fontWeight: "bold",
  },
  oldPrice: {
    textDecorationLine: "line-through",
    color: Color.gray,
    fontSize: 16,
  },
  sale: {
    width: 90,
    height: 20,
    alignItems: "center",
    marginLeft: -8,
    marginTop: 4,
  },
  saleImg: {
    width: "100%",
    height: "140%",
    position: "absolute",
  },
  boxSale: {
    flexDirection: "row",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  salePr: {
    fontSize: 14,
    color: Color.white,
    fontWeight: "bold",
  },
  saleOf: {
    fontSize: 14,
    color: Color.white,
    fontWeight: "bold",
  },
  name: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textName: {
    width: "65%",
    fontSize: 20,
    fontWeight: "bold",
    color: Color.black,
  },
  configuration: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  configuration_text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 10,
    color: Color.black,
    marginLeft: -5,
  },
  boxProduct: {
    height: "100%",
    marginLeft: -5,
  },
  quantity_button: {
    width: 50,
    height: "100%",
    backgroundColor: Color.background,
    justifyContent: "center",
    alignItems: "center",
  },
  quantity_buttonText: {
    fontSize: 18,
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
    justifyContent: "space-between",
    alignItems: "center",
    borderStartWidth: 2,
    borderColor: Color.gray,
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
