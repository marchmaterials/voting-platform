export function getIUrl(imageKitUrl: string): string {
  return `/api/i?src=${encodeURIComponent(imageKitUrl)}`;
  //   if (typeof window === "undefined") {
  //     // Fallback for SSR - return basic URL
  //     return `/api/i?src=${encodeURIComponent(imageKitUrl)}`;
  //   }

  //   const baseUrl = `${window.location.origin}/api/i?src=${encodeURIComponent(
  //     imageKitUrl
  //   )}`;

  //   return baseUrl;
}
