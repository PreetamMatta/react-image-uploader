import "./App.css";
import React, { useRef, useState, useEffect } from "react";
import AWS from "./aws-config";

const ImageUploader = ({ uponUploadSuccess }) => {
  const [file, setFile] = useState(null); // Use a single file state
  const [filesDropped, setFilesDropped] = useState(false);
  const [uploading, setUploading] = useState(false);

  const imageUploadRef = useRef();
  const uploadBoxRef = useRef();

  const sendImageToS3 = () => {
    if (!file) {
      return;
    }

    const s3 = new AWS.S3();
    const params = {
      // Bucket: "textract-put-preetam",
      Bucket: "kubex-identity-doc-poc",
      Key: `identity-input-file/${file.name}`,
      // Key: `uploads/uploadedFile`,
      Body: file,
    };

    s3.upload(params, (err, data) => {
      if (err) {
        console.error("Error uploading file to S3:", err);
        setUploading(false);
      } else {
        console.log("File uploaded successfully to S3:", data.Location);
        setUploading(true);
        uponUploadSuccess(file.name);
        // You can perform any additional actions here after successful upload
      }
    });
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const firstFile = event.dataTransfer.files[0]; // Select only the first file
    setFile(firstFile);
    setFilesDropped(true);
  };

  useEffect(() => {
    if (file) {
      uploadBoxRef.current.querySelector(".FileNames").textContent = file.name;
    }
  }, [file]);

  return (
    <div
      className="UploadBox"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      ref={uploadBoxRef}
    >
      <h1>IMAGE UPLOADER</h1>
      <h3>Drag and Drop your Image here</h3>
      <input
        type="file"
        multiple
        onChange={(event) => {
          const firstFile = event.target.files[0]; // Select only the first file
          setFile(firstFile);
          setFilesDropped(true);
        }}
        hidden
        ref={imageUploadRef}
      />
      <button
        className="FileSelectButton"
        onClick={(event) => {
          event.preventDefault();
          imageUploadRef.current.click();
        }}
      >
        Select Files
      </button>
      {filesDropped && (
        <button
          className="FileSelectButton"
          onClick={(event) => {
            event.preventDefault();
            sendImageToS3();
          }}
        >
          Upload
        </button>
      )}
      <p className="FileNames"></p>
    </div>
  );
};

export default ImageUploader;
