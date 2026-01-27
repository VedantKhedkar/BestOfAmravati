// app/api/leads/route.ts
import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';

// Define Lead schema
const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  profession: {
    type: String,
    required: true,
    enum: ['Business Owner', 'Content Creator', 'Local Audience']
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    match: /^[6-9]\d{9}$/
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  source: {
    type: String,
    default: 'chatbot'
  },
  status: {
    type: String,
    default: 'new'
  },
  contacted: {
    type: Boolean,
    default: false
  }
});

// Check if model exists, otherwise create it
const Lead = mongoose.models.Lead || mongoose.model('Lead', leadSchema);

// Connect to MongoDB
async function connectToDatabase() {
  if (mongoose.connections[0].readyState) {
    return;
  }
  
  const MONGODB_URI = process.env.MONGODB_URI;
  
  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined in environment variables');
  }
  
  await mongoose.connect(MONGODB_URI);
}

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    
    const body = await request.json();
    const { name, profession, mobile } = body;

    // Validate required fields
    if (!name || !profession || !mobile) {
      return NextResponse.json(
        { error: 'Name, profession, and mobile are required' },
        { status: 400 }
      );
    }

    // Validate mobile number format
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobile.replace(/\D/g, ''))) {
      return NextResponse.json(
        { error: 'Invalid mobile number format' },
        { status: 400 }
      );
    }

    // Validate profession
    const validProfessions = ['Business Owner', 'Content Creator', 'Local Audience'];
    if (!validProfessions.includes(profession)) {
      return NextResponse.json(
        { error: 'Invalid profession' },
        { status: 400 }
      );
    }

    // Clean mobile number
    const cleanMobile = mobile.replace(/\D/g, '');

    // Check if lead with same mobile already exists
    const existingLead = await Lead.findOne({ mobile: cleanMobile });

    if (existingLead) {
      // Update existing lead
      existingLead.name = name;
      existingLead.profession = profession;
      existingLead.timestamp = new Date();
      await existingLead.save();
      
      return NextResponse.json(
        { 
          message: 'Lead updated successfully', 
          lead: existingLead,
          isNew: false 
        },
        { status: 200 }
      );
    }

    // Create new lead
    const newLead = new Lead({
      name,
      profession,
      mobile: cleanMobile,
      timestamp: new Date(),
      source: 'chatbot',
      status: 'new',
      contacted: false
    });

    await newLead.save();

    return NextResponse.json(
      {
        message: 'Lead saved successfully',
        lead: newLead,
        isNew: true
      },
      { status: 201 }
    );

  } catch (error: any) {
    console.error('Error saving lead:', error);
    
    // Handle duplicate key error
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'Mobile number already exists' },
        { status: 409 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to save lead', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();
    
    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get('limit') || '50');
    const page = parseInt(url.searchParams.get('page') || '1');
    const skip = (page - 1) * limit;

    const leads = await Lead.find()
      .sort({ timestamp: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Lead.countDocuments();

    return NextResponse.json({
      leads,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit)
      }
    }, { status: 200 });

  } catch (error: any) {
    console.error('Error fetching leads:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leads', details: error.message },
      { status: 500 }
    );
  }
}
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();
    const { id } = params;

    if (!id) {
      return NextResponse.json({ error: 'Lead ID is required' }, { status: 400 });
    }

    const deletedLead = await Lead.findByIdAndDelete(id);

    if (!deletedLead) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Lead deleted successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error deleting lead:', error);
    return NextResponse.json({ error: 'Failed to delete lead', details: error.message }, { status: 500 });
  }
}

// --- PATCH LOGIC (For Status Updates) ---
export async function PATCH(
    request: NextRequest,
    { params }: { params: { id: string } }
  ) {
    try {
      await connectToDatabase();
      const { id } = params;
      const body = await request.json();
  
      const updatedLead = await Lead.findByIdAndUpdate(
        id,
        { status: body.status },
        { new: true }
      );
  
      if (!updatedLead) {
        return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
      }
  
      return NextResponse.json(updatedLead, { status: 200 });
    } catch (error: any) {
      return NextResponse.json({ error: 'Update failed', details: error.message }, { status: 500 });
    }
  }