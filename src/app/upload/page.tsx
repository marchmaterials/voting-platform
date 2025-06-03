"use client";

import { Suspense, useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";
import { generateImagekitSignature } from "../actions/upload";
import { upload } from "@imagekit/next";
import { useSearchParams } from "next/navigation";

const IMAGE_KIT_PUBLIC_KEY = "public_zippyGUFnPZ9M2RQ6pPgLqCwo4I=";

interface UploadResult {
  fileId: string;
  url: string;
  AITags?: Array<{ name: string; confidence: number }>;
}
interface FileUploadAntD extends File {
  uid: string;
}

function ImageUploader() {
  const [files, setFiles] = useState<Array<FileUploadAntD>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [submittedSuccess, setSubmittedSuccess] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const projectTitle = searchParams.get("project");

  console.log("search param email", email);
  console.log("search param title", projectTitle);
  const { Dragger } = Upload;

  const props: UploadProps = {
    name: "file",
    multiple: true,
    style: { maxHeight: "10rem" },
    disabled: submittedSuccess || loading,
    accept: ".jpg, .png, .avif, .gif, .webp",
    beforeUpload(file) {
      console.log("before upload", file);
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error("Image must smaller than 2MB");
        return Upload.LIST_IGNORE;
      }
      return isLt2M;
    },
    onChange(info) {
      const { file, fileList } = info;
      const { status } = file;
      const isUploading = fileList.some((f) => f.status === "uploading");
      setLoading(isUploading);
      console.log("status", status);

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
    <div className="min-h-screen flex flex-col justify-center items-center">
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          if (!email || !projectTitle || files.length === 0) {
            message.error(
              "Missing required information, please upload at least one image."
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
                  fileName: `march-competition.-.${projectTitle}.-.${email}.-.${i.name}`,
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
        {submittedSuccess && (
          <div className="flex justify-center text-green-600">
            <h3>Thank you! Your images have successfully been submitted</h3>
          </div>
        )}
        <div className="mt-6">
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
        <div className="flex justify-center">
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
      </form>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense>
      <ImageUploader />
    </Suspense>
  );
}
