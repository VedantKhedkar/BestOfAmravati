// app/models/Lead.ts
import mongoose from 'mongoose';

const LeadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  profession: {
    type: String,
    required: [true, 'Profession is required'],
    enum: {
      values: ['Business Owner', 'Content Creator', 'Local Audience'],
      message: '{VALUE} is not a valid profession'
    }
  },
  mobile: {
    type: String,
    required: [true, 'Mobile number is required'],
    unique: true,
    match: [/^[6-9]\d{9}$/, 'Please enter a valid Indian mobile number']
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  source: {
    type: String,
    default: 'chatbot',
    enum: ['chatbot', 'website', 'manual', 'other']
  },
  status: {
    type: String,
    default: 'new',
    enum: ['new', 'contacted', 'qualified', 'converted', 'rejected']
  },
  contacted: {
    type: Boolean,
    default: false
  },
  lastContacted: {
    type: Date,
    default: Date.now
  },
  notes: [{
    content: String,
    createdAt: {
      type: Date,
      default: Date.now
    },
    createdBy: String
  }]
}, {
  timestamps: true // Adds createdAt and updatedAt automatically
});

// Create indexes for faster queries
LeadSchema.index({ mobile: 1 }, { unique: true });
LeadSchema.index({ status: 1 });
LeadSchema.index({ profession: 1 });
LeadSchema.index({ timestamp: -1 });
LeadSchema.index({ source: 1 });

// Check if model already exists to prevent recompilation
const Lead = mongoose.models.Lead || mongoose.model('Lead', LeadSchema);

export default Lead;