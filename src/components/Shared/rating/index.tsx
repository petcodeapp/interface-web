import React from "react";

import { useTheme } from "@chakra-ui/core";
import StarRatings, { StarRatingsProps } from "react-star-ratings";

type RatingProps = {
  size:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl";
} & Partial<StarRatingsProps>;

const Rating: React.FC<RatingProps> = ({ size, ...props }) => {
  const theme = useTheme();

  return (
    <StarRatings
      // @ts-ignore
      starRatedColor={theme.colors.petcode.yellow[400]}
      starDimension={theme.fontSizes[size]}
      starSpacing="2px"
      {...props}
    />
  );
};

export default Rating;
