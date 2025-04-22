import React, { ReactNode, useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  RefreshControl,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// import { useDispatch, useSelector } from 'react-redux'
// import { Logout } from '../../store/slices/auth'
// import { fetchAsyncGetMe } from '../../store/slices/user'
// import ShowToast from '../../help/showToast'
import { Color, Images, MESSAGE } from "@/constants";
import {
  IconCart,
  IconChat,
  IconCoin,
  IconCrown,
  IconDarkMode,
  IconHelp,
  IconLogin,
  IconLogout,
  IconNext,
  IconPolicyInsurance,
  IconPolicyShopping,
  IconRate,
  IconReport,
  IconShip,
  IconStore,
  IconUserLogin,
  IconUserLogout,
} from "@/component/Icon";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationProp } from "@/common";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { Logout } from "@/store/slices/auth";

const wait = (timeout: number | undefined) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

type FunctionType = {
  icon: ReactNode;
  title: string;
  onPress: () => void;
};

const Profile = () => {
  const isLogin = useSelector((state: RootState) => state.Auth.isLogin);
  // const user = useSelector(state => state.User.info)
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch<AppDispatch>();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  // useEffect(() => {
  //     dispatch(fetchAsyncGetMe())
  // }, [])

  const handleLogout = () => {
    dispatch(Logout({}));
    // ShowToast(MESSAGE.logoutSuccess)
  };
  const openLogin = () => {
    navigation.navigate("SignInScreen");
  };
  const openInfoShip = () => {
    // navigation.navigate('InfoShipScreen')
  };
  const openInfoCart = () => {
    navigation.navigate("InfoOderScreen");
  };

  const noComplete = () => {
    // ShowToast(MESSAGE.functionFail)
  };

  const RowFunctionArray: FunctionType[] = [
    {
      icon: <IconCoin />,
      title: "Xu",
      onPress: () => noComplete,
    },
    {
      icon: <IconRate />,
      title: "Đánh giá",
      onPress: () => noComplete,
    },
    {
      icon: <IconReport />,
      title: "Nhắn tin",
      onPress: () => noComplete,
    },
    {
      icon: <IconCoin />,
      title: "Báo Cáo",
      onPress: () => noComplete,
    },
  ];
  const ColumnTopFunctionArray: FunctionType[] = [
    {
      icon: <IconShip />,
      title: "Thông tin giao hàng",
      onPress: openInfoShip,
    },
    {
      icon: <IconCart />,
      title: "Thông tin đơn hàng",
      onPress: openInfoCart,
    },
  ];
  const ColumnCenterFunctionArray: FunctionType[] = [
    {
      icon: <IconPolicyShopping />,
      title: "Chính sách mua hàng",
      onPress: () => noComplete,
    },
    {
      icon: <IconPolicyInsurance />,
      title: "Chính sách bảo hành",
      onPress: () => noComplete,
    },
    {
      icon: <IconStore />,
      title: "Về chúng tôi",
      onPress: () => noComplete,
    },
  ];
  const ColumnBottomFunctionArray: FunctionType[] = [
    {
      icon: <IconDarkMode />,
      title: "Chế độ tối",
      onPress: () => noComplete,
    },
    {
      icon: <IconHelp />,
      title: "Trung tâm trợ giúp",
      onPress: () => noComplete,
    },
  ];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      overScrollMode="never"
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container_more}>
        <View style={styles.header}>
          <View style={styles.info}>
            <View style={styles.top}>
              {!isLogin ? (
                <View style={styles.text}>
                  <Text style={styles.name}>Welcome To Hshop!</Text>
                  <Text style={styles.description}>
                    Hãy đăng nhập để mua sắm nào?
                  </Text>
                </View>
              ) : (
                <View style={styles.text}>
                  <Text style={styles.name}>
                    {/* {user.name} */}
                    Huy
                  </Text>
                  <View style={styles.user}>
                    <IconCrown />
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      colors={["#80e4c4", "#0cb0a5", "#0ca89e"]}
                      style={styles.user_more}
                    >
                      <Text style={styles.description_user}>Khách hàng </Text>
                      <MaterialIcons
                        name="navigate-next"
                        size={24}
                        color="#e6eaeb"
                      />
                    </LinearGradient>
                  </View>
                </View>
              )}
              {isLogin ? (
                <Image
                  source={require("../assets/app/user.png")}
                  style={styles.image}
                ></Image>
              ) : (
                <Image
                  source={require("../assets/app/user_out.png")}
                  style={styles.image}
                ></Image>
              )}
            </View>
            <View style={styles.bottom}>
              {RowFunctionArray.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.endow}
                  onPress={item.onPress}
                >
                  <View style={styles.icon}>{item.icon}</View>
                  <Text style={styles.function}>{item.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.content}>
            <View style={styles.body_top}>
              {ColumnTopFunctionArray.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={item.onPress}
                  style={styles.directional}
                >
                  <View style={styles.directional_more}>
                    <View style={styles.icon_bottom}>{item.icon}</View>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                  <IconNext />
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.body_bottom}>
              {ColumnCenterFunctionArray.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.directional}
                  onPress={item.onPress}
                >
                  <View style={styles.directional_more}>
                    <View style={styles.icon_bottom}>{item.icon}</View>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                  <IconNext />
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.body_bottom}>
              {ColumnBottomFunctionArray.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={item.onPress}
                  style={styles.directional}
                >
                  <View style={styles.directional_more}>
                    <View style={styles.icon_bottom}>{item.icon}</View>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                  <IconNext />
                </TouchableOpacity>
              ))}

              {!isLogin ? (
                <>
                  <TouchableOpacity
                    style={styles.directional}
                    onPress={openLogin}
                  >
                    <View style={styles.directional_more}>
                      <View style={styles.icon_bottom}>
                        <IconUserLogout />
                      </View>
                      <Text style={styles.title}>Đăng nhập</Text>
                    </View>
                    <IconLogin />
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <TouchableOpacity
                    style={styles.directional}
                    onPress={handleLogout}
                  >
                    <View style={styles.directional_more}>
                      <View style={styles.icon_bottom}>
                        <IconUserLogin />
                      </View>
                      <Text style={styles.title}>Đăng xuất</Text>
                    </View>
                    <IconLogout />
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    marginBottom: 100,
  },
  container_more: {
    width: "100%",
    height: "100%",
    marginBottom: 20,
  },
  header: {
    width: "100%",
    height: "30%",
    alignItems: "center",
  },
  info: {
    width: "100%",
    height: "100%",
    alignItems: "flex-start",
    backgroundColor: Color.white,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: Color.background,
  },
  top: {
    height: "60%",
    flexDirection: "row",
  },
  text: {
    height: "100%",
    width: "80%",
    paddingHorizontal: 5,
    marginTop: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 10,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
  },
  user_more: {
    width: 125,
    height: 24,
    backgroundColor: Color.main,
    borderRadius: 15,
    alignItems: "center",
    marginLeft: -20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  description_user: {
    color: Color.white,
    marginLeft: 23,
    fontWeight: "bold",
  },
  description: {
    color: Color.black,
    marginLeft: 23,
    fontWeight: "bold",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 300,
  },
  bottom: {
    width: "100%",
    height: "40%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  endow: {
    width: "20%",
    height: "80%",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  icon: {
    height: 40,
    marginTop: 5,
  },
  function: {
    marginTop: 10,
    fontSize: 16,
    color: Color.darkGray,
  },
  body: {
    width: "100%",
    height: "70%",
    backgroundColor: Color.white,
    elevation: 1,
    marginBottom: 20,
    alignSelf: "center",
  },
  content: {
    width: "100%",
    height: "100%",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  body_top: {
    width: "112%",
    height: "24%",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: Color.background,
    alignSelf: "center",
  },
  body_bottom: {
    width: "112%",
    height: "38%",
    borderBottomWidth: 1,
    borderColor: Color.background,
    justifyContent: "center",
    alignSelf: "center",
  },
  directional: {
    width: "100%",
    height: 55,
    flexDirection: "row",
    paddingHorizontal: 25,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  directional_more: {
    flexDirection: "row",
  },
  icon_bottom: {
    width: 30,
    alignItems: "center",
  },
  title: {
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 16,
    color: "#42524a",
  },
});
