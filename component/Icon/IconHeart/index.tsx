import React, { useEffect } from "react";
import { Color } from "@/constants";
import { AntDesign } from "@expo/vector-icons";
import { IconType } from "../TypeIcon";

type IconNameType = "heart" | "hearto";

type IconHearType = IconType & {
  heart?: boolean;
};

const IconHeart = ({ heart, size = 26, color = Color.white }: IconHearType) => {
  let iconName: IconNameType = heart ? "heart" : "hearto";

  return (
    // <Ionicons name={iconName} size={26} color={Color.white} />
    <AntDesign name={iconName} size={size} color={color} />
  );
};

export default IconHeart;
