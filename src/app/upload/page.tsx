"use client";

import { useEffect, useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";
import { generateImagekitSignature } from "../actions/upload";
import { useRef } from "react";
import { upload } from "@imagekit/next";

const IMAGE_KIT_PUBLIC_KEY = "public_zippyGUFnPZ9M2RQ6pPgLqCwo4I=";

interface UploadResult {
  fileId: string;
  url: string;
  AITags?: Array<{ name: string; confidence: number }>;
}

const uploadImages = async (
  images: Array<File>,
  projectTitle: string,
  authorEmail: string
) => {
  return Promise.all(
    images.map(async (i): Promise<UploadResult | Error> => {
      try {
        const { expire, token, signature } = await generateImagekitSignature();
        const uploadResponse = await upload({
          file: i,
          fileName: `march-competition::${projectTitle}::${authorEmail}::${i.name}`,
          signature,
          token,
          expire,
          publicKey: IMAGE_KIT_PUBLIC_KEY,
          responseFields: "metadata, embeddedMetadata, customMetadata, tags",
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
  const authorEmail = data.get("projectAuthorEmail") as string;
  return await uploadImages(files, projectTitle, authorEmail);
};

export default function Page() {
  const [files, setFiles] = useState<Array<File>>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const [emailInput, setEmailInput] = useState<HTMLInputElement | undefined>();
  const [titleInput, setTitleInput] = useState<HTMLInputElement | undefined>();
  const [emailValue, setEmailValue] = useState<string | undefined>();
  const [titleValue, setTitleValue] = useState<string | undefined>();

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
    console.log("testEmail", testEmail);
    console.log(
      "testEmail value?",
      (testEmail as HTMLInputElement | null)?.value
    );
    const jotformProjectTitle = document.querySelector("#input_49");
    console.log("test project title:", jotformProjectTitle);

    const parentEmailInput = window.parent.document.getElementById("input_2");
    const parentTitleInput = window.parent.document.getElementById("input_49");
    const parentInput = window.parent.document.getElementById("input_2");
    const parentQuery = window.parent.document.querySelector("#input_2");
    console.log("parent window get by id??", parentInput);
    console.log("parent query selector:", parentQuery);
    if (parentEmailInput) {
      setEmailInput(parentEmailInput as HTMLInputElement);
    }
    if (parentTitleInput) {
      setTitleInput(parentTitleInput as HTMLInputElement);
    }
    // return () => window.removeEventListener("message", handleReceiveMessage);
  }, []);
  useEffect(() => {
    console.log("email input updated", emailInput);
    console.log("email input value?", emailInput?.value);
    console.log("title input updated", titleInput);
    console.log("title input value?", titleInput?.value);
    setEmailValue(emailInput?.value);
    setTitleValue(titleInput?.value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emailInput?.value, titleInput?.value]);

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
          formData.append("projectAuthorEmail", emailValue ?? "");
          formData.append("projectTitle", titleValue ?? "");
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
