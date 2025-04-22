import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  RefreshControl,
  StyleSheet,
  Image,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch, useSelector } from "react-redux";
// import { fetchAsyncGetMe, fetchAsyncUpdate } from '../../store/slices/user'
import { LinearGradient } from "expo-linear-gradient";
import { Color } from "@/constants";

import { CheckLogin, InputStyle } from "@/component";
import { RootState } from "@/store";

const wait = (timeout: number | undefined) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const InfoShip = () => {
  const dispatch = useDispatch();

  const isLogin = useSelector((state: RootState) => state.Auth.isLogin);
  const [loading, setLoading] = useState(true);
  const [objInfo, setObjInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [isUpdate, setisUpdate] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  // useEffect(() => {
  //     setLoading(true)
  //     dispatch(fetchAsyncGetMe())
  //         .then((res) => {
  //             if (!res.error) {
  //                 setLoading(false)
  //                 setObjInfo({
  //                     ...objInfo,
  //                     name: res.payload.name,
  //                     email: res.payload.email,
  //                     phone: res.payload.phone,
  //                     address: res.payload.address
  //                 })
  //             } else {
  //                 setLoading(false)
  //             }
  //         });
  // }, [isUpdate]);

  // if (loading) {
  //     return <Skeleton layout={'layoutForm'} />
  // }

  const handleUpdate = () => {
    // dispatch(fetchAsyncUpdate(objInfo))
    //     .then((res) => {
    //         if (!res.error) {
    //             setisUpdate(!isUpdate)
    //         }
    //     });
  };
  return (
    <>
      {isLogin ? (
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          style={styles.container}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={styles.formInput}>
            <InputStyle
              name={"Họ tên"}
              value={objInfo.name}
              onChange={(value) => setObjInfo({ ...objInfo, name: value })}
            />
          </View>
          <View style={styles.formInput}>
            <InputStyle
              name={"Email"}
              value={objInfo.email}
              onChange={(value) => setObjInfo({ ...objInfo, email: value })}
            />
          </View>
          <View style={styles.formInput}>
            <InputStyle
              name={"Số điện thoại"}
              value={objInfo.phone}
              onChange={(value) => setObjInfo({ ...objInfo, phone: value })}
            />
          </View>
          <View style={styles.formInput}>
            <InputStyle
              name={"Địa chỉ"}
              value={objInfo.address}
              onChange={(value) => setObjInfo({ ...objInfo, address: value })}
            />
          </View>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#0ca89e", "#0cb0a5", "#80e4c4"]}
            style={styles.handle_update}
          >
            <TouchableOpacity onPress={handleUpdate} style={styles.update}>
              <Text style={styles.text_update}>Cập nhật thông tin</Text>
            </TouchableOpacity>
          </LinearGradient>
        </KeyboardAwareScrollView>
      ) : (
        <CheckLogin />
        // <Text>CheckLogin</Text>
      )}
    </>
  );
};

export default InfoShip;

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.white,
  },
  boxImg: {
    width: "100%",
    height: "75%",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 20,
    backgroundColor: Color.white,
  },
  formInput: {
    width: "100%",
    marginBottom: 20,
  },
  handle_update: {
    height: 50,
    width: "100%",
    marginTop: 20,
  },
  update: {
    alignSelf: "center",
    height: "100%",
    width: "100%",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  text_update: {
    color: Color.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});
