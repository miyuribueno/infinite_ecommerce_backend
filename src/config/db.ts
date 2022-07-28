import mongoose from "mongoose";

const connectDB = async () => {
  if (typeof process.env.MONGO_URI === "string") {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to database");
  }
};

export default connectDB;
