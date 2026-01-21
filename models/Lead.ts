import mongoose, { Schema, model, models } from "mongoose";

export interface ILead {
  name: string;
  mobile: string;
  profession: string;
  source?: string;
  status?: string;
  createdAt?: Date;
}

const LeadSchema = new Schema<ILead>(
  {
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    profession: { type: String, required: true },
    source: { type: String, default: "chatbot" },
    status: { type: String, default: "New" },
  },
  { timestamps: true }
);

// This ensures the model is exported as a default to prevent import errors
const Lead = models.Lead || model<ILead>("Lead", LeadSchema);
export default Lead;