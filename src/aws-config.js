import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "us-east-1", // e.g., 'us-east-1'
  //   s3BucketName: "textract-put-preetam",
});

export default AWS;