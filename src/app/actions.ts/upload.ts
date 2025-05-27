"use server";

import ImageKit from "imagekit";
const IMAGE_KIT_PUBLIC_KEY = "public_zippyGUFnPZ9M2RQ6pPgLqCwo4I=";
const IMAGE_KIT_UPLOAD_URL = "https://upload.imagekit.io/api/v1/files/upload";

const imagekit = new ImageKit({
  publicKey: IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_API_TOKEN || "",
  urlEndpoint: IMAGE_KIT_UPLOAD_URL,
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface UploadResult {
  fileId: string;
  url: string;
  AITags?: Array<{ name: string; confidence: number }>;
}

export const uploadImages = async (
  images: Array<File>,
  projectTitle: string
) => {
  return Promise.all(
    images.map(async (i, index): Promise<UploadResult | Error> => {
      try {
        const arrayBuffer = await i.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        return imagekit.upload({
          file: buffer,
          fileName: `march-competition-${projectTitle}-${index}`,
          responseFields: "metadata, embeddedMetadata, customMetadata, tags",
          useUniqueFileName: true,
          extensions: [
            { name: "google-auto-tagging", maxTags: 5, minConfidence: 50 },
          ],
        });
      } catch (err) {
        console.error("failed to upload images", err);
        return err;
      }
    })
  );
};
export const handleImageUpload = async (
  images: Array<File>,
  projectTitle: string
): Promise<Array<UploadResult | Error>> => {
  return await uploadImages(images, projectTitle);
};
