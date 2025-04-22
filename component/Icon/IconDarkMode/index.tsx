import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { IconType } from "../TypeIcon";

const IconDarkMode = ({ size = 26, color = "#6510e6" }: IconType) => {
  return <MaterialIcons name="nights-stay" size={size} color={color} />;
};

export default IconDarkMode;
