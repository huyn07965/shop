import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
// import { useNavigation } from '@react-navigation/native'
import { Color } from "@/constants";
import { categoryData } from "@/app";
import { RouteProp } from "@react-navigation/native";
import { NavigationProp } from "@/common";
import { useNavigation } from "expo-router";

// type CategoryProps = {
//   items: categoryData[];
// };

const CategoryList = ({ items }: { items: categoryData[] }) => {
  const navigation = useNavigation<NavigationProp>();
  const showProduct = (product: categoryData) => {
    navigation.navigate("ProductCategoryScreen", {
      id: product.id,
      name: product.name,
    });
  };

  const showItems = ({ item }: { item: categoryData }) => {
    return (
      <TouchableOpacity onPress={() => showProduct(item)} style={styles.box}>
        <View style={styles.boxCategory}>
          <Image style={styles.imgItem} source={{ uri: item.image }} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        {items ? (
          <FlatList
            data={items}
            renderItem={showItems}
            keyExtractor={(item) => item?.name.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            overScrollMode="never"
          />
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    height: 80,
  },
  body: {
    width: "100%",
    height: "100%",
    backgroundColor: Color.white,
    paddingTop: 10,
  },
  box: {
    height: 45,
    alignItems: "center",
    marginHorizontal: 10,
    backgroundColor: Color.white,
    borderRadius: 11,
    elevation: 3,
  },
  boxCategory: {
    width: 90,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  imgItem: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
});
