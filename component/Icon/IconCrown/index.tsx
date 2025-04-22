import React from "react";
import { Color } from "@/constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  crown: {
    width: 30,
    height: 30,
    backgroundColor: Color.main,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
});

const IconCrown = () => {
  return (
    <TouchableOpacity style={styles.crown}>
      <MaterialCommunityIcons name="crown" size={24} color="yellow" />
    </TouchableOpacity>
  );
};

export default IconCrown;
