import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { IconType } from "../TypeIcon";

const IconUserLogout = ({ size = 24, color = "#45a8de" }: IconType) => {
  return <SimpleLineIcons name="user-unfollow" size={size} color={color} />;
};

export default IconUserLogout;
