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
  const expire = Date.now() / 1000 + 60 * 30;
  console.log("expire datetime?", new Date(expire * 1000));
  const token = randomUUID();
  // f3eaa975-21cf-43a4-a505-b82a13685413
  console.log('token??', token)
  const message = `${token}${expire}`;
  const signature = crypto
    .createHmac("sha1", process.env.IMAGEKIT_API_TOKEN!)
    .update(message)
    .digest("hex");

  return { expire, token, signature };
}
