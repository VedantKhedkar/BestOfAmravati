import React from "react";

// --- CHATBOT & UI TYPES ---
export interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: string;
}

export interface ServiceCard {
  title: string;
  icon: React.ReactNode;
  desc: string;
  features: string[];
  color: string;
  bg: string;
  text: string;
}

export interface FeatureItem {
  title: string;
  desc: string;
  icon: string;
  color: string;
}

export interface QuickQuestion {
  text: string;
}

export interface AIReponses {
  [key: string]: string[];
}

// --- NEW DATABASE TYPES (For Dashboard Connection) ---

export interface IBooking {
  _id?: string;           // From MongoDB
  businessName: string;
  ownerName: string;
  phone: string;
  email: string;
  status: "PAID" | "Processing" | "Completed" | "Cancelled";
  amount: string;         // e.g., "₹3,500"
  createdAt?: string;     // ISO Date string
}

export interface IApplication {
  _id?: string;           // From MongoDB
  name: string;
  email: string;
  phone: string;
  role: string;
  portfolio: string;
  address: string;
  status: "New" | "Interviewing" | "Rejected" | "Hired";
  createdAt?: string;     // ISO Date string
}