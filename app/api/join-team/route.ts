import dbConnect from "@/lib/mongodb"; 
import Application from "@/models/Application";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    
    // This will now only look for Application fields (name, email, etc.)
    const newEntry = await Application.create(body);
    
    return NextResponse.json({ success: true, data: newEntry }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const data = await Application.find({}).sort({ createdAt: -1 });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Fetch failed" }, { status: 500 });
  }
}