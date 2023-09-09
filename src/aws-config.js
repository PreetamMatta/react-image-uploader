import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: "AKIA543ERMUMTQ3BGJG7",
  secretAccessKey: "huFiAfiaAwyhV1mPYmNHzaP/JIohTrOYQkJllWXN",
  region: "us-east-1", // e.g., 'us-east-1'
  //   s3BucketName: "textract-put-preetam",
});

export default AWS;
