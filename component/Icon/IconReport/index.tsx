import React from "react";
import { Color } from "@/constants";
import { Octicons } from "@expo/vector-icons";
import { IconType } from "../TypeIcon";

const IconReport = ({ size = 27, color = Color.main }: IconType) => {
  return <Octicons name="report" size={size} color={color} />;
};

export default IconReport;
