"use server";
import dbConnection from "@/lib/dbConnection";
import UserModel from "@/models/Users";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getUserList = async () => {
  await dbConnection();
  const userResult = await UserModel.find();
  return userResult;
};

export const deleteUser = async (userId) => {
  try {
    await dbConnection();
    const userResult = await UserModel.findByIdAndDelete(userId);
    console.log(userResult, "userResult in Delete");
    return userResult;
  } catch (error) {
    console.log(error, "ERROR");
  }
  //   redirect(`/users/${id}`);
  //   revalidatePath(`/users/${id}`, "page"); //this should be the url where latest data will be reflected on the UI after submitting the form
};

export const addUser = async (formData) => {
  await dbConnection();
  const userResult = await UserModel.create({
    name: formData.get("name"), // key name should be same as saved in database
    age: formData.get("age"),
    email: formData.get("email"),
  });
  return userResult;
};
