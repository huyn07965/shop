import React from "react";
import { Color } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import { IconType } from "../TypeIcon";

const IconChat = ({ size = 33, color = Color.main }: IconType) => {
  return <Ionicons name="chatbox-ellipses-outline" size={size} color={color} />;
};

export default IconChat;
