"use client";

import { useEffect, useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";
import { handleImageUpload } from "../actions.ts/upload";

const JOTFORM_URL = "";

export default function Page() {
  const [projectInput, setProjectInput] = useState<string>();
  const [files, setFiles] = useState<Array<File>>([]);

  const handleReceiveMessage = (event) => {
    console.log("message received");
    if (event.origin === JOTFORM_URL) {
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
    // action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    customRequest = () => handleImageUpload(files, projectInput),
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        setFiles([...files, info.file]);

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
    <div className="h-screen flex flex-col justify-center items-center">
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">Select as many files as you need.</p>
      </Dragger>
      <Button
        className="m-5 p-4 w-40"
        type="primary"
        onSubmit={(e) => handleImageUpload()}
      >
        Submit Images
      </Button>
    </div>
  );
}
