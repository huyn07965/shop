import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { Color, MESSAGE } from "@/constants";
import { CheckCart, ToastNotification } from "@/component";
import { fetchData } from "@/store/slices/getData";
import { AppDispatch, RootState } from "@/store";

const InfoOder = () => {
  const [code, setCode] = useState("FncAZ4WwdTOnnZLo");
  const [showCheckCart, setShowCheckCart] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const itemOder = useSelector((state: RootState) => state.getData.data);
  const [items, setItems] = useState([]);

  const handleClick = () => {
    dispatch(fetchData({ path: `orders/${code}` }))
      .then(() => {
        setShowCheckCart(true);
      })
      .catch(() => {
        ToastNotification(MESSAGE.checkCartFail);
        setCode("");
      });

    // setShowCheckCart(false)
    // dispatch(fetchAsyncListSingle(code))
    //     .then(res => {
    //         if (!res.error) {
    //             setShowCheckCart(true)
    //             setItems(res.payload?.order_items)
    //         } else {
    //             ToastNotification(MESSAGE.checkCartFail)
    //             setCode('')
    //         }
    //     })
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.test}>Nhập mã đơn hàng</Text>
        <View>
          <TextInput
            placeholder="Nhập mã đơn hàng của bạn"
            value={code}
            onChangeText={(text) => setCode(text)}
            style={[styles.textInput]}
          />
        </View>
        <View>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#0ca89e", "#0cb0a5", "#80e4c4"]}
            style={styles.buttonCheck}
          >
            <TouchableOpacity style={styles.boxButton} onPress={handleClick}>
              <Text style={styles.textColor}>Kiểm tra</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
      {showCheckCart && (
        <View style={styles.checkCart}>
          <CheckCart items={itemOder} />
        </View>
      )}
    </View>
  );
};

export default InfoOder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 80,
    paddingVertical: 10,
    backgroundColor: Color.white,
  },
  top: {
    width: "100%",
    height: "30%",
    paddingHorizontal: 25,
  },
  test: {
    alignSelf: "center",
    fontSize: 24,
    color: Color.main,
    fontWeight: "bold",
    paddingVertical: 10,
  },

  textInput: {
    width: "100%",
    marginTop: 10,
    height: 50,
    borderRadius: 4,
    paddingLeft: 15,
    elevation: 2,
    backgroundColor: Color.background,
  },
  buttonCheck: {
    width: "100%",
    height: 50,
    marginTop: 20,
    borderRadius: 11,
  },
  boxButton: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11,
  },
  textColor: {
    color: Color.white,
    fontWeight: "bold",
    fontSize: 18,
  },
  checkCart: {
    width: "100%",
    height: "70%",
    position: "absolute",
    top: 225,
    marginBottom: 10,
  },
});
