import React, { useState, useEffect, ReactNode } from "react";
import { TouchableOpacity, Alert, Text, View, StyleSheet } from "react-native";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// import { RemoveFavorite } from '../../store/slices/favorite'
// import { useDispatch, useSelector } from 'react-redux'
// import { MESSAGE } from '../../contains'
// import ShowToast from '../../help/showToast'
import { Color } from "@/constants";
import { NavigationProp } from "@/common";

type IconHeaderProps = {
  name: string;
  info?: boolean;
  product?: boolean;
};

const HeaderButton = ({ name = "setting", info, product }: IconHeaderProps) => {
  // const dispatch = useDispatch();
  // const dataFavorite = useSelector(state => state.Favorite.items);
  const navigation = useNavigation<NavigationProp>();
  // const cartItems = useSelector(state => state.Cart.cart)
  // const isLogin = useSelector((state) => state.Auth.isLogin)
  const isLogin = true;
  const [quantity, setQuanity] = useState(0);

  //   useEffect(() => {
  //     let sumCurrent = 0;
  //     cartItems.map((item) => {
  //       sumCurrent += item.quantity;
  //     });
  //     setQuanity(sumCurrent);
  //   }, [cartItems]);

  let icon: ReactNode = <></>;

  const openSetting = () => {
    // navigation.navigate("Info");
  };
  const openFilter = () => {
    navigation.navigate("FilterScreen");
  };
  const goBack = () => {
    navigation.goBack();
  };
  const openCart = () => {
    navigation.navigate("CartScreen");
  };

  const goDelete = () => {
    // if (dataFavorite.length !== 0 && isLogin) {
    //   Alert.alert("Thông báo !", "Bạn muốn xóa tất cả ?", [
    //     {
    //       text: "Hủy",
    //       style: "cancel",
    //     },
    //     {
    //       text: "Đồng ý",
    //       onPress: () => {
    //         dispatch(RemoveFavorite());
    //       },
    //     },
    //   ]);
    // } else {
    //   Alert.alert("Thông báo !", "chưa có sản phẩm nào");
    // }
  };

  const noComplete = () => {
    // ShowToast(MESSAGE.functionFail);
  };

  switch (name) {
    case "setting":
      icon = (
        <TouchableOpacity onPress={openSetting}>
          <AntDesign name="setting" size={26} color="white" />
        </TouchableOpacity>
      );
      break;
    case "nofication":
      icon = (
        <TouchableOpacity onPress={noComplete}>
          <MaterialIcons name="notifications-none" size={32} color="#18191c" />
        </TouchableOpacity>
      );
      break;
    case "cart":
      if (isLogin) {
        if (info) {
          if (quantity != 0) {
            icon = (
              <TouchableOpacity onPress={openCart}>
                <AntDesign name="shoppingcart" size={28} color="#18191c" />
                <View style={styles.quantity}>
                  <Text style={styles.quantity_text}>{quantity}</Text>
                </View>
              </TouchableOpacity>
            );
          } else {
            icon = (
              <TouchableOpacity onPress={openCart}>
                <AntDesign name="shoppingcart" size={28} color="#18191c" />
              </TouchableOpacity>
            );
          }
        } else {
          if (quantity != 0) {
            icon = (
              <TouchableOpacity onPress={openCart}>
                <AntDesign name="shoppingcart" size={26} color="white" />
                <View style={styles.quantity}>
                  <Text style={styles.quantity_text}>{quantity}</Text>
                </View>
              </TouchableOpacity>
            );
          } else {
            icon = (
              <TouchableOpacity onPress={openCart}>
                <AntDesign name="shoppingcart" size={26} color="white" />
              </TouchableOpacity>
            );
          }
        }
      } else {
        if (info) {
          icon = (
            <TouchableOpacity onPress={openCart}>
              <AntDesign name="shoppingcart" size={28} color="#18191c" />
            </TouchableOpacity>
          );
        } else {
          icon = (
            <TouchableOpacity onPress={openCart}>
              <AntDesign name="shoppingcart" size={26} color="white" />
            </TouchableOpacity>
          );
        }
      }
      break;
    case "addCart":
      icon = <AntDesign name="shoppingcart" size={25} color="red" />;
      break;
    case "sort":
      icon = (
        <TouchableOpacity onPress={openFilter}>
          <MaterialCommunityIcons
            name="filter-menu-outline"
            size={25}
            color="white"
          />
        </TouchableOpacity>
      );
      break;
    case "back":
      {
        !product
          ? (icon = (
              <TouchableOpacity onPress={goBack}>
                <Ionicons name="arrow-back" size={24} color="white" />
              </TouchableOpacity>
            ))
          : (icon = (
              <TouchableOpacity onPress={goBack}>
                <Ionicons name="arrow-back" size={24} color="#0ca89e" />
              </TouchableOpacity>
            ));
      }
      break;
    case "delete":
      icon = (
        <TouchableOpacity onPress={goDelete}>
          <MaterialCommunityIcons name="delete" size={26} color="white" />
        </TouchableOpacity>
      );
      break;
    default:
      break;
  }

  return icon;
};

export default HeaderButton;

const styles = StyleSheet.create({
  quantity: {
    width: "60%",
    height: 15,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: Color.red,
    color: Color.red,
    position: "absolute",
    top: -8,
    right: -8,
    fontSize: 12,
    fontWeight: "bold",
  },
  quantity_text: {
    color: Color.white,
    fontSize: 12,
    fontWeight: "bold",
  },
});
