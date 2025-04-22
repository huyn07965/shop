import React, { useEffect, useState } from "react";

import { Color, MESSAGE } from "@/constants";
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";
import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { NavigationProp } from "@/common";
import { fetchLogin } from "@/store/slices/auth";
import { AppDispatch, RootState } from "@/store";
import { ToastNotification } from "@/component";

const SignIn = () => {
  const [showPass, setShowPass] = useState<boolean>(true);
  const dispatch = useDispatch<AppDispatch>();
  const isLogin = useSelector((state: RootState) => state.Auth.isLogin);
  const navigation = useNavigation<NavigationProp>();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const goBack = () => {
    navigation.goBack();
  };

  const handleLogin = async () => {
    dispatch(
      fetchLogin({
        // data: data,
        data: {
          email: "huyn07965@gmail.com",
          password: "12345",
        },
      })
    ).then((res: any) => {
      if (!res.error) {
        // navigation.navigate('Home')
        ToastNotification(MESSAGE.loginSuccess);
        navigation.goBack();
      } else {
        // ShowToast(MESSAGE.loginFail)
        console.log("res.error", res.error);
      }
    });
  };

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const noComplete = () => {
    // ToastNotification(MESSAGE.functionFail);
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxImg}>
        <Image
          style={styles.img}
          source={require("../../assets/app/welcome.png")}
        />
      </View>
      <View style={styles.title}>
        <Text style={styles.title_text}>TO HSHOP</Text>
        <Text style={styles.description}>Nhập thông tin để đăng nhập</Text>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.content}>
          <View style={styles.input}>
            <MaterialIcons style={styles.icon_input} name="email" size={22} />
            <TextInput
              placeholder="Email..."
              value={data.email}
              onChangeText={(val) => setData({ ...data, email: val })}
            />
          </View>
          <View style={styles.input}>
            <TouchableOpacity onPress={handleShowPass}>
              <Feather
                style={styles.icon_input}
                name={!showPass ? "unlock" : "lock"}
                size={22}
              />
            </TouchableOpacity>
            <TextInput
              placeholder="Mật khẩu..."
              secureTextEntry={showPass}
              value={data.password}
              onChangeText={(val) => setData({ ...data, password: val })}
            />
          </View>
          <TouchableOpacity style={styles.fogot} onPress={noComplete}>
            <Text style={styles.fogot_text}>Quên mật khẩu?</Text>
          </TouchableOpacity>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#0cb0a5", "#0ca89e", "#80e4c4"]}
            style={styles.button}
          >
            <TouchableHighlight
              activeOpacity={0.5}
              underlayColor={Color.main}
              onPress={handleLogin}
              style={styles.button_login}
            >
              <Text style={styles.buttonText}>Đăng nhập</Text>
            </TouchableHighlight>
          </LinearGradient>

          <View style={styles.signUp}>
            {/* <Hyperlink
                    linkDefault={true}
                    linkStyle={styles.signUp_text}
                    linkText={url => url === 'http://apiforlearning.zendvn.com/users/create' ? 'Đăng kí' : url}>
                    <Text style={styles.signUp_title}>Nếu bạn chưa có tài khoản hãy http://apiforlearning.zendvn.com/users/create </Text>
                </Hyperlink> */}
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View>
        <TouchableOpacity onPress={goBack} style={styles.back}>
          <MaterialCommunityIcons
            style={styles.icon_back}
            name="chevron-double-left"
            size={24}
            color="#0ca89e"
          />
          <Text style={styles.back_text}>Quay lại</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  boxImg: {
    width: "100%",
    height: "30%",
    marginTop: 15,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  title: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title_text: {
    fontSize: 26,
    fontWeight: "bold",
    color: Color.main,
  },
  description: {
    fontSize: 16,
    color: Color.darkGray,
    marginTop: 10,
  },
  content: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 15,
  },
  input: {
    elevation: 2,
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor: Color.white,
    borderRadius: 11,
    marginBottom: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  fogot: {
    width: "100%",
    height: "10%",
    alignItems: "flex-end",
    justifyContent: "center",
    marginBottom: 20,
  },
  icon_input: {
    color: Color.main,
    marginEnd: 15,
  },
  fogot_text: {
    fontSize: 16,
    color: Color.main,
  },
  button: {
    width: "100%",
    height: 50,
    borderRadius: 3,
  },
  button_login: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: Color.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  signUp: {
    width: "100%",
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    flexDirection: "row",
  },
  signUp_title: {
    fontSize: 16,
    color: Color.darkGray,
  },
  signUp_text: {
    fontSize: 16,
    color: Color.main,
  },
  back: {
    width: "100%",
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: -50,
    left: 30,
  },
  icon_back: {
    color: Color.main,
    marginLeft: -20,
  },
  back_text: {
    fontSize: 16,
    color: Color.main,
  },
});
