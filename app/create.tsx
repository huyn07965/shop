import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";

import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import { Color } from "@/constants";

// import { fetchProductInCategory } from '../../store/slices/categories'

const wait = (timeout: number | undefined) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Create = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  // const { id } = route.params
  // const items = useSelector(state => state.Categories.products)
  // const itemsFilter = useSelector(state => state.Filter.data)
  // const [refreshing, setRefreshing] = useState(false);

  // const onRefresh = React.useCallback(() => {
  //   setRefreshing(true);
  //   wait(1000).then(() => setRefreshing(false));
  // }, []);

  // useEffect(() => {
  //     let min_price = itemsFilter.fromValue
  //     let max_price = itemsFilter.toValue
  //     let sortBy, order;
  //     switch (itemsFilter?.active) {
  //         case 'Giảm dần':
  //             sortBy = 'price'
  //             order = 'desc'
  //             break;
  //         case 'Tăng dần':
  //             sortBy = 'price'
  //             order = 'asc'
  //             break;
  //         case 'Mới nhất':
  //             sortBy = 'id'
  //             order = 'asc'
  //             break;
  //         case 'Cũ nhất':
  //             sortBy = 'id'
  //             order = 'desc'
  //             break;
  //         case 'Đang giảm giá':
  //             sortBy = 'price_sale_off'
  //             order = 'desc'
  //             break;
  //     }
  //     dispatch(fetchProductInCategory({ id, sortBy, order, min_price, max_price }))
  // }, [itemsFilter])

  const showItems = ({ item }) => {
    // return (
    //     <Product data={item} />
    // )
  };
  // if (items.length === 0) {
  //     return <Empty favorite />
  // }

  return (
    <View style={styles.container}>
      <View style={styles.aside}>
        <Text>Xin chào ssss</Text>

        {/* <FlatList
                    showsVerticalScrollIndicator={false}
                    data={items}
                    renderItem={showItems}
                    keyExtractor={(item) => item?.name.toString()}
                    numColumns={2}
                    nestedScrollEnabled={true}
                    overScrollMode="never"
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} /> */}
      </View>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  aside: {
    backgroundColor: Color.white,
    paddingHorizontal: 4,
  },
});
