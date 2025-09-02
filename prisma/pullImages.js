import { IMAGE_KIT_PUBLIC_KEY, IMAGE_KIT_BASE_URL } from "../src/constants.js";
import ImageKit from "imagekit";
import "dotenv/config";
import prisma from "../src/lib/prisma.ts";

const imagekit = new ImageKit({
  publicKey: IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_API_TOKEN,
  urlEndpoint: IMAGE_KIT_BASE_URL,
});

async function createConnectedImage({ projectTitle, email, url, tags }) {
  console.info(`creating image for ${projectTitle} by ${email}`);
  if (!projectTitle || !email || !url) {
    console.error("Missing required fields");
    return;
  }
  try {
    // first check image is not already uploaded
    const existingImage = await prisma.image.findFirst({
      where: { url },
    });
    if (existingImage) {
      console.log(`Image already uploaded: ${url}`);
      return;
    }

    // Find the user first (since Project is linked to User by authorId)
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      console.warn(`No user found with email: ${email}`);
      return;
    }

    // Find the corresponding project by title & authorId
    const project = await prisma.project.findFirst({
      where: {
        title: projectTitle,
        authorId: user.id,
      },
    });

    if (!project) {
      console.warn(
        `No project found with title: ${projectTitle} for user: ${email}`
      );
      return;
    }

    // Create the image and connect it to the project
    const image = await prisma.image.create({
      data: {
        url,
        project: {
          connect: { id: project.id },
        },
        aiTags: tags,
        credit: project.imageCredit,
      },
    });
    console.log("IMAGE UPLOADED:", image);
    return image;
  } catch (error) {
    console.error("Error creating connected image:", error);
    return error;
  }
}

const extractProjectInfo = async (competitionImages) => {
  return competitionImages.map((file) => {
    const parts = file.name.split(".-.");
    // Expected: ["march-competition", "My_Project", "user--at--mail.com", "John"]
    const projectTitleRaw = parts[1] || "";
    const emailRaw = parts[2] || "";

    const projectTitle = projectTitleRaw.replace(/_/g, " ");
    const email = emailRaw.replace(/--at--/g, "@");
    // first few image uploads did not replace @ with --at--
    if (!email.includes("@")) email.replace("_", "@");

    return {
      projectTitle,
      email,
      url: file.url,
      tags: [
        ...(file.tags ?? []),
        ...(file.AITags ? file.AITags.map((t) => t.name) : []),
      ],
    };
  });
};

async function fetchFileMetadata(skip, limit) {
  try {
    const files = await imagekit.listFiles({
      limit,
      skip,
    });

    console.info(`Fetched ${files.length} files from ImageKit`);
    console.log("file:", files[0]);

    const competitionImages = files.filter((f) =>
      f.name.includes("march-competition")
    );
    console.log(`${competitionImages.length} competition images found`);

    return competitionImages;
  } catch (error) {
    console.error("Error fetching metadata:", error);
  }
}

const main = async (skip = 0, limit = 30) => {
  let totalUploaded = 0;

  while (true) {
    try {
      const data = await fetchFileMetadata(skip, limit);

      if (data.length === 0) break;

      const extracted = await extractProjectInfo(data);
      const newImages = await Promise.allSettled(
        extracted.map(createConnectedImage)
      );

      const successes = newImages.filter(
        (result) => result.status === "fulfilled"
      );
      const errors = newImages.filter((result) => result.status === "rejected");

      console.info(`${successes.length} files uploaded successfully`);
      console.error(`${errors.length} files failed to upload`);

      totalUploaded += successes.length;
    } catch (err) {
      console.error("Error occurred while processing images:", err);
    }
    skip += limit;
  }

  console.log("Total uploaded files: ", totalUploaded);
};

main();
