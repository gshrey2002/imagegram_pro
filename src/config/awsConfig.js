import AWS from "aws-sdk"
import { AWS_ACCESS_KEY, AWS_REGION, AWS_SECRET_ACCCESS_KEY } from "./serverConfig";

const S3=new AWS.S3({
    region: AWS_REGION,
    accessKeyId:AWS_ACCESS_KEY,
    secretAccessKey:AWS_SECRET_ACCCESS_KEY
});
export default S3;