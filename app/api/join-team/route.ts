import connectDB from "@/lib/mongodb";
import Application from "@/models/Application";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const newApp = await Application.create(body);
    return NextResponse.json({ message: "Success", data: newApp }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const apps = await Application.find().sort({ createdAt: -1 });
    return NextResponse.json(apps, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Fetch failed" }, { status: 500 });
  }
}