import { SimpleLineIcons } from "@expo/vector-icons";
import React from "react";
import { IconType } from "../TypeIcon";

const IconUserLogin = ({ size = 24, color = "#45a8de" }: IconType) => {
  return <SimpleLineIcons name="user-following" size={size} color={color} />;
};

export default IconUserLogin;
