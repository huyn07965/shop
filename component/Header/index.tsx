import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import HeaderButton from "../HeaderButton";
import { Color } from "@/constants";
import Search from "../Search";

type IconHeaderProps = {
  icon?: string;
  info?: boolean;
};

const Header = ({ icon, info }: IconHeaderProps) => {
  let iconRight = "cart";
  switch (icon) {
    case "delete":
      iconRight = "delete";
      break;
    case "sort":
      iconRight = "sort";
      break;
  }

  return (
    <>
      {!info ? (
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.top}>
              <View style={styles.search}>
                <Search home />
              </View>
              <View style={styles.extension}>
                <HeaderButton name={iconRight} />
              </View>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.container_info}>
          <View style={styles.content_info}>
            <HeaderButton name={"nofication"} info />
            <HeaderButton name={"cart"} info />
          </View>
        </View>
      )}
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    backgroundColor: Color.white,
    paddingTop: 25,
  },
  content: {
    width: "100%",
    marginTop: 15,
    alignItems: "center",
  },
  container_info: {
    width: "100%",
    height: 95,
    backgroundColor: Color.white,
    paddingTop: 15,
  },
  content_info: {
    width: "100%",
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 23,
  },
  top: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  search: {
    width: "83%",
    height: 40,
  },
  extension: {
    width: 40,
    height: 40,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: Color.main,
    backgroundColor: Color.main,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -5,
  },
});
