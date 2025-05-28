"use client";

import { useEffect, useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";
import { handleImageUpload } from "../actions.ts/upload";
import { useRef } from "react";

const JOTFORM_URL = "";

export default function Page() {
  const [projectInput, setProjectInput] = useState<string>();
  const [files, setFiles] = useState<Array<File>>([]);
  const [readyToSubmit, setReadyToSubmit] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  interface ReceiveMessageEvent extends MessageEvent {
    data: string;
  }

  const handleReceiveMessage = (event: ReceiveMessageEvent): void => {
    if (event.origin === JOTFORM_URL) {
      console.log("message received from jotform", event);
      setProjectInput(event.data);
    }
  };

  useEffect(() => {
    window.addEventListener("message", handleReceiveMessage);
    return () => window.removeEventListener("message", handleReceiveMessage);
  }, []);

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
          await handleImageUpload(formData);
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
            // onClick={() => {
            //   console.log("uplodaing file -> server action", files);
            //   handleImageUpload(files, projectInput ?? "");
            // }}
            htmlType="submit"
          >
            Submit Images
          </Button>
        </div>
      </div>
    </form>
  );
}
