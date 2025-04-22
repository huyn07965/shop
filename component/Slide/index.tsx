import React, { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Color } from "@/constants";
import axios from "axios";
import Carousel, { Pagination } from "react-native-snap-carousel";
import axiosClient from "@/services";

export type SlideType = {
  id: number;
  name: string;
  image: string;
};

const Slide = () => {
  const [entries, setEntries] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [data, setData] = useState<SlideType[]>([]);

  // const [loading, setLoading] = useState(true);

  const convertHttpsToHttp = (data: SlideType[]) => {
    return data?.map((item) => ({
      ...item,
      image: item.image.replace(/^https:/, "http:"),
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axiosClient.get(
          "http://apiforlearning.zendvn.com/api/mobile/sliders",
          {
            headers: {
              Accept: "application/json",
            },
          }
        );

        setData(convertHttpsToHttp(result.data));
        setEntries(result.data.length);
      } catch (error: any) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const renderItems = ({ item }: { item: SlideType }) => {
    return (
      <View style={style.slider}>
        <Image style={style.img} source={{ uri: item.image }}></Image>
      </View>
    );
  };
  const pagination = () => {
    return (
      <Pagination
        dotsLength={entries}
        activeDotIndex={activeSlide}
        dotStyle={style.dotStyle}
        inactiveDotOpacity={0.2}
        inactiveDotScale={0.8}
      />
    );
  };

  // if (loading) {
  //   return <Skeleton layout={"layoutSlider"} />;
  // }

  return (
    <View style={style.containerSlide}>
      <Carousel
        data={data}
        renderItem={renderItems}
        activeSlideAlignment="center"
        sliderWidth={380}
        itemWidth={380}
        onSnapToItem={(index: number) => setActiveSlide(index)}
      />
      <View style={style.pagination}>{pagination()}</View>
    </View>
  );
};
export default Slide;

const style = StyleSheet.create({
  containerSlide: {
    paddingVertical: 8,
    width: "100%",
    height: 220,
    backgroundColor: Color.white,
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  input: {
    backgroundColor: Color.background,
  },
  slider: {
    backgroundColor: Color.white,
    elevation: 3,
    borderRadius: 8,
    width: "100%",
    height: "95%",
  },
  pagination: {
    position: "absolute",
    top: "100%",
    width: "100%",
    alignItems: "center",
  },
  dotStyle: {
    width: 40,
    height: 3,
    marginHorizontal: -7,
    marginTop: 5,
    backgroundColor: Color.black,
  },
});
