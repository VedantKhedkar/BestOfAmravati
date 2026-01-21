import mongoose, { Schema, model, models } from "mongoose";
import { IBooking } from "../types";

const BookingSchema = new Schema<IBooking>({
  businessName: { type: String, required: true },
  ownerName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  status: { type: String, default: "PAID" },
}, { timestamps: true });

export default models.Booking || model<IBooking>("Booking", BookingSchema);