import React, { useState, useEffect } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

import { useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
// import { Skeleton } from "../../common";
import HighlightText from "@sanar/react-native-highlight-text";
import { Color } from "@/constants";
import { ProductType } from "@/common";
import { ProductList } from "@/component";
import Product from "@/component/Product";

const dataTest: ProductType[] = [
  {
    id: 1,
    name: "Iphone 13",
    image: "http://apiforlearning.zendvn.com/images/products/ip13.png",
    price: 24990000,
    price_sale_off: 22800000,
    rating: 5,
    special: true,
    summary: "8GB/64GB",
    description:
      "Đánh giá iPhone 13 - Flagship được mong chờ năm 2021\n                            Cuối năm 2020, bộ 4 iPhone 12 đã được ra mắt với nhiều cái tiến. Sau đó, mọi sự quan tâm lại đổ dồn vào sản phẩm tiếp theo – iPhone 13. Vậy iP 13 sẽ có những gì, hãy tìm hiểu ngay sau đây.\n                            Thiết kế với nhiều đột phá\n                            Về kích thước, iPhone 13 sẽ có 4 phiên bản khác nhau và kích thước không đổi so với series iPhone 12 hiện tại. Nếu iPhone 12 có sự thay đổi trong thiết kế từ góc cạnh bo tròn (Thiết kế được duy trì từ thời iPhone 6 đến iPhone 11 Pro Max) sang thiết kế vuông vắn (đã từng có mặt trên iPhone 4 đến iPhone 5S, SE).\n                            Thì trên điện thoại iPhone 13 vẫn được duy trì một thiết kế tương tự. Máy vẫn có phiên bản khung viền thép, một số phiên bản khung nhôm cùng mặt lưng kính. Tương tự năm ngoái, Apple cũng sẽ cho ra mắt 4 phiên bản là iPhone 13, 13 mini, 13 Pro và 13 Pro Max.",
    is_new: false,
    category_id: 1,
  },
  {
    id: 2,
    name: "Iphone 12",
    image: "http://apiforlearning.zendvn.com/images/products/ip12.png",
    price: 24990000,
    price_sale_off: 18800000,
    rating: 4,
    special: false,
    summary: "8GB/64GB",
    description:
      "Đánh giá mẫu điện thoại - Flagship được mong chờ năm 2021\n                            Cuối năm 2020, bộ 4 iPhone 12 đã được ra mắt với nhiều cái tiến. Sau đó, mọi sự quan tâm lại đổ dồn vào sản phẩm tiếp theo – iPhone 13. Vậy iP 13 sẽ có những gì, hãy tìm hiểu ngay sau đây.\n                            Thiết kế với nhiều đột phá\n                            Về kích thước, iPhone 13 sẽ có 4 phiên bản khác nhau và kích thước không đổi so với series iPhone 12 hiện tại. Nếu iPhone 12 có sự thay đổi trong thiết kế từ góc cạnh bo tròn (Thiết kế được duy trì từ thời iPhone 6 đến iPhone 11 Pro Max) sang thiết kế vuông vắn (đã từng có mặt trên iPhone 4 đến iPhone 5S, SE).\n                            Thì trên điện thoại iPhone 13 vẫn được duy trì một thiết kế tương tự. Máy vẫn có phiên bản khung viền thép, một số phiên bản khung nhôm cùng mặt lưng kính. Tương tự năm ngoái, Apple cũng sẽ cho ra mắt 4 phiên bản là iPhone 13, 13 mini, 13 Pro và 13 Pro Max.",
    is_new: false,
    category_id: 1,
  },
];

const SearchProduct = () => {
  const route = useRoute();
  //   const { search } = route.params;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState({});

  //   useEffect(() => {
  //     setLoading(true);
  //     dispatch(fetchProduct({ search })).then((res) => {
  //       if (!res.error) {
  //         setItems(res.payload.data);
  //         setLoading(false);
  //       }
  //     });
  //   }, [search]);

  //   if (loading) {
  //     return <Skeleton />;
  //   }

  //   const highlightName = (string) => {
  //     return (
  //       <HighlightText
  //         highlightStyle={{ backgroundColor: "yellow" }}
  //         searchWords={[search]}
  //         textToHighlight={string}
  //       />
  //     );
  //   };

  const showItems = ({ item }: { item: ProductType }) => {
    // let product = {
    //   ...item,
    //     name: highlightName(item.name),
    // };
    return <Product data={item} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.aside}>
        <Text>Tim kiem</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          // data={items}
          data={dataTest}
          renderItem={showItems}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          overScrollMode="never"
        />
      </View>
    </View>
  );
};

export default SearchProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor: Color.white,
  },
  aside: {
    backgroundColor: Color.white,
  },
});
