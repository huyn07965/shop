import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
// import { Favorite } from "../../store/slices/favorite";
import { useDispatch, useSelector } from "react-redux";
// import ShowToast from '../../help/showToast'
// import { Skeleton } from '../../common'
import { Color, Images, MESSAGE } from "@/constants";
import { NavigationProp, ProductType } from "@/common";
import { FormatPrice, SalePercent } from "../FormatValue";
import { IconHeart } from "../Icon";
import ToastNotification from "../Toast";
import { Favorite } from "@/store/slices/favorite";
import { RootState } from "@/store";

type ProductPropsType = {
  data: ProductType;
  sale?: boolean;
};

const Product = ({ data, sale = true }: ProductPropsType) => {
  const navigation = useNavigation<NavigationProp>();
  const [heart, setHeart] = useState(false);
  const dispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state.Auth.isLogin);
  const dataFavorite = useSelector((state: RootState) => state.Favorite.items);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dataFavorite.indexOf(Number(data?.id)) !== -1
      ? setHeart(true)
      : setHeart(false);

    // setLoading(false);
  }, [dataFavorite]);

  //   if (loading) {
  //     return <Skeleton layout={"layoutProduct"} />;
  //   }

  const showProduct = () => {
    navigation.navigate("ProductScreen", { productId: data?.id });
  };

  const onHeart = () => {
    if (!isLogin) ToastNotification(MESSAGE.notLogin);
    else {
      setHeart(!heart);
      dispatch(Favorite({ id: data.id }));
      if (heart === false) {
        ToastNotification(MESSAGE.addFavoritesSuccess);
      } else {
        ToastNotification(MESSAGE.deleteFavoritesSuccess);
      }
    }
  };

  return (
    <TouchableOpacity onPress={showProduct} style={styles.container}>
      <View style={styles.product}>
        <View style={styles.boxImg}>
          <Image style={styles.imgItem} source={{ uri: data.image }} />
        </View>
        <View style={styles.titleProduct}>
          <Text numberOfLines={1} style={styles.name}>
            {data.name}
          </Text>
          <Text numberOfLines={1} style={styles.title}>
            {data.description}
          </Text>
          {sale && (
            <View style={styles.sale}>
              <Image style={styles.saleImg} source={Images.sale} />
              <View style={styles.boxSale}>
                <Text style={styles.saleOf}>Đến</Text>
                <Text style={styles.saleOf}>
                  {SalePercent({
                    price: data.price,
                    priceSale: data?.price_sale_off,
                  })}
                </Text>
              </View>
            </View>
          )}
          <Text style={styles.price}>
            {FormatPrice({
              yourNumber: data?.price_sale_off,
            })}
          </Text>
        </View>
        <TouchableOpacity onPress={onHeart} style={styles.iconLike}>
          {!isLogin ? <IconHeart /> : <IconHeart heart={heart} />}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    width: "50%",
    height: 400,
    marginTop: 10,
    paddingHorizontal: 4,
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
  title: {
    color: Color.darkGray,
    width: "70%",
  },
  sale: {
    width: 90,
    height: 20,
    position: "absolute",
    top: -258,
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
