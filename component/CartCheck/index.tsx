import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ProductList, { ProductListItemType } from "../ProductList";
import { ItemOderType, ListItemOderType } from "@/common";

// type CartCheckProps = {
//   id: number;
//   quantity: number;
//   product_id: number;
// };

const CheckCart = ({ items }: { items: ListItemOderType }) => {
  const handleRender = ({ item }: { item: ItemOderType }) => {
    let itemNew: ProductListItemType = {
      sum: Number(item.quantity),
      id: Number(item.product_id),
    };

    return <ProductList item={itemNew} check />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.yourCart}>
        <Text style={styles.title}>Đơn hàng của bạn</Text>
        <View style={styles.check}>
          <FlatList
            data={items?.order_items}
            renderItem={handleRender}
            keyExtractor={(item) => item?.id.toString()}
            overScrollMode="never"
          />
        </View>
      </View>
    </View>
  );
};

export default CheckCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    backgroundColor: "#ffffff",
  },
  yourCart: {
    width: "100%",
  },
  check: {
    width: "100%",
    alignSelf: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 20,
  },
});
