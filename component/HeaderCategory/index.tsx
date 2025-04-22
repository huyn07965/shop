import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderButton from "../HeaderButton";
import { useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Color } from "@/constants";
import Search from "../Search";

const HeaderCategory = () => {
  const route = useRoute();

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["#0ca89e", "#0cb0a5", "#80e4c4"]}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.top}>
          <HeaderButton name={"back"} />
          <Text numberOfLines={1} style={styles.name}>
            DANH MỤC {route?.params?.name}
          </Text>
          <HeaderButton name={"sort"} />
        </View>
        <View style={styles.search}>
          <Search />
        </View>
      </View>
      <StatusBar style="auto" />
    </LinearGradient>
  );
};

export default HeaderCategory;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 137,
  },
  content: {
    width: "100%",
    marginTop: 35,
    alignItems: "center",
  },
  top: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  search: {
    width: "95%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    color: Color.white,
  },
});
