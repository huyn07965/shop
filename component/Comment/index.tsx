import React, { useEffect } from "react";
import { View, Text, FlatList, Image, LogBox, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Color } from "@/constants";

type CommentProps = {
  name: string;
  avatar: string;
  data: string;
};

const COMMENT: CommentProps[] = [
  {
    name: "Nguyễn Gia Huy",
    avatar: "../../assets/app/user.png",
    data: "Sản phẩm dùng tốt ",
  },
  {
    name: "Võ Trung Trực",
    avatar: "../../assets/app/user.png",
    data: "Giao hàng rất nhanh, đáng được 5 sao ",
  },
];

const Comment = () => {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  const showItems = ({ item }: { item: CommentProps }) => {
    return (
      <View style={styles.conment}>
        <View style={styles.conment_avatar}>
          <Image
            style={styles.conment_avatar_img}
            source={require("../../assets/app/user.png")}
          />
        </View>
        <View style={styles.content}>
          <Text numberOfLines={1} style={styles.name}>
            {item.name}
          </Text>
          <Text numberOfLines={3} style={styles.text_more}>
            {item.data}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Nhận xét sản phẩm</Text>
        <FlatList
          data={COMMENT}
          renderItem={showItems}
          keyExtractor={(item) => item?.name?.toString()}
          overScrollMode="never"
        />
        <View style={styles.more}>
          <Text style={styles.text_more}>Xem thêm</Text>
          <MaterialIcons name="navigate-next" size={24} color="#f25235" />
          <MaterialIcons
            style={styles.icon}
            name="navigate-next"
            size={24}
            color="#f25235"
          />
        </View>
      </View>
    </>
  );
};

export default Comment;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: Color.white,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  conment: {
    width: "100%",
    height: 120,
    borderTopWidth: 1,
    borderTopColor: Color.background,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  conment_avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 30,
  },
  conment_avatar_img: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  content: {
    justifyContent: "space-around",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: -10,
    color: Color.main,
  },
  more: {
    width: "100%",
    height: 30,
    backgroundColor: Color.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  text_more: {
    fontSize: 16,
    color: Color.orange,
  },
  icon: {
    marginLeft: -15,
  },
});
