import { NextResponse } from "next/server";

export async function GET(req) {
  const reqHeaders = new Headers(req.headers);
  return NextResponse.json({
    msg: "This is product List",
  });
}

export async function POST(req) {
  //get request body from client
  const res = await req.json();

  // get form data from client
  const formData = await req.formData();
  console.log(
    formData.get("title"),
    "get title value from formData from client"
  );

  return NextResponse.json({
    msg: "POST Success",
    status: 201,
  });
}
