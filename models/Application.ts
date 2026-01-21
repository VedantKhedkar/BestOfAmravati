import mongoose, { Schema, model, models } from "mongoose";
import { IApplication } from "@/types";

const ApplicationSchema = new Schema<IApplication>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, required: true },
  portfolio: { type: String, required: true },
  address: { type: String, required: true },
  status: { type: String, default: "New" },
}, { timestamps: true });

// Ensure it uses the Application model, not Booking
const Application = models.Application || model<IApplication>("Application", ApplicationSchema);

export default Application;