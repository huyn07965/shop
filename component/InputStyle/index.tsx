import React, { ReactNode, useState } from "react";
import { TextInput, Text, View, StyleSheet } from "react-native";
//import IconStyle from '../icon'
import { Color } from "@/constants";
import { Entypo } from "@expo/vector-icons";

type InputStyleProps = {
  name: string;
  style?: {};
  editable?: boolean;
  value: string;
  onChange: (value: string) => void;
};

const InputStyle = ({
  name,
  style,
  editable = true,
  value,
  onChange,
}: InputStyleProps) => {
  const [showPass, setShowPass] = useState(false);

  let obj = {
    name: name,
    placeholder: `${name}...`,
    autoCapitalize: "none",
    style: { ...style },
    editable: editable,
    secureTextEntry: showPass,
    icon: <></>,
    multiline: false,
    numberOfLines: 1,
  };

  switch (name) {
    case "ConfirmPassword":
    case "Password":
      obj.secureTextEntry = !showPass;
      obj.icon = (
        <Entypo
          name={showPass ? "eye" : "eye-with-line"}
          size={24}
          color="black"
        />
        // <IconStyle
        //   name={showPass ? "eye-slash" : "eye"}
        //   onPress={() => setShowPass(!showPass)}
        // />
      );
      break;
    case "Địa chỉ":
      obj.multiline = true;
      obj.numberOfLines = 4;
      break;
    default:
      break;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textInputLabel}>{obj.name}</Text>
      <TextInput
        multiline={obj.multiline}
        numberOfLines={obj.numberOfLines}
        placeholder={obj.placeholder}
        autoCapitalize={obj.autoCapitalize}
        style={[styles.textInput, obj.style]}
        editable={obj.editable}
        secureTextEntry={obj.secureTextEntry}
        value={value}
        onChangeText={(value: string) => onChange(value)}
      />
      <View style={styles.iconShowPass}>{obj.icon}</View>
    </View>
  );
};

export default InputStyle;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 5,
  },
  textInputLabel: {
    color: Color.main,
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 2,
  },
  textInput: {
    width: "100%",
    marginTop: 10,
    height: 50,
    borderRadius: 10,
    paddingLeft: 15,
    elevation: 20,
    backgroundColor: Color.white,
  },
  iconShowPass: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
});
