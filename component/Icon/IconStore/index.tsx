import React from "react";
import { Entypo } from "@expo/vector-icons";
import { IconType } from "../TypeIcon";

const IconStore = ({ size = 24, color = "#e61030" }: IconType) => {
  return <Entypo name="shop" size={size} color={color} />;
};

export default IconStore;
