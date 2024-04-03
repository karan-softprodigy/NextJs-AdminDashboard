import mongoose from "mongoose";

const userSchemaDashboard = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const UserDashboard =
  mongoose.models?.UserDashboard ||
  mongoose.model("UserDashboard", userSchemaDashboard);
