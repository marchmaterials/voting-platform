"use client";

import { Suspense, useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";
import { generateImagekitSignature } from "../actions/upload";
import { upload } from "@imagekit/next";
import { useSearchParams } from "next/navigation";
import { useLoading } from "@/hooks/useLoading";
import { UploadResult, FileUploadAntD } from "@/types/upload";
import { IMAGE_KIT_PUBLIC_KEY, TOAST_NOTIFICATION_DURATION } from "@/constants";
import { checkImageDimensions, formatImageFileName } from "@/utils/upload";

function ThankYouMessage() {
  return (
    <div className="flex flex-col justify-center items-center p-10 text-center">
      <h3 className="text-green-600 text-2xl font-bold">
        Thank you for your submission! Your project details and images have
        successfully been submitted.
      </h3>
      <h1 className="font-semibold text-l m-4">
        You’ll get a confirmation email with payment details soon.
      </h1>
      <h5 className="font-thin">
        Payment is only required for the first project you submit. Any
        additional submissions are free of charge.
      </h5>
    </div>
  );
}

function ImageUploader() {
  const [files, setFiles] = useState<Array<FileUploadAntD>>([]);
  const [submittedSuccess, setSubmittedSuccess] = useState<boolean>(false);
  const [titleImageUid, setTitleImageUid] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const projectTitle = searchParams.get("project");
  const { loading, setLoading } = useLoading(false);

  const { Dragger } = Upload;

  const props: UploadProps = {
    name: "file",
    multiple: true,
    style: { maxHeight: "10rem" },
    disabled: submittedSuccess || loading,
    accept: ".jpg, .png, .avif, .gif, .webp",
    async beforeUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error(
          "Image must smaller than 2MB",
          TOAST_NOTIFICATION_DURATION
        );
        return Upload.LIST_IGNORE;
      }
      const dimensionsOkay = await checkImageDimensions(file);
      if (!dimensionsOkay) {
        message.error(
          "Image resolution cannot be larger than 25MP",
          TOAST_NOTIFICATION_DURATION
        );
        return Upload.LIST_IGNORE;
      }
      return true;
    },
    onChange(info) {
      const { file, fileList } = info;
      const { status } = file;
      const isUploading = fileList.some((f) => f.status === "uploading");
      setLoading(isUploading);

      if (status === "removed") {
        setFiles([...files].filter((f) => f.uid !== file.originFileObj?.uid));
      }
      if (status === "done") {
        if (file.originFileObj instanceof File) {
          setFiles([...files, file.originFileObj]);
        } else {
          message.error("image file not instance of FILE");
        }
        message.success(`${file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${file.name} file upload failed.`);
      }
    },
    itemRender: (originNode, file) => {
      return (
        <div className="flex justify-between items-end">
          {originNode}
          <Button
            size="small"
            className="ml-2"
            disabled={loading || submittedSuccess}
            type={titleImageUid === file.uid ? "primary" : "default"}
            onClick={() => {
              setTitleImageUid(file.uid);
            }}
          >
            Title Image
          </Button>
        </div>
      );
    },
  };

  const resetForm = () => {
    setFiles([]);
    setTitleImageUid(null);
    setSubmittedSuccess(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {submittedSuccess ? (
        <>
          <ThankYouMessage />
          <Button
            className="m-5 p-4 mt-5"
            type="primary"
            // haven't created a test for this yet or maybe we need can use the same test?
            //data-testid="image-submit-again"
            loading={loading}
            onClick={resetForm}
            >
              Submit Another Project
          </Button>
        </>
      ) : (
        <>
          <h2 className="font-bold text-3xl p-4">
            The Final Step! Upload all images associated with the project
          </h2>
          <p>
            Then select one image that you think best represents the project to
            be the title image.
          </p>
          <p className="text-xs italic">
            If you need help submitting your project, please contact{" "}
            <a
              href="mailto:info@marchmaterials.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@marchmaterials.com
            </a>
          </p>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              if (!email || !projectTitle || files.length === 0) {
                message.error(
                  "Missing required information, please upload at least one image."
                );
                return;
              }
              if (!titleImageUid) {
                message.error("Please select a file to be the title image");
                return;
              }
              setLoading(true);
              try {
                const res = await Promise.all(
                  files.map(async (i): Promise<UploadResult | Error> => {
                    const { expire, token, signature } =
                      await generateImagekitSignature();
                    const tags = i.uid === titleImageUid ? ["title-image"] : [];
                    const fileName = formatImageFileName(
                      projectTitle,
                      email,
                      i.name
                    );
                    const uploadResponse = await upload({
                      file: i,
                      fileName,
                      tags,
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
                    return {
                      fileId: uploadResponse.fileId,
                      url: uploadResponse.url,
                      AITags: uploadResponse.AITags,
                    } as UploadResult;
                  })
                );
                setSubmittedSuccess(true);
                return res;
              } catch (err) {
                // we should be sending this to a logging service for monitoring
                console.error("failed upload", err);
              } finally {
                setLoading(false);
              }
            }}
          >
            <div className="mt-6">
              <Dragger {...props} data-testid="drag-to-upload">
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
                data-testid="image-submit"
                loading={loading}
                disabled={loading || submittedSuccess}
                htmlType="submit"
              >
                Submit Images
              </Button>
            </div>
          </form>
        </>
      )}
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
