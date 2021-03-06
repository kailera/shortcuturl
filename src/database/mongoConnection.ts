import mongoose from "mongoose";
import { config } from "../config/constants";

export class MongoConnection {
  public async connect(): Promise<void> {
    try {
      await mongoose.connect(config.MONGO_CONNECTION);
      console.log("[database connection] db connected successfully!");
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }
}
