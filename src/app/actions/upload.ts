"use server";

import crypto, { randomUUID } from "crypto";

/**
 * Generates an ImageKit signature.
 * @param token The token string.
 * @param expire The expire timestamp (as string or number).
 * @param privateKey Your ImageKit private API key.
 * @returns The HMAC-SHA1 signature as a hex string.
 */
export async function generateImagekitSignature(): Promise<{
  expire: number;
  token: string;
  signature: string;
}> {
  const expire = Date.now() / 1000 + 60 * 5;
  const token = randomUUID();
  const message = `${token}${expire}`;
  const signature = crypto
    .createHmac("sha1", process.env.IMAGEKIT_API_TOKEN!)
    .update(message)
    .digest("hex");

  return { expire, token, signature };
}
