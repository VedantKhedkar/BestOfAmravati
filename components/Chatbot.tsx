"use client";

import React, { useState, useEffect, useRef } from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { MessageCircle, Sparkles } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: string;
}

export default function Chatbot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your BOA Assistant. How can I help you grow your business in Amravati today?",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    "What is Best of Amravati?",
    "What services do you provide?",
    "How much does it cost?",
    "How can I contact you?",
    "Are you hiring?",
    "Payment issue?",
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isChatLoading]);

  const getAIResponse = (input: string) => {
    const query = input.toLowerCase();
    if (query.includes("payment"))
      return "If you are facing a payment issue, please email us at bestofamravati@gmail.com with the exact details. Please include transaction screenshots. Our team will reach you shortly!";
    if (query.includes("what is best of amravati"))
      return "Best of Amravati is a digital platform that promotes trusted local businesses in Amravati.";
    if (query.includes("service") || query.includes("provide"))
      return "We create professional reels (30-60s) and promote them across Instagram, Facebook, and YouTube to give your business high visibility.";
    if (query.includes("cost") || query.includes("price"))
      return "Pricing depends on your specific promotion plan. Please email us at bestofamravati@gmail.com for a detailed quote.";
    if (query.includes("contact") || query.includes("reach"))
      return "You can reach us via WhatsApp, phone call, or email at bestofamravati@gmail.com.";
    if (query.includes("hiring"))
      return "We are always looking for local talent! Please email your portfolio to bestofamravati@gmail.com.";
    return "For more details, I can connect you with a BOA human expert. Share your number or email us at bestofamravati@gmail.com!";
  };

  const handleSendMessage = (text: string) => {
    const trimmedText = text.trim();
    if (!trimmedText) return;

    const userMsg: Message = {
      id: Date.now(),
      text: trimmedText,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage(""); 
    setIsChatLoading(true); 

    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        text: getAIResponse(trimmedText),
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsChatLoading(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
  {/* FLOATING CHAT TRIGGER BUTTON */}
<div className="fixed bottom-8 right-8 z-50">
  <button
    onClick={() => setIsChatOpen(true)}
    className="group relative flex items-center justify-center transition-all duration-500 active:scale-95"
  >
    {/* 1. Dynamic Background Aura (Using #8b5cf6, #ec4899, #f43f5e) */}
    <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-to-r from-[#8b5cf6] via-[#ec4899] to-[#f43f5e] opacity-30 blur-2xl transition-all duration-700 group-hover:opacity-70 group-hover:blur-3xl"></div>

    {/* 2. Main Button Body (Glassmorphism) */}
    <div className="relative flex items-center gap-3 overflow-hidden rounded-full border border-white/20 bg-pink-600 px-6 py-4 backdrop-blur-2xl transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] group-hover:border-white/40 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]">
      
      {/* Moving Shimmer Overlay */}
      <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]"></div>

      {/* 3. The Energy Core (Icon Container) */}
      <div className="relative flex items-center justify-center">
        <Sparkles 
          size={20} 
          className="relative z-10 text-white transition-all duration-500 group-hover:rotate-[30deg] group-hover:scale-125" 
          fill="#ec4899"
          fillOpacity={0.4}
        />
        {/* Pulsing internal glow behind icon */}
        <div className="absolute inset-0 blur-md bg-[#8b5cf6] opacity-60 rounded-full animate-pulse"></div>
      </div>

      {/* 4. Sleek Typography */}
      <span className="relative z-10 text-sm font-bold tracking-[0.15em] text-white uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
        Let's Chat
      </span>

      {/* 5. Modern "Live" Indicator */}
      <div className="relative flex h-2 w-2 ml-1">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#000000] opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ffffff] shadow-[0_0_8px_#ec4899]"></span>
      </div>
    </div>

    {/* 6. Ground Glow Effect */}
    <div className="absolute -bottom-4 h-6 w-3/4 rounded-full bg-gradient-to-r from-[#8b5cf6] via-[#ec4899] to-[#f43f5e] opacity-10 blur-xl transition-all group-hover:opacity-40"></div>
  </button>
</div>
      <Drawer
        anchor="right"
        open={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        // MODIFIED: PaperProps to prevent full-screen mobile view
        PaperProps={{
          sx: {
            width: { xs: "85%", sm: "380px", md: "420px" }, // xs: 85% leaves space on the left
            height: "100%",
            display: "flex",
            flexDirection: "column",
            background: "#ffffff",
            borderRadius: { xs: "20px 0 0 20px", sm: "20px 0 0 20px" },
            borderLeft: "1px solid rgba(139, 92, 246, 0.1)",
          },
        }}
      >
        {/* Header - Purple Brand Gradient */}
        <Box sx={{ 
          p: 2, 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          background: "linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)", 
          color: "white",
          boxShadow: "0 4px 15px rgba(139, 92, 246, 0.3)"
        }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box sx={{ 
              width: 38, height: 38, borderRadius: "12px", 
              background: "rgba(255, 255, 255, 0.2)", 
              backdropFilter: "blur(10px)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" 
            }}>🤖</Box>
            <Box>
              <Typography sx={{ fontWeight: 700, fontSize: "1rem", lineHeight: 1.2 }}>AI Assistant</Typography>
              <Typography sx={{ fontSize: "0.7rem", opacity: 0.9 }}>Expert in Amravati Business</Typography>
            </Box>
          </Box>
          <IconButton onClick={() => setIsChatOpen(false)} sx={{ color: "white" }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Message Area - Background matching the Lavender/Purple UI theme */}
        <Box sx={{ 
          flexGrow: 1, 
          overflowY: "auto", 
          p: 2, 
          display: "flex", 
          flexDirection: "column", 
          gap: 2, 
          background: "linear-gradient(to bottom, #ffffff 0%, #fdf4ff 100%)" // Lavender fade background
        }}>
          {messages.map((msg) => (
            <Box key={msg.id} sx={{ alignSelf: msg.sender === "user" ? "flex-end" : "flex-start", maxWidth: "85%" }}>
              <Box sx={{
                p: 1.8, borderRadius: msg.sender === "user" ? "20px 20px 0 20px" : "20px 20px 20px 0",
                background: msg.sender === "user" ? "linear-gradient(135deg, #8b5cf6, #d946ef)" : "#ffffff",
                color: msg.sender === "user" ? "white" : "#374151",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                border: msg.sender === "user" ? "none" : "1px solid #f3e8ff"
              }}>
                <Typography sx={{ fontSize: "0.92rem", lineHeight: 1.5 }}>{msg.text}</Typography>
                <Typography sx={{ fontSize: "0.65rem", opacity: 0.6, mt: 0.5, textAlign: "right" }}>{msg.timestamp}</Typography>
              </Box>
            </Box>
          ))}
          {isChatLoading && (
            <Box sx={{ alignSelf: "flex-start", p: 1.5, background: "white", borderRadius: "15px", display: "flex", gap: 0.5, border: "1px solid #f3e8ff" }}>
              <div className="w-1.5 h-1.5 bg-[#8b5cf6] rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-[#d946ef] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-1.5 h-1.5 bg-[#f43f5e] rounded-full animate-bounce [animation-delay:-0.5s]"></div>
            </Box>
          )}
          <div ref={messagesEndRef} />
        </Box>

        {/* Suggestion Buttons - Tag UI Style */}
        <Box sx={{ p: 1.5, background: "white", borderTop: "1px solid #f3e8ff" }}>
          <Box sx={{ display: "flex", gap: 0.8, flexWrap: "wrap" }}>
            {quickQuestions.map((q, i) => (
              <Button 
                key={i} 
                variant="outlined" 
                size="small" 
                onClick={() => handleSendMessage(q)}
                sx={{ 
                  borderRadius: "100px", 
                  textTransform: "none", 
                  fontSize: "0.72rem", 
                  fontWeight: 600,
                  color: "#7c3aed", 
                  borderColor: "#ddd6fe",
                  px: 2,
                  "&:hover": { background: "#fdf4ff", borderColor: "#d946ef" }
                }}
              >
                {q}
              </Button>
            ))}
          </Box>
        </Box>

        {/* Input Area */}
        <Box sx={{ p: 2, borderTop: "1px solid #f3e8ff", background: "white" }}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField 
              fullWidth 
              size="small" 
              placeholder="Type your question..." 
              value={inputMessage} 
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage(inputMessage)}
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "100px", background: "#f9fafb" }}} 
            />
            <Button 
              variant="contained" 
              onClick={() => handleSendMessage(inputMessage)} 
              disabled={!inputMessage.trim() || isChatLoading}
              sx={{ 
                minWidth: "44px", 
                width: "44px", 
                height: "44px", 
                borderRadius: "50%", 
                background: "linear-gradient(135deg, #8b5cf6, #f43f5e)",
                boxShadow: "0 4px 12px rgba(139, 92, 246, 0.3)"
              }}
            >
              <SendIcon fontSize="small" />
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}