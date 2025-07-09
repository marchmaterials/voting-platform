import { extendedImageLoaderProps } from "@/types/dashboard";

export default function imageKitLoader({
  src,
  width,
  height,
  quality,
}: extendedImageLoaderProps) {
  return `${src}?tr=w-${width},${height ? `h-${height}` : ""},q-${
    quality || 75
  }`;
}
