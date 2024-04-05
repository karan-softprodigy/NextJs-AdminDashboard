"use server";
import dbConnection from "@/lib/dbConnection";
import { UserDashboard as UserDashboardModel } from "./models";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { signIn } from "../auth";

export const handleSubmitLoginForm = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return {
        ...prevState,
        error: "Wrong Credentials",
      };
    }
    throw err;
  }
};

export const getDashboardUserList = async (searchQuery, page) => {
  const regex = new RegExp(searchQuery, "i"); //to make search case insensitive, i.e capital and small both letters can be entered in search box
  const ITEM_PER_PAGE = 4;
  try {
    await dbConnection();
    const count = await UserDashboardModel.find({
      username: { $regex: regex },
    }).count();
    const users = await UserDashboardModel.find({
      username: { $regex: regex },
    })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    return { count, users };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Fetch Users");
  }
};

export const getDashboardUserById = async (userId) => {
  try {
    await dbConnection();
    const userById = await UserDashboardModel.findById(userId);
    return userById;
  } catch (error) {
    console.log(error);
    // throw new Error("Failed to Fetch user by id");
  }
};

export const addUser = async (formData) => {
  const { username, email, password } = Object.fromEntries(formData);

  // try {
  await dbConnection();
  // const salt = await bcrypt.genSalt(10);
  // const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = await UserDashboardModel.create({
    username: username, // key name should be same as saved in database
    email: email,
    password: password,
  });
  if ("_id" in newUser) {
    console.log("User added Success");
    revalidatePath("/userdashboard/users");
    redirect("/userdashboard/users");
  } else {
    console.log("Failed to create new user!");
  }
  // } catch (err) {
  //   console.log(err);
  //   // throw new Error("Failed to create new user!");
  // }
};

export const updateUser = async (formData) => {
  const { id, username, email, password } = Object.fromEntries(formData);
  await dbConnection();
  const dataToUpdate = {
    username,
    password,
    email,
  };
  const updateUser = await UserDashboardModel.findByIdAndUpdate(
    id,
    dataToUpdate
  );

  if ("_id" in updateUser) {
    revalidatePath("/userdashboard/users");
    redirect("/userdashboard/users");
  } else {
    console.log("Failed to update user!");
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  await dbConnection();

  const deleteUser = await UserDashboardModel.findByIdAndDelete(id);

  if ("_id" in deleteUser) {
    revalidatePath("/userdashboard/users");
  } else {
    console.log("Failed to delete user!");
  }
};
