"use client";

export const checkImageDimensions = (file: File): Promise<boolean> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", (event) => {
      const _loadedImageUrl = event.target?.result;
      const image = document.createElement("img");
      image.src = _loadedImageUrl as string;

      image.addEventListener("load", () => {
        const { width, height } = image;

        if (width * height > 25 * 1000 * 1000) {
          console.log("failed dimension validation", width * height);
          resolve(false);
        }

        resolve(true);
      });
    });
  });
};

export const formatImageFileName = (
  projectTitle: string,
  email: string,
  name: string
): string =>
  `march-competition.-.${projectTitle.replaceAll(" ", "_")}.-.${email.replace(
    "@",
    "--at--"
  )}.-.${name}`;
