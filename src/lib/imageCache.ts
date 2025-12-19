// image caching layer so we don't load images from imagekit everytime
import fs, { createWriteStream } from "fs";
import { mkdir, rename, unlink } from "fs/promises";
import path from "path";
import { Readable } from "node:stream";
import { pipeline } from "stream/promises";
import crypto from "node:crypto";
import sharp from "sharp";
import { PassThrough } from "node:stream";
import type { ReadableStream as NodeWebStream } from "node:stream/web";

import { access, constants, stat } from "fs/promises";

export async function fileExists(path: string): Promise<boolean> {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

export async function dirExists(path: string): Promise<boolean> {
  try {
    const s = await stat(path);
    return s.isDirectory();
  } catch (err) {
    // ENOENT = no such file/directory
    return false;
  }
}

export function replaceFileExt(filePath: string, newExt: string): string {
  const parsed = path.parse(filePath);
  parsed.ext = newExt.startsWith(".") ? newExt : `.${newExt}`;
  parsed.base = parsed.name + parsed.ext;
  return path.format(parsed);
}

const INFLIGHT_WRITES = new Map<string, Promise<void>>();
const CACHE_DIR =
  process.env.CACHE_DIR ||
  path.join(import.meta.dirname, "..", "..", "image-cache");
const ALLOWED_HOST = "ik.imagekit.io";
const ALLOWED_PATH_PREFIX = "march";

function verifyImageUrl(url: URL): boolean {
  const paths = url.pathname.split("/").filter((s) => s !== "");
  return url.host === ALLOWED_HOST && paths.includes(ALLOWED_PATH_PREFIX);
}

async function writeWebStreamToFile(
  filePath: string,
  webStream: ReadableStream<Uint8Array>,
  opts?: { signal?: AbortSignal }
): Promise<{ bytesWritten: number }> {
  if (!(await dirExists(CACHE_DIR))) {
    await mkdir(CACHE_DIR, { recursive: true });
  }
  const tmp = `${filePath}.tmp-${Date.now()}`;
  const nodeReadable = Readable.fromWeb(webStream as any);
  const nodeWritable = createWriteStream(tmp, { flags: "w" });

  let bytesWritten = 0;
  nodeWritable.on("drain", () => void 0);
  nodeWritable.on("error", () => void 0);
  nodeWritable.on("close", () => void 0);

  // Count bytes via a lightweight passthrough
  const counting = new PassThrough();
  counting.on("data", (chunk) => {
    bytesWritten += chunk.length;
  });

  // If aborted, destroy streams to stop the write immediately
  const onAbort = () => {
    nodeReadable.destroy(new Error("Aborted"));
    counting.destroy(new Error("Aborted"));
    nodeWritable.destroy(new Error("Aborted"));
  };
  opts?.signal?.addEventListener("abort", onAbort, { once: true });

  try {
    await pipeline(nodeReadable, counting, nodeWritable, {
      signal: opts?.signal as any,
    });
    await rename(tmp, filePath); // atomic swap only after full write
    return { bytesWritten };
  } catch (err) {
    // clean up temp on failure/abort
    try {
      await unlink(tmp);
    } catch {}
    throw err;
  } finally {
    opts?.signal?.removeEventListener("abort", onAbort);
  }
}

function hashKey(s: string) {
  return crypto.createHash("sha1").update(s).digest("hex");
}

function parseBool(s: string): boolean {
  return s.toLowerCase() === "true";
}

export default async function getImage(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const src = url.searchParams.get("src");
  const compressRaw = url.searchParams.get("compress");
  const compress = compressRaw !== null ? parseBool(compressRaw) : true;

  if (src === null) {
    return new Response("Need to pass src as query parameter", { status: 400 });
  }

  const srcUrl = new URL(src);
  if (!verifyImageUrl(srcUrl)) {
    return new Response("Can only cache images from MARCH imagekit", {
      status: 403,
    });
  }

  // now let's get the actual jpeg path of the image
  const paths = srcUrl.pathname.split("/").filter((s) => s !== "");
  const fileName = paths[paths.length - 1];
  const eTag = hashKey(fileName);
  if (!fileName) {
    return new Response("Unable to extract file name from path", {
      status: 500,
    });
  }
  const cacheFileName = compress ? replaceFileExt(fileName, "webp") : fileName;
  const cacheFilePath = path.join(CACHE_DIR, cacheFileName);
  const cacheKey = cacheFilePath;

  if (await fileExists(cacheFilePath)) {
    let fileCorrupted = false;
    try {
      await sharp(cacheFilePath).metadata();
    } catch {
      console.error(`Failed to get metadata for ${cacheFilePath}; deleting`);
      await unlink(cacheFilePath);
      fileCorrupted = true;
    }
    if (!fileCorrupted) {
      const nodeStream = fs.createReadStream(cacheFilePath);
      const toClient = Readable.toWeb(
        nodeStream
      ) as unknown as ReadableStream<Uint8Array>;

      // const ab = await new Response(toCache).arrayBuffer();
      return new Response(toClient, {
        headers: {
          "Content-Type": compress ? "image/webp" : "image/jpeg",
          "Cache-Control": "public, max-age=31536000, immutable",
          ETag: eTag,
          "X-Cache": "IO_HIT",
        },
      });
    }
  }

  const combined = request.signal; // If you also add a timeout, combine with AbortSignal.any()

  const resp = await fetch(srcUrl, { signal: combined });
  if (!resp.ok || !resp.body) {
    return new Response(`imagekit ${resp.status}`, { status: 502 });
  }

  let contentType: string;
  let toClient!: ReadableStream<Uint8Array>;
  let toDisk!: ReadableStream<Uint8Array>;

  if (compress) {
    contentType = "image/webp";
    const webpConverter = sharp().webp({
      quality: 70,
      effort: 6,
      smartSubsample: true,
      lossless: false,
      nearLossless: false,
    });

    const nodeIn = Readable.fromWeb(
      resp.body as unknown as NodeWebStream<Uint8Array>
    );
    const tee = new PassThrough();
    const toClientNode = new PassThrough();
    const toDiskNode = new PassThrough();

    tee.pipe(toClientNode);
    tee.pipe(toDiskNode);

    pipeline(nodeIn, webpConverter, tee, { signal: combined as any }).catch(
      (err) => {
        toClientNode.destroy(err);
        toDiskNode.destroy(err);
      }
    );

    toClient = Readable.toWeb(
      toClientNode
    ) as unknown as ReadableStream<Uint8Array>;
    toDisk = Readable.toWeb(
      toDiskNode
    ) as unknown as ReadableStream<Uint8Array>;
  } else {
    contentType = resp.headers.get("content-type") ?? "image/jpeg";
    [toClient, toDisk] = resp.body.tee();
  }

  // dedupe concurrent writers for the same file
  let inflight = INFLIGHT_WRITES.get(cacheKey);
  if (!inflight) {
    inflight = (async () => {
      try {
        const { bytesWritten } = await writeWebStreamToFile(
          cacheFilePath,
          toDisk,
          { signal: request.signal }
        );
        if (bytesWritten === 0) {
          console.error("failed to write to disk!");
        }
      } finally {
        INFLIGHT_WRITES.delete(cacheKey);
      }
    })();
    INFLIGHT_WRITES.set(cacheKey, inflight);
  } else {
    void new Response(toDisk).arrayBuffer().catch(() => {});
    await inflight;
  }

  return new Response(toClient, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=31536000, immutable",
      ETag: eTag,
      "X-Cache": "MISS",
    },
  });
}
