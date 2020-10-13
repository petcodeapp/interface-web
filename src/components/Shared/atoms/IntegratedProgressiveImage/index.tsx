import React from "react";

import { ImageProps } from "@chakra-ui/core";
import { Image } from "../../../Motion";
import ProgressiveImage, {
  ProgressiveImageProps,
} from "react-progressive-image";
import { MotionProps } from "framer-motion";

export type IntegratedProgressiveImageProps = {
  slug: string;
} & Omit<Omit<ProgressiveImageProps, "src">, "placeholder"> &
  ImageProps &
  MotionProps;

const IntegratedProgressiveImage: React.FC<IntegratedProgressiveImageProps> = ({
  slug,
  delay,
  onError,
  children,
  ...props
}) => {
  return (
    <ProgressiveImage
      placeholder={`https://petcode.sirv.com/${slug}?scale.width=100`}
      src={`https://petcode.sirv.com/${slug}`}
      delay={delay}
      onError={onError}
    >
      {children ||
        ((src: string, loading: boolean) => (
          <Image
            src={src}
            style={{ filter: loading ? "blur(-5px)" : "" }}
            {...props}
          />
        ))}
    </ProgressiveImage>
  );
};

export default IntegratedProgressiveImage;
