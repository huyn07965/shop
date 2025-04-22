import React from "react";
import { Feather } from "@expo/vector-icons";
import { IconType } from "../TypeIcon";

const IconHelp = ({ size = 24, color = "#10e650" }: IconType) => {
  return <Feather name="help-circle" size={size} color={color} />;
};

export default IconHelp;
