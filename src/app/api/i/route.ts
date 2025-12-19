import getImage from "@/lib/imageCache";

export async function GET(request: Request) {
  console.log("i");
  return await getImage(request);
}
