import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Color } from "@/constants";
import { ButtonFilter, FormatPrice } from "@/component";
import { AppDispatch, RootState } from "@/store";
import { NavigationProp } from "@/common";
import RangeSlider from "react-native-range-slider-expo";
import { Filter } from "@/store/slices/filter";

const FilterScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const items = useSelector((state: RootState) => state.Filter.data);
  const dispatch = useDispatch<AppDispatch>();
  const [fromValue, setFromValue] = useState(items.fromValue);
  const [toValue, setToValue] = useState(items.toValue);
  const [active, setActive] = useState(items.active);

  const activeButton = (title: string) => {
    setActive(title);
  };

  const applyFilter = () => {
    dispatch(Filter({ active, fromValue, toValue }));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.filter_1}>
          <Text style={styles.title_filter}>Lọc theo giá</Text>
          <View>
            <RangeSlider
              min={0}
              max={50000000}
              fromValueOnChange={(value) => setFromValue(value)}
              toValueOnChange={(value) => setToValue(value)}
              initialFromValue={fromValue}
              initialToValue={toValue}
              fromKnobColor="#0ca89e"
              toKnobColor="#0ca89e"
              valueLabelsBackgroundColor="#80e4c4"
              inRangeBarColor="#7e8580"
            />
          </View>
          <View style={styles.result_filter}>
            <Text style={styles.text}>Giá từ : </Text>
            <Text style={styles.text_price}>
              {FormatPrice({ yourNumber: fromValue })}
            </Text>
            <Text style={styles.text}> đến </Text>
            <Text style={styles.text_price}>
              {" "}
              {FormatPrice({ yourNumber: toValue })}
            </Text>
          </View>
        </View>
        <View style={styles.filter_2}>
          <Text style={styles.title_filter}>Lọc theo thứ tự</Text>
          <View style={styles.button_1}>
            <ButtonFilter
              active={active}
              onPress={activeButton}
              title={"Tăng dần"}
            />
            <ButtonFilter
              active={active}
              onPress={activeButton}
              title={"Giảm dần"}
            />
          </View>
          <View style={styles.button_1}>
            <ButtonFilter
              active={active}
              onPress={activeButton}
              title={"Mới nhất"}
            />
            <ButtonFilter
              active={active}
              onPress={activeButton}
              title={"Cũ nhất"}
            />
          </View>
        </View>
        <View>
          <Text style={styles.title_filter}>Lọc theo tình trạng</Text>
          <View style={styles.button_3}>
            <ButtonFilter
              active={active}
              onPress={activeButton}
              title={"Đang giảm giá"}
            />
          </View>
        </View>
      </View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#0ca89e", "#0cb0a5", "#80e4c4"]}
        style={styles.buttonFilter}
      >
        <TouchableOpacity onPress={applyFilter} style={styles.apply}>
          <Text style={styles.apply_text}>Áp dụng</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  body: {
    paddingHorizontal: 20,
  },
  result_filter: {
    flexDirection: "row",
    marginTop: 100,
    marginLeft: 15,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
  },
  text_price: {
    color: Color.red,
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
  },
  filter_1: {
    paddingVertical: 20,
  },
  filter_2: {
    paddingVertical: 20,
  },
  filter_3: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  button_1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  button_3: {
    marginLeft: 20,
  },
  title_filter: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 20,
    marginLeft: 15,
  },
  buttonFilter: {
    width: "80%",
    height: 50,
    position: "absolute",
    bottom: 15,
    borderRadius: 11,
    alignSelf: "center",
  },
  apply: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  apply_text: {
    color: Color.white,
    fontWeight: "bold",
    fontSize: 18,
  },
});
