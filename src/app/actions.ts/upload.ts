"use server";

import { upload } from "@imagekit/next";
import crypto, { randomUUID } from "crypto";

const IMAGE_KIT_PUBLIC_KEY = "public_zippyGUFnPZ9M2RQ6pPgLqCwo4I=";
const IMAGE_KIT_UPLOAD_URL = "https://upload.imagekit.io/api/v1/files/upload";

// const imagekit = new ImageKit({
//   publicKey: IMAGE_KIT_PUBLIC_KEY,
//   privateKey: process.env.IMAGEKIT_API_TOKEN || "",
//   urlEndpoint: IMAGE_KIT_UPLOAD_URL,
// });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface UploadResult {
  fileId: string;
  url: string;
  AITags?: Array<{ name: string; confidence: number }>;
}

/**
 * Generates an ImageKit signature.
 * @param token The token string.
 * @param expire The expire timestamp (as string or number).
 * @param privateKey Your ImageKit private API key.
 * @returns The HMAC-SHA1 signature as a hex string.
 */
export async function generateImagekitSignature(
  token: string,
  expire: number,
  privateKey: string
): Promise<string> {
  const message = `${token}${expire}`;
  return crypto.createHmac("sha1", privateKey).update(message).digest("hex");
}

export const uploadImages = async (
  images: Array<File>,
  projectTitle: string
) => {
  return Promise.all(
    images.map(async (i, index): Promise<UploadResult | Error> => {
      try {
        // const arrayBuffer = await i.arrayBuffer();
        // const buffer = Buffer.from(arrayBuffer);
        const expire = Date.now() + 60 * 30;
        const token = randomUUID();
        const signature = generateImagekitSignature(
          token,
          expire,
          process.env.IMAGEKIT_API_TOKEN!
        );
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
        // return imagekit.upload({
        //   file: buffer,
        //   fileName: `march-competition-${projectTitle}-${index}`,
        //   responseFields: "metadata, embeddedMetadata, customMetadata, tags",
        //   useUniqueFileName: true,
        //   extensions: [
        //     { name: "google-auto-tagging", maxTags: 5, minConfidence: 50 },
        //   ],
        // });
      } catch (err) {
        console.error("failed to upload images", err);
        return err as Error;
      }
    })
  );
};
export const handleImageUpload = async (
  data: FormData
): Promise<Array<UploadResult | Error>> => {
  console.log("upload now!", data);

  const files = data.getAll("files") as File[];
  const projectTitle = data.get("projectTitle") as string;
  console.log("files?", files);
  return [{ fileId: "123", url: "" }];
  // return await uploadImages(images, projectTitle);
};

