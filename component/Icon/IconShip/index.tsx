import React from "react";
import { Entypo } from "@expo/vector-icons";
import { IconType } from "../TypeIcon";

const IconShip = ({ size = 22, color = "#5a6ac7" }: IconType) => {
  return <Entypo name="info-with-circle" size={size} color={color} />;
};

export default IconShip;
