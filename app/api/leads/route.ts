import dbConnect from "@/lib/mongodb"; // Ensure path is correct
import Lead from "@/models/Lead";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    await dbConnect(); // Establishes connection to MongoDB Atlas
    const body = await req.json();
    
    // Check if the required chatbot fields are present
    const { name, mobile, profession } = body;
    if (!name || !mobile || !profession) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const newLead = await Lead.create(body);
    return NextResponse.json({ success: true, data: newLead }, { status: 201 });
  } catch (error: any) {
    console.error("Database Save Error:", error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const leads = await Lead.find({}).sort({ createdAt: -1 });
    return NextResponse.json(leads);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}