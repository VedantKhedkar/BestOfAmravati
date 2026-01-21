import Booking from "@/models/Booking";
import dbConnect from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const newBooking = await Booking.create(body);
    return NextResponse.json({ success: true, data: newBooking }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const data = await Booking.find({}).sort({ createdAt: -1 });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Fetch failed" }, { status: 500 });
  }
}