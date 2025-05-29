"use client";

import { useEffect, useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";
import { generateImagekitSignature } from "../actions/upload";
import { upload } from "@imagekit/next";

const IMAGE_KIT_PUBLIC_KEY = "public_zippyGUFnPZ9M2RQ6pPgLqCwo4I=";

interface UploadResult {
  fileId: string;
  url: string;
  AITags?: Array<{ name: string; confidence: number }>;
}
interface FileUploadAntD extends File {
  uid: string;
}

export default function Page() {
  const [files, setFiles] = useState<Array<FileUploadAntD>>([]);
  const [emailInput, setEmailInput] = useState<HTMLInputElement | undefined>();
  const [titleInput, setTitleInput] = useState<HTMLInputElement | undefined>();
  const [emailValue, setEmailValue] = useState<string | undefined>();
  const [titleValue, setTitleValue] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [submittedSuccess, setSubmittedSuccess] = useState<boolean>(false);

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
    style: { maxHeight: "10rem" },
    disabled: submittedSuccess,
    onChange(info) {
      const { file, fileList } = info;
      const { status } = file;
      // Check if any file is still uploading
      const isUploading = fileList.some((f) => f.status === "uploading");
      setLoading(isUploading);

      if (status === "removed") {
        setFiles([...files].filter((f) => f.uid !== file.originFileObj?.uid));
      }
      if (status === "done") {
        if (file.originFileObj instanceof File) {
          console.log("setting files", fileList);
          setFiles([...files, file.originFileObj]);
        } else {
          message.error("image file not instance of FILE");
        }
        message.success(`${file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${file.name} file upload failed.`);
      }
    },
  };

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (!emailValue || !titleValue || files.length === 0) {
          message.error(
            "Missing required information. Please ensure other fields such as project title and email are complete."
          );
          return;
        }
        setLoading(true);
        try {
          const res = await Promise.all(
            files.map(async (i): Promise<UploadResult | Error> => {
              const { expire, token, signature } =
                await generateImagekitSignature();
              const uploadResponse = await upload({
                file: i,
                fileName: `march-competition.-.${titleValue}.-.${emailValue}.-.${i.name}`,
                signature,
                token,
                expire,
                publicKey: IMAGE_KIT_PUBLIC_KEY,
                responseFields:
                  "metadata, embeddedMetadata, customMetadata, tags",
                extensions: [
                  {
                    name: "google-auto-tagging",
                    maxTags: 20,
                    minConfidence: 60,
                  },
                ],
              });
              if (!uploadResponse.fileId || !uploadResponse.url) {
                throw new Error("Upload failed: missing fileId or url");
              }
              console.log("image upoload:", uploadResponse);
              return {
                fileId: uploadResponse.fileId,
                url: uploadResponse.url,
                AITags: uploadResponse.AITags,
              } as UploadResult;
            })
          );
          console.log("everything uploaded", res);
          setSubmittedSuccess(true);
          return res;
        } catch (err) {
          console.error("failed upload", err);
        } finally {
          setLoading(false);
        }
      }}
    >
      <div className="h-screen flex flex-col justify-center items-center">
        {submittedSuccess && (
          <h3>Thank you! Your images have successfully been submitted</h3>
        )}
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
            loading={loading}
            disabled={loading || submittedSuccess}
            htmlType="submit"
          >
            Submit Images
          </Button>
        </div>
      </div>
    </form>
  );
}
