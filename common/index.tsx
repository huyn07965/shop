import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Home?: undefined;
  Profile?: { productId: string };
  ProductScreen?: { productId: number };
  CartScreen?: undefined;
  InfoOderScreen?: undefined;
  SearchProductScreen?: undefined;
  SignInScreen?: undefined;
  ProductCategoryScreen?: { id?: number; name?: string };
  FilterScreen?: undefined;
};

export type NavigationProp = StackNavigationProp<RootStackParamList>;

export type CategoryType = {
  id: number;
  name: string;
  image: string;
  price: number;
  price_sale_off: number;
  rating: number;
  special: boolean;
  summary: string;
  description: string;
  is_new: boolean;
  category_id: number;
};

export type ProductType = {
  id: number;
  name: string;
  image: string;
  price: number;
  price_sale_off: number;
  rating: number;
  special: boolean;
  summary: string;
  description: string;
  is_new: boolean;
  category_id: number;
};

export type ListItemOderType = {
  id: number;
  code: string;
  user_id: string;
  amount: string;
  created_at: string;
  updated_at: string;
  order_items: ItemOderType[];
};

export type ItemOderType = {
  id: 148;
  order_id: string;
  product_id: string;
  quantity: string;
  amount: string;
  created_at: string;
  updated_at: string;
  price: string;
};
