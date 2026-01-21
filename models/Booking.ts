import mongoose, { Schema, model, models } from "mongoose";
import { IBooking } from "@/types";

const BookingSchema = new Schema<IBooking>({
  businessName: { type: String, required: true },
  ownerName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  status: { type: String, default: "PAID" },
}, { timestamps: true });

// Check if model exists before creating to prevent overwrite errors in development
const Booking = models.Booking || model<IBooking>("Booking", BookingSchema);

export default Booking; // This line fixes the "no default export" error