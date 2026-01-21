import dbConnect from "@/lib/mongodb"; // Your provided file
import Lead from "@/models/Lead"; // The schema created above
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect(); // Open the connection
    const leads = await Lead.find({}).sort({ createdAt: -1 }); // Fetch data
    return NextResponse.json(leads); // Return valid JSON
  } catch (error) {
    return NextResponse.json({ error: "Database Connection Failed" }, { status: 500 });
  }
}