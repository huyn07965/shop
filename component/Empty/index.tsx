import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { Color } from "@/constants";

const Empty = ({ favorite }: { favorite?: boolean }) => {
  return (
    <>
      {favorite ? (
        <View style={styles.container}>
          <View style={styles.boxImg}>
            <Image
              style={styles.img}
              source={require("../../assets/app/empty.png")}
            />
          </View>
          <Text style={styles.text}>Chưa có dữ liệu</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.boxImg}>
            <Image
              style={styles.img}
              source={require("../../assets/app/emptycart.png")}
            />
          </View>
          <Text style={styles.text}>Chưa có dữ liệu</Text>
        </View>
      )}
    </>
  );
};

export default Empty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.white,
  },
  boxImg: {
    width: "100%",
    height: "65%",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "center",
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: Color.main,
  },
});
