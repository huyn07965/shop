import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { SearchBar } from "react-native-elements";
import { useRoute } from "@react-navigation/native";
import { Color } from "@/constants";
import { NavigationProp } from "@/common";

const Search = ({ home }: { home?: boolean }) => {
  const route = useRoute();
  const navigation = useNavigation<NavigationProp>();
  const [search, setSearch] = useState(route.params?.search || "");

  const changePage = () => {
    // if (route.name === 'SearchScreen') {
    //     navigation.setParams({
    //         search
    //     })
    // } else {
    //     if (search) {
    //         navigation.navigate('SearchScreen', {
    //             search
    //         })
    //     }
    // }
  };

  return (
    <>
      {home ? (
        <View style={styles.container}>
          <SearchBar
            placeholder="Tìm kiếm..."
            onChangeText={(search: string) => setSearch(search)}
            value={search}
            containerStyle={styles.search}
            inputContainerStyle={styles.input}
            lightTheme
            onSubmitEditing={changePage}
          />
        </View>
      ) : (
        <View style={styles.container_cate}>
          <SearchBar
            placeholder="Tìm kiếm..."
            onChangeText={(search) => setSearch(search)}
            value={search}
            containerStyle={styles.search}
            inputContainerStyle={styles.input}
            lightTheme
            onSubmitEditing={changePage}
          />
        </View>
      )}
    </>
  );
};
export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.background,
    width: "100%",
    height: "100%",
    borderRadius: 11,
    borderWidth: 1,
    borderColor: Color.darkGray,
    elevation: 1,
  },
  container_cate: {
    backgroundColor: Color.white,
    width: "100%",
    height: "100%",
    borderRadius: 11,
    borderWidth: 1,
    borderColor: Color.main,
    elevation: 1,
  },
  search: {
    width: "100%",
    height: "100%",
    backgroundColor: Color.background,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "100%",
    height: "100%",
    backgroundColor: Color.background,
    marginBottom: 10,
  },
});
