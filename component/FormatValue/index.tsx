import { Platform } from "react-native";

export const FormatPrice = ({ yourNumber }: { yourNumber: number }) => {
  yourNumber = yourNumber;
  if (Platform.OS === "ios") {
    return yourNumber.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
  } else {
    return yourNumber?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " đ";
  }
};

type SalePercentProps = {
  price: number;
  priceSale: number;
};
export const SalePercent = ({ price, priceSale }: SalePercentProps) => {
  let result = 100 - Math.floor((priceSale * 100) / price);
  return result + " %";
};
