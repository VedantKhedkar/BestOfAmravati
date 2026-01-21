// app/api/leads/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI!;
const DB_NAME = process.env.MONGODB_DB!;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, profession, mobile } = body;

    // Validate required fields
    if (!name || !profession || !mobile) {
      return NextResponse.json(
        { error: 'Name, profession, and mobile are required' },
        { status: 400 }
      );
    }

    // Validate mobile number format (10 digits)
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobile)) {
      return NextResponse.json(
        { error: 'Invalid mobile number format' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const client = await MongoClient.connect(MONGODB_URI);
    const db = client.db(DB_NAME);

    // Check if lead with same mobile already exists
    const existingLead = await db
      .collection('leads')
      .findOne({ mobile });

    if (existingLead) {
      await client.close();
      return NextResponse.json(
        { message: 'Lead already exists', lead: existingLead },
        { status: 200 }
      );
    }

    // Create new lead document
    const leadData = {
      name,
      profession,
      mobile,
      timestamp: new Date().toISOString(),
      source: 'chatbot',
      status: 'new',
      contacted: false,
      notes: [],
    };

    // Insert into leads collection
    const result = await db
      .collection('leads')
      .insertOne(leadData);

    await client.close();

    return NextResponse.json(
      {
        message: 'Lead saved successfully',
        leadId: result.insertedId,
        lead: leadData,
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error saving lead:', error);
    return NextResponse.json(
      { error: 'Failed to save lead' },
      { status: 500 }
    );
  }
}