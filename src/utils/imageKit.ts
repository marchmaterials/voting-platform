import { ImageLoaderProps } from "next/image";

export const imageKitLoader = ({
  src,
  width,
  height,
  quality,
}: ImageLoaderProps) => {
  return `${src}?tr=w-${width},${height ? `h-${height}` : ""},q-${
    quality || 75
  }`;
};
