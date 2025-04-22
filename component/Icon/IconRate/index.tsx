import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { IconType } from "../TypeIcon";
import { Color } from "@/constants";

const IconRate = ({ size = 30, color = Color.main }: IconType) => {
  return <Ionicons name="star-half-outline" size={size} color={color} />;
};

export default IconRate;
