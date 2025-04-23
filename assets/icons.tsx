import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";

export const icons = {
  index: (props: any) => <AntDesign name="home" size={26} {...props} />,
  product: (props: any) => (
    <Feather name="smartphone" size={26} color="black" {...props} />
  ),
  favorite: (props: any) => (
    <MaterialIcons name="favorite" size={26} {...props} />
  ),
  profile: (props: any) => <AntDesign name="user" size={26} {...props} />,
};
