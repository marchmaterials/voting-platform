import { ImageLoaderProps } from "next/image";

export const imageKitLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?tr=w-${width},q-${quality || 75}`;
};
