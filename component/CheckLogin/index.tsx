import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { Color } from "@/constants";

const CheckLogin = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxImg}>
        <Image
          style={styles.img}
          source={require("../../assets/app/emptydownload.png")}
        />
      </View>
      <Text style={styles.text}>Bạn chưa đăng nhập</Text>
    </View>
  );
};

export default CheckLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.white,
  },
  boxImg: {
    width: "100%",
    height: "75%",
  },
  img: {
    width: "100%",
    height: "100%",
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: Color.main,
  },
});
