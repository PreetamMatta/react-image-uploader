import React, { useEffect, useState } from "react";
import AWS from "./aws-config";
import JsonCard from "./JsonCard";

const JsonFetcher = ({ fileNameWithExtension }) => {
  console.log("JSON Fetcher Called");
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchJsonData = async () => {
      try {
        // Wait for 5 minutes (300,000 milliseconds)
        await new Promise((resolve) => setTimeout(resolve, 6000));
        const fileName = fileNameWithExtension.replace(/\.[^/.]+$/, "");
        console.log(fileName);

        const s3 = new AWS.S3();
        const params = {
          Bucket: "kubex-identity-doc-poc",
          Key: `identity-output-file/${fileName}.json`, // Adjust the path to match your JSON file
        };

        const response = await s3.getObject(params).promise();
        const parsedData = JSON.parse(response.Body.toString("utf-8"));
        setJsonData(parsedData);
      } catch (error) {
        console.error("Error fetching JSON from S3:", error);
      }
    };

    fetchJsonData();
  }, [fileNameWithExtension]);

  return (
    <div>
      {jsonData ? (
        <JsonCard jsonData={jsonData} />
      ) : (
        // <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        <p>Loading JSON data...</p>
      )}
    </div>
  );
};

export default JsonFetcher;
