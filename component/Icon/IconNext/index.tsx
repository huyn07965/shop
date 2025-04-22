import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { IconType } from "../TypeIcon";

const IconNext = ({ size = 28, color = "#b2b8b4" }: IconType) => {
  return <MaterialIcons name="navigate-next" size={size} color={color} />;
};

export default IconNext;
