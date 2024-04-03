import { NextResponse } from "next/server";
export const GET = async (req, context) => {
  console.log(context, "context"); // to get query params from the url endpoint
  return NextResponse.json({
    msg: "This is dynamic product List",
  });
};
