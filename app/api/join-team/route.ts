import dbConnect from "@/lib/mongodb"; // Ensure this matches your file name in 'lib'
import Booking from "@/models/Booking";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    
    // Validate that data is arriving
    console.log("Incoming Data:", body);

    const newBooking = await Booking.create(body);
    return NextResponse.json({ success: true, data: newBooking }, { status: 201 });
  } catch (error: any) {
    console.error("Database Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}