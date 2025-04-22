import React from "react";
import { Color } from "@/constants";
import { FontAwesome5 } from "@expo/vector-icons";
import { IconType } from "../TypeIcon";

const IconCoin = ({ size = 30, color = Color.main }: IconType) => {
  return <FontAwesome5 name="coins" size={size} color={color} />;
};

export default IconCoin;
