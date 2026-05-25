import mongoose from "mongoose";
import { getEnvOrSsm } from "../utils/ssm";

const connectMongo = async () => {
  const mongoUri = await getEnvOrSsm("MONGODB_URI", {
    parameterName: "/acharii/MONGODB_URI",
  });
  return mongoose
    .connect(mongoUri)
    .catch((e) => console.error("Mongoose Client Error: " + e.message));
};

export default connectMongo;
