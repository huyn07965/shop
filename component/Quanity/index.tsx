import { Color } from "@/constants";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

type EditQuantityProps = {
  quantityAddCart?: (quantity: number) => void;
  quantity: number;
  product?: boolean;
};

const EditQuantity = ({
  quantityAddCart,
  quantity,
  product,
}: EditQuantityProps) => {
  const handleChange = (type: string) => {
    if (quantityAddCart) {
      switch (type) {
        case "add":
          quantityAddCart(quantity + 1);
          break;
        case "minus":
          if (quantity - 1 == 0) {
            quantityAddCart(0);
          } else {
            quantityAddCart(quantity - 1 === 0 ? 1 : quantity - 1);
          }
          break;
        default:
          break;
      }
    }
  };

  return (
    <>
      {!product ? (
        <View style={styles.container_cart}>
          <TouchableOpacity
            onPress={() => handleChange("minus")}
            style={styles.button_cart}
          >
            <Text style={styles.button_text_cart}>-</Text>
          </TouchableOpacity>
          <Text style={styles.text_cart}>{quantity}</Text>
          <TouchableOpacity
            onPress={() => handleChange("add")}
            style={styles.button_cart}
          >
            <Text style={styles.button_text_cart}>+</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => handleChange("minus")}
            style={styles.button}
          >
            <Text style={styles.button_text}>-</Text>
          </TouchableOpacity>
          <Text style={styles.text}>{quantity}</Text>
          <TouchableOpacity
            onPress={() => handleChange("add")}
            style={styles.button}
          >
            <Text style={styles.button_text}>+</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default EditQuantity;

const styles = StyleSheet.create({
  container_cart: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button_cart: {
    width: 30,
    height: 33,
    backgroundColor: Color.main,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    borderRadius: 8,
  },
  button_text_cart: {
    fontSize: 22,
    color: Color.white,
  },
  text_cart: {
    fontSize: 18,
    color: Color.black,
  },
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "30%",
    height: 40,
    backgroundColor: Color.background,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  button_text: {
    fontSize: 22,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: Color.main,
  },
});
