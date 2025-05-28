"use client";

import { upload } from "@imagekit/next";
import { generateImagekitSignature } from "../actions.ts/upload";

const IMAGE_KIT_PUBLIC_KEY = "public_zippyGUFnPZ9M2RQ6pPgLqCwo4I=";
const IMAGE_KIT_UPLOAD_URL = "https://upload.imagekit.io/api/v1/files/upload";

interface UploadResult {
  fileId: string;
  url: string;
  AITags?: Array<{ name: string; confidence: number }>;
}

export const uploadImages = async (
  images: Array<File>,
  projectTitle: string,
  tokens: { signature: string; token: string; expire: number }
) => {
  return Promise.all(
    images.map(async (i, index): Promise<UploadResult | Error> => {
      try {
        const { signature, token, expire } = tokens;
        const uploadResponse = await upload({
          file: i,
          fileName: `march-competition-${projectTitle}-${index}`,
          signature,
          token,
          expire,
          publicKey: IMAGE_KIT_PUBLIC_KEY,
          responseFields: "metadata, embeddedMetadata, customMetadata, tags",
          useUniqueFileName: true,
          extensions: [
            { name: "google-auto-tagging", maxTags: 5, minConfidence: 50 },
          ],
        });

        if (!uploadResponse.fileId || !uploadResponse.url) {
          throw new Error("Upload failed: missing fileId or url");
        }

        return {
          fileId: uploadResponse.fileId,
          url: uploadResponse.url,
          AITags: uploadResponse.AITags,
        } as UploadResult;

      } catch (err) {
        console.error("failed to upload images", err);
        return err as Error;
      }
    })
  );
};
export const handleImageUpload = async (
  data: FormData,
  tokens: { expire: number; token: string; signature: string }
): Promise<Array<UploadResult | Error>> => {
  console.log("upload now!", data);

  const files = data.getAll("files") as File[];
  const projectTitle = data.get("projectTitle") as string;
  console.log("files?", files);
  return await uploadImages(files, projectTitle, tokens);
};
