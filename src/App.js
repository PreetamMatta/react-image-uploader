import "./App.css";
import React, { useState } from "react";
import ImageUploader from "./ImageUploader";
import JsonFetcher from "./JsonFetcher";

function App() {
  const [imageUploaded, setImageUploaded] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleImageUploadSuccess = (uploadedFileName) => {
    // This function will be called when the image is successfully uploaded
    setImageUploaded(true);
    setFileName(uploadedFileName);
  };

  return (
    <div>
      <img
        src="/KubeDox.jpg" // Replace with the path to your logo image
        alt="Logo"
        className="logo" // You can style the logo using CSS
      />
      <div className="container">
        <ImageUploader uponUploadSuccess={handleImageUploadSuccess} />
        {imageUploaded && <JsonFetcher fileNameWithExtension={fileName} />}
      </div>
    </div>
  );
}

export default App;
