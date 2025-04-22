import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { IconType } from "../TypeIcon";

const IconCart = ({ size = 22, color = "#eb8a2f" }: IconType) => {
  return <FontAwesome5 name="shipping-fast" size={size} color={color} />;
};

export default IconCart;
