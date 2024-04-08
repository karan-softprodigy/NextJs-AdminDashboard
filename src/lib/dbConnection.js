"use server";
import mongoose from "mongoose";

export default async () => {
  try {
    const DB_OPTIONS = {
      dbName: process.env.DB_NAME,
      // key: process.env.DATA_API_KEY,
      // apiKey: process.env.DATA_API_KEY,
      // apiURL: process.env.DATA_API_URL,
      // user: process.env.DB_USERNAME,
      // pass: process.env.DB_PASSWORD,
      // authSource: process.env.DB_AUTH_SOURCE,
    };
    await mongoose.connect(process.env.MONGODB_URI, DB_OPTIONS);
    // await mongoose.connect(process.env.DB_URL, DB_OPTIONS);

    console.log("DB connected successfully...");
  } catch (error) {
    console.log(error);
    // throw new Error(error);
  }
};

// option 2 with condition
// export default async () => {
//   const connection = {};
//   try {
//     const DB_OPTIONS = {
//       dbName: process.env.DB_NAME,
//       user: process.env.DB_USERNAME,
//       pass: process.env.DB_PASSWORD,
//       authSource: process.env.DB_AUTH_SOURCE,
//     };
//     if (connection?.isConnected) return;
//     const db = await mongoose?.connect(process.env.DB_URL, DB_OPTIONS);
//     connection.isConnected = db.connections[0].readyState;
//     console.log("DB connected successfully...");
//   } catch (error) {
//     console.log(error);
//     throw new Error(error);
//   }
// };
