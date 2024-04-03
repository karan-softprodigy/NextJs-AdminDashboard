import { NextResponse } from "next/server";
import dbConnection from "@/lib/dbConnection";
import UserModel from "../../../models/Users";
import { revalidatePath } from "next/cache";

export const GET = async (req) => {
  const path = req.nextUrl.searchParams.get("path");
  console.log(req, "path");
  try {
    await dbConnection();
    const userResult = await UserModel.find();
    if (path) {
      revalidatePath(path);
      return Response.json({
        revalidated: true,
        data: userResult,
        status: 200,
      });
    }
    return NextResponse.json({
      data: userResult,
      status: 200,
      revalidated: false,
    });
  } catch (error) {
    console.log(error, "error");
    return NextResponse.json({ data: "Something Went wrong", status: 400 });
  }
};

export const POST = async (req) => {
  const body = await req.json();
  try {
    await dbConnection();
    const userResult = await UserModel.create(body);
    return NextResponse.json({ data: userResult, status: 201 });
  } catch (error) {
    console.log(error, "error");
    return NextResponse.json({ data: "Something Went wrong", status: 400 });
  }
};
