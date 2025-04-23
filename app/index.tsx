import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Image,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Color } from "@/constants";
// import Carousel from "react-native-snap-carousel";
import { Category, CategoryList, Slide } from "@/component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosClient from "@/services";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const wait = (timeout: number | undefined) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export type categoryData = {
  id: number;
  name: string;
  image: string;
};

const index = () => {
  const [data, setData] = useState<categoryData[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const token = useSelector((state: RootState) => state.Auth.token);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    const setHeader = async () => {
      try {
        let token = await AsyncStorage.getItem("access_token");
        axiosClient.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${token}`;
      } catch (e) {
        console.log(e);
      }
    };
    setHeader();
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axiosClient.get(
          "http://apiforlearning.zendvn.com/api/mobile/categories",
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
        setData(result.data);
      } catch (error: any) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      overScrollMode="never"
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        <View style={styles.aside}>
          <View>
            <CategoryList items={data} />
            <View style={styles.slider}>
              <Slide />
            </View>

            <View style={styles.category_more}>
              <Category nameCategory={"Sản Phẩm Nổi Bật"} />
              <Category nameCategory={"Sản Phẩm Mới"} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  slide: {
    backgroundColor: Color.white,
    elevation: 3,
    borderRadius: 8,
    width: "100%",
    height: "95%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  aside: {
    backgroundColor: Color.white,
  },
  category_more: {
    backgroundColor: Color.white,
    marginTop: 5,
    justifyContent: "center",
  },
  slider: {
    marginTop: -10,
    height: 250,
  },
});
