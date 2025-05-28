"use client";

import { useEffect, useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";
import { generateImagekitSignature } from "../actions/upload";
import { useRef } from "react";
import { upload } from "@imagekit/next";

const JOTFORM_URL = "https://www.jotform.com/";
const IMAGE_KIT_PUBLIC_KEY = "public_zippyGUFnPZ9M2RQ6pPgLqCwo4I=";

interface UploadResult {
  fileId: string;
  url: string;
  AITags?: Array<{ name: string; confidence: number }>;
}

const uploadImages = async (images: Array<File>, projectTitle: string) => {
  return Promise.all(
    images.map(async (i, index): Promise<UploadResult | Error> => {
      try {
        const { expire, token, signature } = await generateImagekitSignature();
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
            { name: "google-auto-tagging", maxTags: 5, minConfidence: 60 },
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
const handleImageUpload = async (
  data: FormData
): Promise<Array<UploadResult | Error>> => {
  console.log("upload now!", data);

  const files = data.getAll("files") as File[];
  const projectTitle = data.get("projectTitle") as string;
  console.log("files?", files);
  return await uploadImages(files, projectTitle);
};

export default function Page() {
  const [projectInput, setProjectInput] = useState<string>();
  const [files, setFiles] = useState<Array<File>>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const [emailInput, setEmailInput] = useState<HTMLElement | undefined>();

  // const handleReceiveMessage = (event: ReceiveMessageEvent): void => {
  //   console.log("message event:", event);
  //   if (event.origin === JOTFORM_URL) {
  //     console.log("message is from jotform", event);
  //     setProjectInput(event.data);
  //   }
  // };

  useEffect(() => {
    // window.addEventListener("message", handleReceiveMessage);

    const testEmail = document.getElementById("input_2");
    console.log("found jotform input", testEmail);
    console.log(
      "found jotform input",
      (testEmail as HTMLInputElement | null)?.value
    );
    if (testEmail) {
      setEmailInput(testEmail);
    }
    const jotformProjectTitle = document.querySelector("#input_49");
    console.log("jotform project title:", jotformProjectTitle);

    // return () => window.removeEventListener("message", handleReceiveMessage);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    console.log("email input updated", emailInput);
    console.log(
      "email input value",
      (emailInput as HTMLInputElement | undefined)?.value
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emailInput, (emailInput as HTMLInputElement | undefined)?.value]);

  const { Dragger } = Upload;

  const props: UploadProps = {
    name: "file",
    multiple: true,
    onChange(info) {
      console.log("INFO :", info);
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        console.log("DONE UPLOADING");
        if (info.file.originFileObj instanceof File) {
          console.log("setting files", info.fileList);
          setFiles([...files, info.file.originFileObj]);
        } else {
          console.log("image file not instance of FILE");
        }
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <form
      ref={formRef}
      onSubmit={async (e) => {
        e.preventDefault();
        if (formRef.current) {
          const formData = new FormData(formRef.current);
          files.forEach((file) => {
            formData.append("files", file);
          });
          formData.append("projectInput", projectInput ?? "");
          try {
            await handleImageUpload(formData);
          } catch (err) {
            console.error("failed upload", err);
          }
        }
      }}
    >
      <div className="h-screen flex flex-col justify-center items-center">
        <div>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Please upload all of the images associated with this project
              before clicking submit.
            </p>
          </Dragger>
        </div>
        <div>
          <Button
            className="m-5 p-4 mt-10"
            type="primary"
            // loading={loading}
            htmlType="submit"
          >
            Submit Images
          </Button>
        </div>
      </div>
    </form>
  );
}
