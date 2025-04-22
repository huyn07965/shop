import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { IconType } from "../TypeIcon";

const IconLogout = ({ size = 24, color = "#0ca89e" }: IconType) => {
  return <MaterialCommunityIcons name="logout" size={size} color={color} />;
};

export default IconLogout;
