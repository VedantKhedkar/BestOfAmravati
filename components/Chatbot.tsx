"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Drawer,
  Box,
  IconButton,
  Typography,
  TextField,
  Button,
  Chip,
  Avatar,
  Badge,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import BoltIcon from "@mui/icons-material/Bolt";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import PersonIcon from "@mui/icons-material/Person";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import PhoneIcon from "@mui/icons-material/Phone";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BusinessIcon from "@mui/icons-material/Business";
import FeaturedVideoIcon from "@mui/icons-material/FeaturedVideo";
import WorkIcon from "@mui/icons-material/Work";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarsIcon from "@mui/icons-material/Stars";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MicIcon from "@mui/icons-material/Mic";
import MoodIcon from "@mui/icons-material/Mood";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import VerifiedIcon from "@mui/icons-material/Verified";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import DiamondIcon from "@mui/icons-material/Diamond";

// Use relative path to go UP one level then into app folder
import { getAIResponse } from "@/app/utllis/aiResponses";
import { Message } from "@/app/types";

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

interface QuickQuestion {
  id: number;
  question: string;
  answer: string;
  icon: React.ReactNode;
  color: string;
}

const quickQuestions: QuickQuestion[] = [
  {
    id: 1,
    question: "What is Best of Amravati?",
    answer:
      "Best of Amravati is a premium digital platform promoting local businesses in Amravati. We help businesses grow through video promotions, social media marketing, and digital branding.",
    icon: <BusinessIcon sx={{ fontSize: 14 }} />,
    color: "#EC4899",
  },
  {
    id: 2,
    question: "How much does it cost?",
    answer:
      "Prices start from just ₹3,500 Only. We offer various packages tailored to your business needs.",
    icon: <AttachMoneyIcon sx={{ fontSize: 14 }} />,
    color: "#8B5CF6",
  },
  {
    id: 3,
    question: "What services?",
    answer:
      "1. Video production for businesses\n2. Social media marketing\n3. Instagram promotions\n4. Business directory listing\n5. Customer review management\n6. WhatsApp promotions",
    icon: <FeaturedVideoIcon sx={{ fontSize: 14 }} />,
    color: "#3B82F6",
  },
  {
    id: 4,
    question: "How to get featured?",
    answer:
      "Register your Amravati-based business with us. We review quality, customer reviews, and uniqueness. Selected businesses get featured on our platform.",
    icon: <AutoAwesomeIcon sx={{ fontSize: 14 }} />,
    color: "#10B981",
  },
  {
    id: 5,
    question: "Success stories",
    answer:
      "Yes! We've featured restaurants, salons, gyms, clinics, and stores. We'll show you success stories and video samples of local businesses.",
    icon: <WhatshotIcon sx={{ fontSize: 14 }} />,
    color: "#F59E0B",
  },
  {
    id: 6,
    question: "Are you hiring?",
    answer:
      "Yes! We need video editors, content writers, marketing executives, and sales reps in Amravati. Send your resume to our email.",
    icon: <WorkIcon sx={{ fontSize: 14 }} />,
    color: "#EF4444",
  },
  {
    id: 7,
    question: "Production time",
    answer:
      "Video production takes 3-5 days. We shoot, edit, and deliver complete packages with professional quality.",
    icon: <ScheduleIcon sx={{ fontSize: 14 }} />,
    color: "#8B5CF6",
  },
  {
    id: 8,
    question: "Social reach",
    answer:
      "We reach 1 Lakh+ audience across Instagram, Facebook, and WhatsApp. Featured businesses get increased visibility and customers.",
    icon: <InstagramIcon sx={{ fontSize: 14 }} />,
    color: "#EC4899",
  },
];

// Enhanced Q&A database
const enhancedQADatabase = [
  {
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon"],
    response: "Hello! 👋 How can I assist you today?",
  },
  {
    keywords: ["thank", "thanks", "thank you"],
    response: "You're welcome! 😊 Happy to help you grow your business!",
  },
  {
    keywords: ["bye", "goodbye", "exit", "close"],
    response: "Thank you for chatting! 🌟 We'll contact you soon!",
  },
  {
    keywords: ["contact", "call", "phone", "number"],
    response:
      "📞 Call us: 9876543210\n📧 Email: contact@bestofamravati.com\n⏰ Available: 10 AM to 7 PM",
  },
  {
    keywords: ["address", "location", "office", "where"],
    response:
      "📍 Our office: Behind Delhi Public School, Ravikiran colony, Amravati, Maharashtra",
  },
  {
    keywords: ["video", "video production", "shoot", "camera"],
    response:
      "🎬 Professional video services:\n• Product showcases\n• Customer testimonials\n• Business tours\n• Promotional ads\n💰 Starting at ₹4,999",
  },
  {
    keywords: ["instagram", "insta", "ig", "social media"],
    response:
      "📱 Instagram packages:\n• Posts & Reels: ₹999/month\n• Story promotions: ₹499/week\n• Full management: ₹2,999/month",
  },
  {
    keywords: ["whatsapp", "wp", "message"],
    response:
      "💬 WhatsApp promotions:\n• Broadcast to 10,000+ users\n• Business showcase\n• Offer announcements\n💰 Starting at ₹1,999/month",
  },
  {
    keywords: ["website", "web", "online", "site"],
    response:
      "🌐 Website services:\n• Business listing: FREE\n• Featured profile: ₹1,999/year\n• Premium listing: ₹4,999/year",
  },
  {
    keywords: ["customer", "client", "review", "rating"],
    response:
      "⭐ Review management:\n• Collect customer reviews\n• Respond to feedback\n• Improve ratings\n💰 Starting at ₹999/month",
  },
  {
    keywords: ["start", "begin", "join", "register"],
    response:
      "🚀 Get started:\n1. Share business details\n2. Choose package\n3. Make payment\n4. Get featured in 2 days",
  },
  {
    keywords: ["payment", "pay", "money", "fee"],
    response:
      "💳 Payment options:\n• Google Pay/PhonePe\n• Bank transfer\n• Cash (office)\n⚡ 50% advance, 50% on delivery",
  },
  {
    keywords: ["time", "duration", "how long", "days"],
    response:
      "⏱️ Timelines:\n• Video: 3-7 days\n• Social media: 1-2 days\n• Full package: 7-10 days\n⚡ Urgent service available",
  },
];

// Predefined personalized responses
const personalizedResponses = (userName: string) => ({
  greeting: `🌟 Welcome ${userName}! I'm your AI Assistant from Best of Amravati. Let's grow your business together!`,
  welcome: `🎯 Perfect timing ${userName}! I'm here to help you boost your business in Amravati.`,
  help: `How can I assist you today ${userName}? Ask about our services, pricing, or success stories! 💫`,
  default: `I'm here to help ${userName}! Let's make your business shine in Amravati! ✨`,
  mobilePrompt: `📱 Excellent ${userName}! Please share your mobile number. Our expert will call within 30 minutes with custom solutions.`,
  thanks: `✅ Perfect ${userName}! Our team will contact you within 30 minutes with complete details. Get ready for amazing results! 🚀`,
  serviceInterest: `🎉 Great choice ${userName}! You're one step closer to amazing growth. Our team will guide you perfectly.`,
});

export default function Chatbot({ isOpen, onClose }: ChatbotProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState<string>("");
  const [hasAskedForName, setHasAskedForName] = useState(false);
  const [isNameCollected, setIsNameCollected] = useState(false);
  const [isAwaitingMobile, setIsAwaitingMobile] = useState(false);
  const [lastQuestionType, setLastQuestionType] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "🌟 Hello! I'm your BOA AI Assistant. What's your name?",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);

  // Ask for name on initial load
  useEffect(() => {
    if (isOpen && !hasAskedForName) {
      setHasAskedForName(true);
    }
  }, [isOpen, hasAskedForName]);

  // Function to validate mobile number
  const isValidMobile = (mobile: string): boolean => {
    const mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(mobile.replace(/\D/g, ""));
  };

  // Enhanced AI response function
  const getEnhancedAIResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();

    // Check enhanced database first
    for (const qa of enhancedQADatabase) {
      for (const keyword of qa.keywords) {
        if (lowerInput.includes(keyword)) {
          return qa.response;
        }
      }
    }

    // Use existing AI response as fallback
    return getAIResponse(userInput);
  };

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const currentInput = inputMessage.trim();
    const userMsg: Message = {
      id: messages.length + 1,
      text: currentInput,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMsg]);

    // If name hasn't been collected yet
    if (!isNameCollected) {
      const name = currentInput;
      setUserName(name);
      setInputMessage("");
      setIsLoading(true);

      setTimeout(() => {
        const responses = personalizedResponses(name);
        const botMsg: Message = {
          id: messages.length + 2,
          text: `${responses.greeting}\n\n${responses.help}`,
          sender: "bot",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsNameCollected(true);
        setIsLoading(false);
      }, 800);
    }
    // If awaiting mobile number
    else if (isAwaitingMobile) {
      if (isValidMobile(currentInput)) {
        setInputMessage("");
        setIsLoading(true);

        setTimeout(() => {
          const responses = personalizedResponses(userName);
          const botMsg: Message = {
            id: messages.length + 2,
            text: `🎉 ${responses.thanks}\n\n📱 Mobile: ${currentInput}\n⏰ Contact within: 30 minutes\n🎯 Service: ${lastQuestionType}\n\nOur expert will call you shortly! ✨`,
            sender: "bot",
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          };
          setMessages((prev) => [...prev, botMsg]);
          setIsAwaitingMobile(false);
          setIsLoading(false);
        }, 800);
      } else {
        setInputMessage("");
        setIsLoading(true);

        setTimeout(() => {
          const botMsg: Message = {
            id: messages.length + 2,
            text: "📱 Please enter a valid 10-digit Indian mobile number starting with 6-9.\nExample: 9876543210",
            sender: "bot",
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          };
          setMessages((prev) => [...prev, botMsg]);
          setIsLoading(false);
        }, 800);
      }
    }
    // Normal conversation flow
    else {
      setInputMessage("");
      setIsLoading(true);

      const lowerInput = currentInput.toLowerCase();
      let isServiceQuery = false;

      // Service query detection
      if (
        lowerInput.includes("price") ||
        lowerInput.includes("cost") ||
        lowerInput.includes("package")
      ) {
        isServiceQuery = true;
        setLastQuestionType("Pricing Information");
      } else if (
        lowerInput.includes("service") ||
        lowerInput.includes("offer")
      ) {
        isServiceQuery = true;
        setLastQuestionType("Our Services");
      } else if (
        lowerInput.includes("feature") ||
        lowerInput.includes("promote")
      ) {
        isServiceQuery = true;
        setLastQuestionType("Feature/Promotion");
      } else if (
        lowerInput.includes("video") ||
        lowerInput.includes("camera")
      ) {
        isServiceQuery = true;
        setLastQuestionType("Video Production");
      } else if (
        lowerInput.includes("instagram") ||
        lowerInput.includes("social")
      ) {
        isServiceQuery = true;
        setLastQuestionType("Social Media Marketing");
      }

      setTimeout(() => {
        let aiResponse = getEnhancedAIResponse(currentInput);

        // Personalize response
        if (userName) {
          if (aiResponse.includes("Hello") || aiResponse.includes("welcome")) {
            aiResponse = `${userName}, ${aiResponse}`;
          }
          const responses = personalizedResponses(userName);
          if (aiResponse.toLowerCase().includes("how can i help")) {
            aiResponse = responses.help;
          }
          if (
            !aiResponse.startsWith(userName) &&
            !aiResponse.includes("thank")
          ) {
            aiResponse = `${userName}, ${aiResponse}`;
          }
        }

        // If it's a service query, ask for mobile number
        if (isServiceQuery) {
          const responses = personalizedResponses(userName || "");
          aiResponse += `\n\n${responses.mobilePrompt}`;
          setIsAwaitingMobile(true);
        }

        const botMsg: Message = {
          id: messages.length + 2,
          text: aiResponse,
          sender: "bot",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsLoading(false);
      }, 800);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleQuickQuestion = (questionData: QuickQuestion) => {
    if (!isNameCollected) {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: "Please tell me your name first! 😊",
          sender: "bot",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
      return;
    }

    const userMsg: Message = {
      id: messages.length + 1,
      text: questionData.question,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    setTimeout(() => {
      let answer = questionData.answer;
      if (userName) {
        answer = `${userName}, ${answer}`;
      }
      const responses = personalizedResponses(userName || "");
      answer += `\n\n${responses.mobilePrompt}`;

      const botMsg: Message = {
        id: messages.length + 2,
        text: answer,
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsLoading(false);
      setIsAwaitingMobile(true);
      setLastQuestionType(questionData.question);
    }, 800);
  };

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Clear user data when closing
  const handleClose = () => {
    setMessages([
      {
        id: 1,
        text: "🌟 Hello! I'm your BOA AI Assistant. What's your name?",
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setUserName("");
    setIsNameCollected(false);
    setIsAwaitingMobile(false);
    setHasAskedForName(false);
    setLastQuestionType("");
    onClose();
  };

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={handleClose}
      transitionDuration={500}
      sx={{
        "& .MuiDrawer-paper": {
          transition:
            "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease",
        },
      }}
      PaperProps={{
        sx: {
          width: { xs: "100%", sm: "420px", md: "480px" },
          maxWidth: "100vw",
          height: "100%",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #4c1d95 100%)",
          boxShadow: `
            0px 20px 60px rgba(139, 92, 246, 0.3),
            0px 0px 0px 1px rgba(139, 92, 246, 0.1),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.1)
          `,
          borderRadius: { xs: "0", sm: "28px 0 0 28px" },
          borderLeft: "1px solid rgba(139, 92, 246, 0.3)",
          overflow: "hidden",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          opacity: isOpen ? 1 : 0,
        },
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 27, 75, 0.95) 100%)",
        }}
      >
        {/* Animated gradient background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
            `,
            opacity: 0.6,
            zIndex: 0,
          }}
        />

        {/* Floating particles */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 0,
            "&::before": {
              content: '""',
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundImage: `radial-gradient(circle at 20px 20px, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
              animation: "float 20s linear infinite",
            },
          }}
        />

        {/* Modern Header */}
        <Box
          sx={{
            p: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background:
              "linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            position: "relative",
            zIndex: 1,
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          }}
        >
          {/* Glowing border effect */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)",
              animation: "shimmer 3s infinite",
            }}
          />

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* Animated Avatar */}
            <Box className="relative">
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "16px",
                  background:
                    "linear-gradient(135deg, #EC4899 0%, #8B5CF6 50%, #3B82F6 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  animation: "gradientShift 3s ease infinite",
                  boxShadow: "0 8px 32px rgba(236, 72, 153, 0.4)",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: "-2px",
                    background:
                      "linear-gradient(45deg, #EC4899, #8B5CF6, #3B82F6, #EC4899)",
                    borderRadius: "18px",
                    zIndex: -1,
                    animation: "rotate 3s linear infinite",
                    backgroundSize: "400% 400%",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: "0",
                    background:
                      "linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)",
                    borderRadius: "16px",
                    padding: "2px",
                  },
                }}
              >
                <SmartToyIcon sx={{ fontSize: 24, color: "white" }} />
              </Box>
              {/* Online indicator */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: -4,
                  right: -4,
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #10B981, #059669)",
                  border: "3px solid #1e1b4b",
                  boxShadow: "0 0 20px rgba(16, 185, 129, 0.8)",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
            </Box>

            <Box sx={{ flexShrink: 0 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  letterSpacing: "-0.02em",
                  background: "linear-gradient(to right, #ffffff, #e0e7ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <ElectricBoltIcon sx={{ fontSize: 18, color: "#fbbf24" }} />
                {userName ? `Welcome, ${userName}!` : "BOA AI Assistant"}
                <DiamondIcon sx={{ fontSize: 14, color: "#8B5CF6" }} />
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  color: "rgba(255, 255, 255, 0.7)",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mt: 0.5,
                }}
              >
                <VerifiedIcon sx={{ fontSize: 12, color: "#10B981" }} />
                {isAwaitingMobile
                  ? "📱 Share mobile for instant callback"
                  : isNameCollected
                  ? "✨ Premium Business Assistant"
                  : "🌟 Tell me your name to begin"}
              </Typography>
            </Box>
          </Box>

          <IconButton
            onClick={handleClose}
            sx={{
              color: "white",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "12px",
              width: 40,
              height: 40,
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              "&:hover": {
                background: "rgba(236, 72, 153, 0.3)",
                transform: "rotate(90deg) scale(1.1)",
                boxShadow: "0 8px 32px rgba(236, 72, 153, 0.4)",
              },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Chat Messages Container */}
        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            p: 3,
            display: "flex",
            flexDirection: "column",
            gap: 3,
            position: "relative",
            zIndex: 1,
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(236, 72, 153, 0.3) transparent",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "linear-gradient(135deg, #EC4899, #8B5CF6)",
              borderRadius: "4px",
              "&:hover": {
                background: "linear-gradient(135deg, #DB2777, #7C3AED)",
              },
            },
          }}
        >
          {messages.map((message) => (
            <Box
              key={message.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems:
                  message.sender === "user" ? "flex-end" : "flex-start",
                animation:
                  "messageSlide 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              <Box
                sx={{
                  maxWidth: "85%",
                  position: "relative",
                }}
              >
                {/* Message bubble */}
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius:
                      message.sender === "user"
                        ? "20px 20px 6px 20px"
                        : "20px 20px 20px 6px",
                    background:
                      message.sender === "user"
                        ? "linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)"
                        : "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(20px)",
                    color: "white",
                    boxShadow:
                      message.sender === "user"
                        ? "0 8px 32px rgba(236, 72, 153, 0.3)"
                        : "0 8px 32px rgba(0, 0, 0, 0.2)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "1px",
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      position: "relative",
                      zIndex: 1,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {message.text}
                  </Typography>

                  {/* Message footer */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 2,
                      pt: 1,
                      borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      {message.sender === "user" ? (
                        <PersonIcon sx={{ fontSize: 12, opacity: 0.7 }} />
                      ) : (
                        <SmartToyIcon sx={{ fontSize: 12, opacity: 0.7 }} />
                      )}
                      <Typography
                        sx={{
                          fontSize: "0.75rem",
                          opacity: 0.8,
                          fontWeight: 500,
                        }}
                      >
                        {message.sender === "user"
                          ? userName || "You"
                          : "BOA Assistant"}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "0.7rem",
                        opacity: 0.6,
                      }}
                    >
                      {message.timestamp}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}

          {isLoading && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                animation: "fadeIn 0.3s ease-out",
              }}
            >
              <Box
                sx={{
                  p: 2.5,
                  borderRadius: "20px 20px 20px 6px",
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", gap: 0.75 }}>
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #EC4899, #8B5CF6)",
                      animation: "bounce 1.4s infinite",
                    }}
                  />
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #EC4899, #8B5CF6)",
                      animation: "bounce 1.4s infinite 0.2s",
                    }}
                  />
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #EC4899, #8B5CF6)",
                      animation: "bounce 1.4s infinite 0.4s",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  {isAwaitingMobile
                    ? "Processing your request..."
                    : isNameCollected
                    ? "Finding perfect solution..."
                    : "Getting ready to assist..."}
                </Typography>
              </Box>
            </Box>
          )}

          <div ref={messagesEndRef} />
        </Box>

        {/* Quick Questions */}
        {isNameCollected && !isAwaitingMobile && (
          <Box
            sx={{
              p: 2.5,
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(20px)",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              position: "relative",
              zIndex: 1,
              animation: "slideUp 0.4s ease-out",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.85rem",
                color: "rgba(255, 255, 255, 0.9)",
                mb: 2,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <TrendingUpIcon sx={{ fontSize: 16, color: "#8B5CF6" }} />
              Quick questions for {userName}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                flexWrap: "wrap",
              }}
            >
              {quickQuestions.map((questionData) => (
                <Chip
                  key={questionData.id}
                  label={questionData.question}
                  onClick={() => handleQuickQuestion(questionData)}
                  icon={<Box>{questionData.icon}</Box>}
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    color: "white",
                    border: `1px solid ${questionData.color}40`,
                    borderRadius: "20px",
                    height: "32px",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      background: `${questionData.color}20`,
                      borderColor: questionData.color,
                      transform: "translateY(-2px)",
                      boxShadow: `0 6px 20px ${questionData.color}40`,
                    },
                    "& .MuiChip-icon": {
                      color: questionData.color,
                      marginLeft: "8px",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        )}

        {/* Message Input */}
        <Box
          sx={{
            p: 3,
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 1.5,
              alignItems: "flex-end",
            }}
          >
            <IconButton
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "12px",
                width: 40,
                height: 40,
                "&:hover": {
                  background: "rgba(236, 72, 153, 0.2)",
                },
              }}
            >
              <MoodIcon fontSize="small" />
            </IconButton>

            <TextField
              fullWidth
              size="small"
              placeholder={
                isAwaitingMobile
                  ? "Enter 10-digit mobile number..."
                  : !isNameCollected
                  ? "Type your name here..."
                  : `Ask me anything, ${userName}...`
              }
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              multiline
              maxRows={3}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "16px",
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  fontSize: "0.9rem",
                  color: "white",
                  paddingLeft: 2,
                  paddingRight: 1,
                  transition: "all 0.3s ease",
                  "& fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    borderWidth: "1px",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(236, 72, 153, 0.5)",
                    boxShadow: "0 0 0 3px rgba(236, 72, 153, 0.1)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#EC4899",
                    borderWidth: "1px",
                    boxShadow: "0 0 0 4px rgba(236, 72, 153, 0.15)",
                  },
                  "& input::placeholder": {
                    color: "rgba(255, 255, 255, 0.5)",
                  },
                },
                "& .MuiOutlinedInput-input": {
                  paddingTop: "12px",
                  paddingBottom: "12px",
                  color: "white",
                },
              }}
            />

            <Button
              variant="contained"
              onClick={sendMessage}
              disabled={!inputMessage.trim() || isLoading}
              sx={{
                minWidth: "48px",
                width: "48px",
                height: "48px",
                borderRadius: "16px",
                background: inputMessage.trim()
                  ? "linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)"
                  : "rgba(255, 255, 255, 0.1)",
                color: "white",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: inputMessage.trim()
                  ? "0 8px 32px rgba(236, 72, 153, 0.4)"
                  : "none",
                "&:hover": {
                  background: inputMessage.trim()
                    ? "linear-gradient(135deg, #DB2777 0%, #7C3AED 100%)"
                    : "rgba(255, 255, 255, 0.15)",
                  transform: inputMessage.trim() ? "scale(1.05)" : "none",
                  boxShadow: inputMessage.trim()
                    ? "0 12px 40px rgba(236, 72, 153, 0.5)"
                    : "none",
                },
                "&:active": {
                  transform: "scale(0.98)",
                },
                "&:disabled": {
                  background: "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                },
              }}
            >
              {isAwaitingMobile ? (
                <PhoneIcon sx={{ fontSize: 22 }} />
              ) : (
                <SendIcon sx={{ fontSize: 22 }} />
              )}
            </Button>
          </Box>

          <Typography
            sx={{
              fontSize: "0.75rem",
              color: "rgba(255, 255, 255, 0.6)",
              mt: 1.5,
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            {isAwaitingMobile ? (
              <>
                <CheckCircleIcon sx={{ fontSize: 14, color: "#10B981" }} />
                We'll contact within 30 minutes • 100% Secure
              </>
            ) : !isNameCollected ? (
              <>
                <StarsIcon sx={{ fontSize: 14, color: "#F59E0B" }} />
                Enter name for personalized business solutions
              </>
            ) : (
              <>
                <SupportAgentIcon sx={{ fontSize: 14, color: "#EC4899" }} />
                Premium business assistance • 24/7 Support
              </>
            )}
          </Typography>
        </Box>
      </Box>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes bounce {
          0%,
          60%,
          100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-8px);
          }
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.8);
          }
          50% {
            box-shadow: 0 0 30px rgba(16, 185, 129, 1);
          }
        }

        @keyframes messageSlide {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          100% {
            transform: translateY(-1000px) rotate(360deg);
          }
        }
      `}</style>
    </Drawer>
  );
}
