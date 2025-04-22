import React from "react";
import SkeletonContent from "@03balogun/react-native-skeleton-content";
import { StyleSheet } from "react-native";

type LayoutType = {
  key: string;
  width?: number;
  height?: number;
  marginTop?: number;
  marginRight?: number;
  marginHorizontal?: number;
  position?: "absolute" | "relative";
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  borderRadius?: number;
  zIndex?: number;
};

let layoutSlider = [
  { key: "1", width: 380, height: 200, marginTop: -40, marginHorizontal: 5 },
];

let layoutForm = [
  { key: "2", width: 320, height: 50, marginTop: 10, borderRadius: 11 },
  { key: "3", width: 320, height: 50, marginTop: 40, borderRadius: 11 },
  { key: "4", width: 320, height: 50, marginTop: 40, borderRadius: 11 },
  { key: "5", width: 320, height: 50, marginTop: 40, borderRadius: 11 },
  { key: "6", width: 320, height: 50, marginTop: 50, borderRadius: 4 },
];

let layoutProduct = [
  { key: "2", width: 180, height: 230, marginTop: -30 },
  { key: "3", width: 150, height: 20, marginTop: 25, marginRight: 30 },
  { key: "4", width: 140, height: 20, marginTop: 25, marginRight: 40 },
  { key: "5", width: 120, height: 20, marginTop: 25, marginRight: 60 },
  {
    key: "6",
    width: 35,
    height: 35,
    position: "absolute",
    right: 10,
    bottom: 45,
    borderRadius: 11,
  },
];

let layoutProductHori = [
  { key: "2", width: 170, height: 230, marginRight: 10 },
  { key: "3", width: 150, height: 20, marginTop: 25, marginRight: 30 },
  { key: "4", width: 140, height: 20, marginTop: 25, marginRight: 40 },
  { key: "5", width: 120, height: 20, marginTop: 25, marginRight: 60 },
  {
    key: "6",
    width: 30,
    height: 30,
    marginTop: 30,
    zIndex: 2,
    // marginTop: -29,
    marginRight: -120,
    borderRadius: 11,
  },
];
let layoutProductHome = [
  {
    key: "1",
    width: 220,
    height: 30,
    marginBottom: 25,
    marginLeft: -155,
    marginTop: -20,
  },
  {
    key: "2",
    width: 40,
    height: 30,
    zIndex: 3,
    marginTop: -55,
    marginRight: -335,
    borderRadius: 2,
    marginBottom: 25,
  },
  { key: "3", width: 180, height: 230, marginLeft: -193 },
  { key: "4", width: 160, height: 20, marginTop: 25, marginLeft: -220 },
  { key: "5", width: 150, height: 20, marginTop: 25, marginLeft: -230 },
  { key: "6", width: 120, height: 20, marginTop: 25, marginLeft: -250 },
  { key: "8", width: 180, height: 230, marginRight: -195, marginTop: -366 },
  {
    key: "9",
    width: 160,
    height: 20,
    marginTop: 25,
    marginRight: -180,
    zIndex: 3,
  },
  {
    key: "10",
    width: 150,
    height: 20,
    marginTop: 25,
    marginRight: -170,
    zIndex: 3,
  },
  {
    key: "11",
    width: 120,
    height: 20,
    marginTop: 25,
    marginRight: -150,
    zIndex: 3,
  },
];

let layoutProductDetail = [
  { key: "1", width: 400, height: 335, marginTop: -50, marginHorizontal: 5 },
  {
    key: "2",
    width: 180,
    height: 25,
    marginTop: 20,
    position: "absolute",
    left: 15,
    top: 330,
  },
  {
    key: "3",
    width: 100,
    height: 25,
    marginTop: 20,
    position: "absolute",
    right: 20,
    top: 330,
  },
  {
    key: "4",
    width: 160,
    height: 20,
    marginTop: 20,
    position: "absolute",
    left: 15,
    top: 365,
  },
  {
    key: "5",
    width: 200,
    height: 25,
    marginTop: 20,
    position: "absolute",
    left: 15,
    top: 400,
  },
  {
    key: "6",
    width: 140,
    height: 25,
    marginTop: 20,
    position: "absolute",
    right: 20,
    top: 400,
  },
  {
    key: "7",
    width: 160,
    height: 20,
    marginTop: 20,
    position: "absolute",
    left: 15,
    top: 440,
  },
  {
    key: "8",
    width: 160,
    height: 20,
    marginTop: 20,
    position: "absolute",
    left: 15,
    top: 480,
  },
  {
    key: "9",
    width: 360,
    height: 335,
    marginTop: 20,
    position: "absolute",
    top: 520,
  },
];

const Skeleton = ({ layout }: { layout: string | LayoutType[] }) => {
  switch (layout) {
    case "layoutForm":
      layout = layoutForm;
      break;
    case "layoutSlider":
      layout = layoutSlider;
      break;
    case "layoutProduct":
      layout = layoutProduct;
      break;
    case "layoutProductHori":
      layout = layoutProductHori;
      break;
    case "layoutProductHome":
      layout = layoutProductHome;
      break;
    case "layoutProductDetail":
      layout = layoutProductDetail;
      break;
    default:
      break;
  }

  return (
    <>
      <SkeletonContent
        containerStyle={styles.container}
        isLoading={true}
        animationDirection="horizontalLeft"
        layout={layout as LayoutType[]}
      ></SkeletonContent>
    </>
  );
};

export default Skeleton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    paddingVertical: 45,
  },
});
