import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Color } from "@/constants";

type ButtonFilterProps = {
  title: string;
  onPress: (title: string) => void;
  active: string;
};

const ButtonFilter = ({ title, onPress, active }: ButtonFilterProps) => {
  const choseButton = () => {
    onPress(title);
  };
  return (
    <TouchableOpacity
      onPress={choseButton}
      style={[styles.button, active === title && styles.active]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonFilter;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.main,
    borderRadius: 5,
    elevation: 5,
    height: 50,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: Color.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  active: {
    backgroundColor: Color.black,
  },
});
