import { Color } from "@/constants";
import React, { useState } from "react";
import { Rating } from "react-native-elements";

const RatingComponent = () => {
  const [rating, setRating] = useState(3);

  const ratingCompleted = ({ rating }: { rating: number }) => {
    console.log(rating);
  };

  return (
    <Rating
      type="custom"
      startingValue={5}
      ratingCount={5}
      imageSize={20}
      onFinishRating={ratingCompleted}
      readonly
      tintColor={Color.white}
    />
  );
};

export default RatingComponent;
