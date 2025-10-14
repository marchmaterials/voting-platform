// src/lib/cryptoOpaque.ts
import crypto from "node:crypto";

const b64u = {
    encode: (buf: Buffer) =>
        buf.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, ""),
    decode: (str: string) =>
        Buffer.from(str.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((str.length + 3) % 4), "base64"),
};

function getKey(): { key: Buffer; kid: string } {
    const b64 = process.env.ENC_KEY_B64;
    const kid = process.env.ENC_KEY_ID || "v1";
    if (!b64) throw new Error("ENC_KEY_B64 is not set");
    const key = Buffer.from(b64, "base64");
    if (key.length !== 32) throw new Error("ENC_KEY_B64 must be 32 bytes (base64 of 32 raw bytes)");
    return { key, kid };
}

/**
 * Encrypts an object to an opaque token using AES-256-GCM.
 * Output format: `${kid}.${b64url(iv)}.${b64url(ciphertext+tag)}`
 */
export function encryptOpaque(payload: unknown): string {
    const { key, kid } = getKey();
    const iv = crypto.randomBytes(12); // 96-bit IV for GCM
    const plaintext = Buffer.from(JSON.stringify(payload), "utf8");

    const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
    const ciphertext = Buffer.concat([cipher.update(plaintext), cipher.final()]);
    const tag = cipher.getAuthTag(); // 16 bytes

    // pack as ciphertext || tag to keep params short
    const packed = Buffer.concat([ciphertext, tag]);
    return [kid, b64u.encode(iv), b64u.encode(packed)].join(".");
}

/**
 * Decrypts an opaque token created by encryptOpaque.
 * Supports key rotation via KID.
 */
export function decryptOpaque<T = unknown>(token: string, keyring?: Record<string, Buffer>): T {
    const parts = token.split(".");
    if (parts.length !== 3) throw new Error("Bad token format");
    const [kid, ivB64u, bodyB64u] = parts;

    // resolve key (supports rotation)
    let key: Buffer | undefined;
    if (keyring && keyring[kid]) {
        key = keyring[kid];
    } else {
        const cur = getKey();
        if (cur.kid === kid) key = cur.key;
    }
    if (!key) throw new Error("Unknown key id");

    const iv = b64u.decode(ivB64u);
    const packed = b64u.decode(bodyB64u);
    if (iv.length !== 12 || packed.length < 17) throw new Error("Bad token");

    const ciphertext = packed.subarray(0, packed.length - 16);
    const tag = packed.subarray(packed.length - 16);

    const decipher = crypto.createDecipheriv("aes-256-gcm", key, iv);
    decipher.setAuthTag(tag);

    const plaintext = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
    return JSON.parse(plaintext.toString("utf8")) as T;
}