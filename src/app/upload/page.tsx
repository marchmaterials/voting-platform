"use client";

import { useEffect, useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";
import { generateImagekitSignature } from "../actions/upload";
import { upload } from "@imagekit/next";
import Script from "next/script";

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
  const handleReceiveMessage = (event) => {
    console.log("listening", event);
    if (event.origin !== "https://jotform.com") return; // optional security check

    if (event.data.type === "input-value") {
      console.log("Received input from iframe:", event.data.value);
    }
  };
  useEffect(() => {
    // window.addEventListener("message", handleReceiveMessage);

    const iframe = document.getElementById(
      "JotFormIFrame-251335007801345"
    ) as HTMLIFrameElement | null; // or querySelector

    // Ask the iframe to send input content
    iframe?.contentWindow?.postMessage({ type: "get-input" }, "*");

    // Listen for the response
    window.addEventListener("message", handleReceiveMessage);

    return () => window.removeEventListener("message", handleReceiveMessage);
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
    <>
      <div className="flex flex-col justify-center items-center">
        <iframe
          id="JotFormIFrame-251335007801345"
          title="The Sustainable Architecture Competition - Submission Form"
          onload="window.parent.scrollTo(0,0)"
          allowtransparency="true"
          allow="geolocation; microphone; camera; fullscreen; payment"
          src="https://form.jotform.com/251335007801345"
          frameborder="0"
          style={{
            minWidth: "100%",
            maxWidth: "100%",
            height: "539px",
            border: "none",
          }}
          scrolling="yes"
        ></iframe>
        <Script
          src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"
          strategy="afterInteractive"
          onLoad={() => {
            // @ts-expect-error idk
            if (window.jotformEmbedHandler) {
              // @ts-expect-error idk
              window.jotformEmbedHandler(
                "iframe[id='JotFormIFrame-251335007801345']",
                "https://form.jotform.com/"
              );
            }
          }}
        />

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
          {submittedSuccess && (
            <h3>Thank you! Your images have successfully been submitted</h3>
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
    </>
  );
}
