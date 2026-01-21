// app/api/leads/route.ts
import dbConnect from "@/lib/mongodb";
import Lead from "@/models/Lead";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect(); //
    const leads = await Lead.find({}).sort({ createdAt: -1 }); //
    return NextResponse.json(leads); // This ensures JSON is returned
  } catch (error) {
    // Explicitly return JSON even on error to prevent HTML error pages
    return NextResponse.json({ error: "Fetch failed" }, { status: 500 });
  }
}