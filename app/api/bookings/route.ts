import connectDB from '@/lib/mongodb';
import Booking from '@/models/Booking';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB(); // Always call this first
    const bookings = await Booking.find({}).lean(); // Use lean() for faster read-only
    return NextResponse.json(bookings, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}