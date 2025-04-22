import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderButton from "../HeaderButton";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Color } from "@/constants";

const HeaderMore = ({ name }: { name: string }) => {
  let nameHeader = "";

  switch (name) {
    case "InfoShip":
      nameHeader = "Thông tin giao hàng";
      break;
    case "InfoCart":
      nameHeader = "Thông tin đơn hàng";
      break;
    case "DetailProduct":
      nameHeader = "Chi tiết sản phẩm";
      break;
    case "Buy":
      nameHeader = "Thanh toán đơn hàng";
      break;
    case "Cart":
      nameHeader = "Giỏ hàng";
      break;
    case "Filter":
      nameHeader = "Lọc sản phẩm";
      break;
    default:
      break;
  }

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["#0ca89e", "#0cb0a5", "#80e4c4"]}
    >
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <HeaderButton name={"back"} />
          <Text style={styles.titleHeader}>{nameHeader}</Text>
        </View>
        <HeaderButton name={"cart"} />
      </View>
      <StatusBar style="auto" />
    </LinearGradient>
  );
};

export default HeaderMore;

const styles = StyleSheet.create({
  container: {},
  header: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 25,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: "row",
    marginLeft: -10,
  },
  titleHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    color: Color.white,
  },
});
