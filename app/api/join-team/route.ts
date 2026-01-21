import connectDB from '@/lib/mongodb';
import Application from '@/models/Application';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // 1. Establish database connection
    await connectDB();
    
    // 2. Parse the incoming form data
    const body = await req.json();
    
    // 3. Create the entry in MongoDB
    const newEntry = await Application.create(body);

    return NextResponse.json({ success: true, data: newEntry }, { status: 201 });
  } catch (error: any) {
    console.error("Submission Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// GET route for the Dashboard to see these entries
export async function GET() {
  try {
    await connectDB();
    const data = await Application.find({}).sort({ createdAt: -1 });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Fetch failed" }, { status: 500 });
  }
}