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
  Dialog,
  DialogContent,
  DialogActions,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import VerifiedIcon from "@mui/icons-material/Verified";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import DiamondIcon from "@mui/icons-material/Diamond";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CreateIcon from "@mui/icons-material/Create";
import PeopleIcon from "@mui/icons-material/People";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkIcon from "@mui/icons-material/Work";
import FeaturedVideoIcon from "@mui/icons-material/FeaturedVideo";
import BoltIcon from "@mui/icons-material/Bolt";
import PhoneIcon from "@mui/icons-material/Phone";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarsIcon from "@mui/icons-material/Stars";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import HandshakeIcon from "@mui/icons-material/Handshake";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkIcon from "@mui/icons-material/Link";
import DescriptionIcon from "@mui/icons-material/Description";
import CelebrationIcon from "@mui/icons-material/Celebration";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ApplyIcon from "@mui/icons-material/PlaylistAddCheck";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LockIcon from "@mui/icons-material/Lock";
import RocketIcon from "@mui/icons-material/Rocket";
import EmailIcon from "@mui/icons-material/Email";
import BadgeIcon from "@mui/icons-material/Badge";

// Use relative path to go UP one level then into app folder
import { getAIResponse } from "@/app/utllis/aiResponses";
import { Message } from "@/types";
import ApplyForm from "./ApplyForm"; // Import the ApplyForm component

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ProfessionButton {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

interface QuickQuestion {
  id: number;
  question: string;
  answer: string;
  icon: React.ReactNode;
  color: string;
  showApplyButton?: boolean;
  showRemainingButtons?: boolean;
  isServiceQuestion?: boolean;
  triggersMobileRequest?: boolean;
}

const professionButtons: ProfessionButton[] = [
  {
    id: 1,
    title: "Business Owner",
    description: "Promote & grow your business",
    icon: <StorefrontIcon sx={{ fontSize: 14 }} />,
    color: "#3B82F6",
    bgColor: "rgba(59, 130, 246, 0.15)",
  },
  {
    id: 2,
    title: "Content Creator",
    description: "Join our creative team",
    icon: <CreateIcon sx={{ fontSize: 14 }} />,
    color: "#EC4899",
    bgColor: "rgba(236, 72, 153, 0.15)",
  },
  {
    id: 3,
    title: "Local Audience",
    description: "Explore local businesses",
    icon: <PeopleIcon sx={{ fontSize: 14 }} />,
    color: "#10B981",
    bgColor: "rgba(16, 185, 129, 0.15)",
  },
];

// Quick questions for Business Owners - MODERN STRUCTURED
const businessOwnerQuestions: QuickQuestion[] = [
  {
    id: 2,
    question: "How I Can Grow My Business?",
    answer: `🚀 Grow Your Buisness

 
🌟 Great! we are here to help you to grow your buisness in Amravati city.`,
    icon: <TrendingUpIcon sx={{ fontSize: 14 }} />,
    color: "#10B981",
    triggersMobileRequest: true,
  },

  {
    id: 1,
    question: "Services",
    answer: ` Our Services
    🌟 Branding, Collaboration, Business Magazine, Digital News, Media.    

• Local Business Listing
• Content Production
• Advertising & Marketing
• Digital Growth Strategy
• Business Collaboration
• Brand Awareness
• Influencer Marketing
• Awards & Recognition`,
    icon: <FeaturedVideoIcon sx={{ fontSize: 14 }} />,
    color: "#3B82F6",
    isServiceQuestion: true,
    showRemainingButtons: true,
    triggersMobileRequest: true,
  },
  {
    id: 3,
    question: "Contact",
    answer: ` 🎯 Address & Contact Details

       🏣 Office Address
      Behind Delhi Public School, Ravikiran Colony,
          Amravati, 444606
         
         
          

   🚨 Contact us:
📞 Call: 89567 27311
✅ WhatsApp: 89567 27311
📧 Email: bestofamravati@gmail.com.com`,

    icon: <BoltIcon sx={{ fontSize: 14 }} />,
    color: "#F59E0B",
    triggersMobileRequest: true,
  },
];

// Quick questions for Content Creators - MODIFIED: Shows roles as bullet points
const contentCreatorQuestions: QuickQuestion[] = [
  {
    id: 1,
    question: "How to Join your team?",
    answer: `🎬 Join Our Creative Team!

🌟 Available Creative Roles:

• Video Creator
• Video Editor  
• Script Writer
• Digital Marketing
• Graphic Designer
• Anchor
• Voice Artist

Click "Apply Now" to start your journey with us.`,
    icon: <GroupsIcon sx={{ fontSize: 14 }} />,
    color: "#EC4899",
    showApplyButton: true,
    showRemainingButtons: true,
    triggersMobileRequest: false,
  },
  {
    id: 2,
    question: "Contact",
    answer: `🎯 Address & Contact Details

    🏣 Office Address
      Behind Delhi Public School, Ravikiran Colony,
          Amravati, 444606
         
         
          

   🚨 Contact us:
📞 Call: 89567 27311
✅ WhatsApp: 89567 27311
📧 Email: bestofamravati@gmail.com.com

`,
    icon: <WorkIcon sx={{ fontSize: 14 }} />,
    color: "#8B5CF6",
    triggersMobileRequest: true,
  },
];

// Quick questions for Local Audience - MODERN STRUCTURED
const localAudienceQuestions: QuickQuestion[] = [
  {
    id: 1,
    question: "What is Best Of Amravati?",
    answer: `📍 Bringing you the best of our city

    • Find Best offers & Discounts from local market of Amravati city.
    • Find trusted local businesses of Amravati city.

📱 **Follow Us for latest updates:**
`,
    icon: <StorefrontIcon sx={{ fontSize: 14 }} />,
    color: "#F59E0B",
    showRemainingButtons: true,
    triggersMobileRequest: true,
  },
  {
    id: 2,
    question: "Contact",
    answer: `🎯 Address & Contact Details
    
         🏣 Office Address
      Behind Delhi Public School, Ravikiran Colony,
          Amravati, 444606
         
         
          

   🚨 Contact us:
📞 Call: 89567 27311
✅ WhatsApp: 89567 27311
📧 Email: bestofamravati@gmail.com.com`,
    icon: <WorkIcon sx={{ fontSize: 14 }} />,
    color: "#8B5CF6",
    triggersMobileRequest: true,
  },
];

// Predefined personalized responses
const personalizedResponses = (userName: string, profession: string) => ({
  greeting: `🌟 Welcome ${userName}!`,
  professionWelcome: `🎯 Thank you for confirming! Now tell me, how can I help you today?`,
  help: `How can I help you today?`,
  mobilePrompt: `Please share your mobile number our Business Consultant team will contact you soon.`,
  thanks: `✅ Perfect ${userName}! Our ${profession} team will contact you soon. Get ready for amazing results! 🚀`,
});

// Application Form Data Interface
interface ApplicationFormData {
  name: string;
  email: string;
  phone: string;
  role: string;
  address: string;
  portfolio: string;
}

// Function to save lead to database
const saveLeadToDatabase = async (name: string, profession: string, mobile: string) => {
  try {
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        profession,
        mobile,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('✅ Lead saved successfully:', data);
      return { success: true, data };
    } else {
      console.error('❌ Failed to save lead:', data.error);
      return { success: false, error: data.error };
    }
  } catch (error) {
    console.error('❌ Error saving lead:', error);
    return { success: false, error: 'Network error' };
  }
};

export default function Chatbot({ isOpen, onClose }: ChatbotProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState<string>("");
  const [userProfession, setUserProfession] = useState<string>("");
  const [hasAskedForName, setHasAskedForName] = useState(false);
  const [isNameCollected, setIsNameCollected] = useState(false);
  const [isProfessionSelected, setIsProfessionSelected] = useState(false);
  const [isAwaitingMobile, setIsAwaitingMobile] = useState(false);
  const [currentQuickQuestions, setCurrentQuickQuestions] = useState<
    QuickQuestion[]
  >([]);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "🌟 Hello! I'm your AI Assistant. Can you please tell me your name?",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [submittedApplication, setSubmittedApplication] =
    useState<ApplicationFormData | null>(null);
  const [clickedButtons, setClickedButtons] = useState<Set<number>>(new Set());
  const [hasAskedForMobile, setHasAskedForMobile] = useState(false);
  const [hasSubmittedMobile, setHasSubmittedMobile] = useState(false);

  // Form submission state
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

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

  // Function to validate email
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Enhanced AI response function with modern formatting
  const getEnhancedAIResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();

    // Modern structured responses for general queries
    const defaultResponses = [
      {
        keywords: ["hello", "hi", "hey", "good morning", "good afternoon"],
        response: `✨ **Hello${userName ? ` ${userName}` : ""}!** 👋



🌟 How can I help you today?
• Business promotion
• Content creation
• Local exploration
• Membership information
• General queries`,
      },
      {
        keywords: ["thank", "thanks", "thank you"],
        response: `🎉 **You're welcome${userName ? ` ${userName}` : ""}!** 😊

🙏 **Happy to help you grow with Best of Amravati!**

💫 **Need anything else?**
• More information
• Specific queries
• Follow-up questions
• Additional assistance`,
      },
      {
        keywords: ["bye", "goodbye", "exit", "close"],
        response: `🌈 **Thank you for chatting${
          userName ? ` ${userName}` : ""
        }!** 🌟

🚀 **We'll contact you soon with exciting opportunities!**

📱 Stay Connected
• WhatsApp: 89567 27311
• Email: contact@bestofamravati.com
• Website: bestofamravati.com

✨ **Have a great day!**`,
      },
      {
        keywords: ["contact", "call", "phone", "number"],
        response: `📞 **Contact Information**

🌟 Best of Amravati Team

📱 Primary Contact
• Mobile: 89567 27311
• WhatsApp: 89567 27311
• Email: contact@bestofamravati.com

⏰ Availability
• Monday to Saturday
• 10:00 AM - 7:00 PM
• Sunday: 11:00 AM - 5:00 PM

📍 Office Address
Behind Delhi Public School
Ravikiran Colony
Amravati, Maharashtra

💬 Quick Response
• WhatsApp: Instant reply
• Call: Within 15 minutes
• Email: Within 2 hours`,
      },
      {
        keywords: ["address", "location", "office", "where"],
        response: `📍 **Our Location**


Behind Delhi Public School,
Ravikiran Colony,
Amravati, Maharashtra
444606


🕒 Visit Us
• Monday to Saturday: 10 AM - 7 PM

• Appointment recommended

📱 Before Visiting
• Call: 89567 27311
• WhatsApp for direction
• Book appointment online`,
      },
    ];

    for (const qa of defaultResponses) {
      for (const keyword of qa.keywords) {
        if (lowerInput.includes(keyword)) {
          return qa.response;
        }
      }
    }

    // Use existing AI response as fallback
    return getAIResponse(userInput);
  };

  // Function to handle mobile number input
  const handleMobileInput = (value: string) => {
    // Allow only numbers
    const numericValue = value.replace(/\D/g, "");

    // Limit to 10 digits
    if (numericValue.length <= 10) {
      setInputMessage(numericValue);
    }
  };

  const sendMessage = async () => {
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
        const responses = personalizedResponses(name, "");
        const botMsg: Message = {
          id: messages.length + 2,
          text: `${responses.greeting}\n\n🎯 Can you please tell me about your profession:`,
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

        // Save lead to database
        const result = await saveLeadToDatabase(userName, userProfession, currentInput);

        setTimeout(() => {
          const teamName =
            userProfession === "Local Audience"
              ? "customer support"
              : "business consultant";

          let responseMessage = `✅ Thank You ${userName}! `;
          
          if (result.success) {
            responseMessage += `Your details have been saved successfully.\n\n📋 **Your Information:**\n• Name: ${userName}\n• Profession: ${userProfession}\n• Mobile: ${currentInput}\n\n`;
          } else {
            responseMessage += `Your details have been submitted.\n\n`;
          }
          
          responseMessage += `Our ${teamName} team will contact you soon.`;

          const botMsg: Message = {
            id: messages.length + 2,
            text: responseMessage,
            sender: "bot",
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          };
          setMessages((prev) => [...prev, botMsg]);
          setIsAwaitingMobile(false);
          setHasAskedForMobile(true);
          setHasSubmittedMobile(true);
          setIsLoading(false);
        }, 800);
      } else {
        setInputMessage("");
        setIsLoading(true);

        setTimeout(() => {
          const botMsg: Message = {
            id: messages.length + 2,
            text: `📱 Mobile Number Required\n\n❗ Please enter a valid 10-digit mobile number.\n\n📝 **Format:** 98XXXXXX90\n\n✅🔒 100% Secure & Private`,
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
    // Normal conversation flow after profession selection
    else if (isProfessionSelected) {
      setInputMessage("");
      setIsLoading(true);

      setTimeout(() => {
        let aiResponse = getEnhancedAIResponse(currentInput);

        // Personalize with name
        if (userName && !aiResponse.includes(userName)) {
          aiResponse = aiResponse
            .replace("Hello!", `Hello ${userName}!`)
            .replace("hello!", `Hello ${userName}!`);
        }

        // Check if it's a service-related query
        const lowerInput = currentInput.toLowerCase();
        const isServiceQuery =
          lowerInput.includes("service") ||
          lowerInput.includes("package") ||
          lowerInput.includes("price") ||
          lowerInput.includes("cost") ||
          lowerInput.includes("join") ||
          lowerInput.includes("apply") ||
          lowerInput.includes("form") ||
          lowerInput.includes("career") ||
          lowerInput.includes("member") ||
          lowerInput.includes("offer");

        // If it's a service query and mobile hasn't been asked yet
        if (isServiceQuery && !hasAskedForMobile) {
          const teamName =
            userProfession === "Local Audience"
              ? "customer support"
              : "business consultant";
          const responses = personalizedResponses(
            userName || "",
            userProfession || ""
          );
          aiResponse += `\n\n${responses.mobilePrompt.replace(
            "business consultant",
            teamName
          )}`;
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

  const handleProfessionSelect = (profession: ProfessionButton) => {
    setUserProfession(profession.title);
    setIsLoading(true);

    const userMsg: Message = {
      id: messages.length + 1,
      text: profession.title,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      const responses = personalizedResponses(userName, profession.title);
      const botMsg: Message = {
        id: messages.length + 2,
        text: `${responses.professionWelcome}`,
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, botMsg]);

      // Set quick questions based on profession
      if (profession.title === "Business Owner") {
        setCurrentQuickQuestions(businessOwnerQuestions);
      } else if (profession.title === "Content Creator") {
        setCurrentQuickQuestions(contentCreatorQuestions);
      } else {
        setCurrentQuickQuestions(localAudienceQuestions);
      }

      // Reset clicked buttons when profession changes
      setClickedButtons(new Set());

      setIsProfessionSelected(true);
      setIsLoading(false);
    }, 800);
  };

  const handleQuickQuestion = (questionData: QuickQuestion) => {
    if (!isNameCollected || !isProfessionSelected) {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: `❗ **Profile Incomplete**\n\n🎯 **Please complete your profile first!** 😊\n\n1. Enter your name\n2. Select your profession\n3. Start exploring options`,
          sender: "bot",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
      return;
    }

    // Mark this button as clicked (remove from display)
    setClickedButtons((prev) => {
      const newSet = new Set(prev);
      newSet.add(questionData.id);
      return newSet;
    });

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

      // Don't add extra message for apply button
      if (questionData.showApplyButton) {
        // The Apply Now button will be shown in the UI below
      }

      // Check if this question should trigger mobile request AND mobile hasn't been asked yet
      if (
        questionData.triggersMobileRequest &&
        !hasAskedForMobile &&
        !isAwaitingMobile
      ) {
        // Ask for mobile number immediately
        setTimeout(() => {
          const teamName =
            userProfession === "Local Audience"
              ? "customer support"
              : "business consultant";
          const responses = personalizedResponses(userName, userProfession);
          const mobileMsg: Message = {
            id: messages.length + 3,
            text: `📱 **Let's get in touch!**\n\nPlease share your mobile number.\n\n✅ Your information will be saved securely:\n• Name: ${userName}\n• Profession: ${userProfession}\n\nOur ${teamName} team will contact you soon.`,
            sender: "bot",
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          };
          setMessages((prev) => [...prev, mobileMsg]);
          setIsAwaitingMobile(true);
        }, 1000);
      }
    }, 800);
  };

  const handleFormSubmitted = (data: ApplicationFormData) => {
    setSubmittedApplication(data);
    setShowSuccessPopup(true);
    setShowApplicationForm(false);
  };

  const resetForm = () => {
    setShowApplicationForm(false);
    setIsFormSubmitted(false);
  };

  // Get remaining buttons based on selected service
  const getRemainingButtons = () => {
    if (!selectedService || !isProfessionSelected) return [];

    const allQuestions =
      userProfession === "Business Owner"
        ? businessOwnerQuestions
        : userProfession === "Content Creator"
        ? contentCreatorQuestions
        : localAudienceQuestions;

    return allQuestions.filter((q) => q.question !== selectedService);
  };

  // Get unclicked buttons for current profession
  const getUnclickedButtons = () => {
    if (!isProfessionSelected || clickedButtons.size === 0) {
      return currentQuickQuestions;
    }

    return currentQuickQuestions.filter((q) => !clickedButtons.has(q.id));
  };

  // Check if all buttons have been clicked
  const allButtonsClicked = () => {
    return clickedButtons.size === currentQuickQuestions.length;
  };

  // Check if should show input field - NEW CONDITION
  const shouldShowInputField = () => {
    // Always show input field if user hasn't submitted mobile yet
    if (!hasSubmittedMobile) return true;

    // If user has submitted mobile AND all buttons are clicked AND close chat is showing
    if (hasSubmittedMobile && allButtonsClicked()) {
      return false; // Hide input field
    }

    return true; // Show input field in all other cases
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
        text: "🌟 Hello! I'm your AI Assistant. Can you please tell me your name?",
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setUserName("");
    setUserProfession("");
    setIsNameCollected(false);
    setIsProfessionSelected(false);
    setIsAwaitingMobile(false);
    setHasAskedForName(false);
    setCurrentQuickQuestions([]);
    setSelectedService(null);
    setInputMessage("");
    setShowApplicationForm(false);
    setShowSuccessPopup(false);
    setSubmittedApplication(null);
    setClickedButtons(new Set());
    setHasAskedForMobile(false);
    setHasSubmittedMobile(false);
    setIsFormSubmitted(false);
    onClose();
  };

  // Calculate if send button should be enabled
  const isSendButtonEnabled = () => {
    if (isLoading) return false;
    if (!inputMessage.trim()) return false;

    // For name input stage
    if (!isNameCollected) return true;

    // For mobile input stage
    if (isAwaitingMobile) return true;

    // For general chat after profession selection
    if (isProfessionSelected) return true;

    return false;
  };

  // Get placeholder text based on current state
  const getPlaceholderText = () => {
    if (isAwaitingMobile) {
      return "Enter 10-digit mobile number...";
    } else if (!isNameCollected) {
      return "Type your name here...";
    } else if (!isProfessionSelected) {
      return "Select your profession above...";
    } else {
      return `Ask me anything, ${userName}...`;
    }
  };

  // Format message text with proper styling - FIXED VERSION
  const formatMessageText = (text: string, sender: string) => {
    const lines = text.split("\n");
    return (
      <Box sx={{ position: "relative", zIndex: 1 }}>
        {lines.map((line, index) => {
          // Check for headings (lines with ** **)
          if (line.includes("**")) {
            const cleanLine = line.replace(/\*\*/g, "");
            return (
              <Typography
                key={index}
                sx={{
                  fontSize: sender === "user" ? "0.9rem" : "0.95rem",
                  fontWeight: 600,
                  color: sender === "user" ? "white" : "#fff",
                  mb: 0.5,
                  lineHeight: 1.4,
                }}
                component="div" // Use div instead of default p
              >
                {cleanLine}
              </Typography>
            );
          }
          // Check for bullet points
          else if (line.trim().startsWith("•")) {
            return (
              <Box
                key={index}
                sx={{ display: "flex", alignItems: "flex-start", mb: 0.5 }}
              >
                <Typography
                  sx={{
                    color:
                      sender === "user" ? "rgba(255,255,255,0.9)" : "#E2E8F0",
                    fontSize: "0.85rem",
                    lineHeight: 1.4,
                    mr: 0.5,
                  }}
                  component="span"
                >
                  •
                </Typography>
                <Typography
                  sx={{
                    color:
                      sender === "user" ? "rgba(255,255,255,0.9)" : "#E2E8F0",
                    fontSize: "0.85rem",
                    lineHeight: 1.4,
                    flex: 1,
                  }}
                  component="span"
                >
                  {line.replace("•", "").trim()}
                </Typography>
              </Box>
            );
          }
          // Check for numbered lists
          else if (/^\d+\./.test(line.trim())) {
            return (
              <Box
                key={index}
                sx={{ display: "flex", alignItems: "flex-start", mb: 0.5 }}
              >
                <Typography
                  sx={{
                    color:
                      sender === "user" ? "rgba(255,255,255,0.9)" : "#E2E8F0",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    lineHeight: 1.4,
                    mr: 1,
                    minWidth: "24px",
                  }}
                  component="span"
                >
                  {line.match(/^\d+/)?.[0]}.
                </Typography>
                <Typography
                  sx={{
                    color:
                      sender === "user" ? "rgba(255,255,255,0.9)" : "#E2E8F0",
                    fontSize: "0.85rem",
                    lineHeight: 1.4,
                    flex: 1,
                  }}
                  component="span"
                >
                  {line.replace(/^\d+\.\s*/, "").trim()}
                </Typography>
              </Box>
            );
          }
          // Regular text
          else if (line.trim()) {
            return (
              <Typography
                key={index}
                sx={{
                  fontSize: "0.85rem",
                  color:
                    sender === "user" ? "rgba(255,255,255,0.9)" : "#E2E8F0",
                  mb: 0.5,
                  lineHeight: 1.5,
                }}
                component="div" // Use div instead of default p
              >
                {line}
              </Typography>
            );
          }
          // Empty line (spacing)
          else {
            return <Box key={index} sx={{ height: 8 }} />;
          }
        })}
      </Box>
    );
  };

  const openApplyForm = () => {
    // Close the chatbot first
    onClose();
    // Then open the apply form after a small delay
    setTimeout(() => {
      setShowApplicationForm(true);
    }, 300);
  };

  return (
    <>
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
              {/* Circular Logo Container */}
              <Box className="relative">
                <Box
                  sx={{
                    width: 54,
                    height: 54,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    animation: "logoFloat 3s ease-in-out infinite",
                    boxShadow: "0 8px 32px rgba(59, 130, 246, 0.4)",
                    overflow: "hidden",
                    background: "transparent",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      inset: "-2px",
                      background:
                        "linear-gradient(45deg, #EC4899, #8B5CF6, #3B82F6, #EC4899)",
                      borderRadius: "50%",
                      zIndex: -1,
                      animation: "logoPulse 4s linear infinite",
                      backgroundSize: "400% 400%",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      inset: "0px",
                      borderRadius: "50%",
                      background: "transparent",
                      border: "none",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src="/boalogo.svg"
                    alt="Best of Amravati Logo"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      padding: "0px",
                      animation: "logoGlow 2s ease-in-out infinite alternate",
                      boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
                      filter:
                        "drop-shadow(0 2px 4px rgba(0,0,0,0.2)) brightness(1.1) contrast(1.1)",
                      transform: "scale(1.15)",
                      background: "transparent",
                      border: "none",
                    }}
                  />
                </Box>
                {/* Online indicator */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #10B981, #059669)",
                    border: "2px solid rgba(30, 27, 75, 0.8)",
                    boxShadow: "0 0 15px rgba(16, 185, 129, 0.8)",
                    animation: "pulse 2s ease-in-out infinite",
                    zIndex: 2,
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
                  {userName
                    ? userProfession
                      ? `${userName} (${userProfession})`
                      : `Welcome, ${userName}!`
                    : "BOA Assistant"}
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
                    ? "📱 Enter mobile number..."
                    : isProfessionSelected
                    ? `✨ ${userProfession} Assistance`
                    : isNameCollected
                    ? "🌟 Select your profession"
                    : ""}
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
              p: 2.5,
              display: "flex",
              flexDirection: "column",
              gap: 2,
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
                  {/* User name badge for user messages */}
                  {message.sender === "user" && userName && (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        mb: 0.5,
                        gap: 0.5,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          color: "#EC4899",
                          background: "rgba(236, 72, 153, 0.15)",
                          px: 1.5,
                          py: 0.25,
                          borderRadius: "12px",
                          letterSpacing: "0.3px",
                        }}
                        component="div"
                      >
                        {userName}
                      </Typography>
                      <PersonIcon
                        sx={{ fontSize: 12, color: "#EC4899", opacity: 0.8 }}
                      />
                    </Box>
                  )}

                  {/* Bot name badge for bot messages */}
                  {message.sender === "bot" && (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 0.5,
                        gap: 0.5,
                      }}
                    >
                      <SmartToyIcon sx={{ fontSize: 12, color: "#8B5CF6" }} />
                      <Typography
                        sx={{
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          color: "#8B5CF6",
                          background: "rgba(139, 92, 246, 0.15)",
                          px: 1.5,
                          py: 0.25,
                          borderRadius: "12px",
                          letterSpacing: "0.3px",
                        }}
                        component="div"
                      >
                        BOA Assistant
                      </Typography>
                    </Box>
                  )}

                  <Box
                    sx={{
                      p: message.sender === "user" ? 2 : 2.5,
                      borderRadius:
                        message.sender === "user"
                          ? "18px 18px 6px 18px"
                          : "18px 18px 18px 6px",
                      background:
                        message.sender === "user"
                          ? "linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)"
                          : "rgba(255, 255, 255, 0.08)",
                      backdropFilter: "blur(20px)",
                      color: "white",
                      boxShadow:
                        message.sender === "user"
                          ? "0 6px 24px rgba(236, 72, 153, 0.25)"
                          : "0 6px 24px rgba(0, 0, 0, 0.15)",
                      border:
                        message.sender === "user"
                          ? "1px solid rgba(255, 255, 255, 0.15)"
                          : "1px solid rgba(255, 255, 255, 0.08)",
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
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                      },
                    }}
                  >
                    {formatMessageText(message.text, message.sender)}

                    {/* Social Media Icons for "What is Best Of Amravati" question */}
                    {message.sender === "bot" &&
                      message.text.includes(
                        "Follow Us for latest updates:"
                      ) && (
                        <Box
                          sx={{
                            mt: 2,
                            display: "flex",
                            gap: 1.5,
                            justifyContent: "center",
                          }}
                        >
                          <IconButton
                            size="small"
                            sx={{
                              background:
                                "linear-gradient(45deg, #EC4899, #DB2777)",
                              color: "white",
                              "&:hover": {
                                background:
                                  "linear-gradient(45deg, #DB2777, #BE185D)",
                              },
                            }}
                            onClick={() =>
                              window.open(
                                "https://instagram.com/bestofamravati",
                                "_blank"
                              )
                            }
                          >
                            <InstagramIcon fontSize="small" />
                          </IconButton>
                          <IconButton
                            size="small"
                            sx={{
                              background:
                                "linear-gradient(45deg, #3B82F6, #1D4ED8)",
                              color: "white",
                              "&:hover": {
                                background:
                                  "linear-gradient(45deg, #1D4ED8, #1E40AF)",
                              },
                            }}
                            onClick={() =>
                              window.open(
                                "https://facebook.com/bestofamravati",
                                "_blank"
                              )
                            }
                          >
                            <FacebookIcon fontSize="small" />
                          </IconButton>
                          <IconButton
                            size="small"
                            sx={{
                              background:
                                "linear-gradient(45deg, #EF4444, #DC2626)",
                              color: "white",
                              "&:hover": {
                                background:
                                  "linear-gradient(45deg, #DC2626, #B91C1C)",
                              },
                            }}
                            onClick={() =>
                              window.open(
                                "https://youtube.com/@bestofamravati",
                                "_blank"
                              )
                            }
                          >
                            <YouTubeIcon fontSize="small" />
                          </IconButton>
                        </Box>
                      )}

                    {/* Timestamp */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        mt: 1.5,
                        pt: 1,
                        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.7rem",
                          opacity: 0.7,
                          fontWeight: 500,
                          letterSpacing: "0.3px",
                        }}
                        component="div"
                      >
                        {message.timestamp}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}

            {/* Simple Apply Now Button for Content Creators */}
            {isProfessionSelected &&
              userProfession === "Content Creator" &&
              clickedButtons.has(1) && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    animation: "fadeIn 0.5s ease-out",
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: "18px 18px 18px 6px",
                      background: "rgba(236, 72, 153, 0.1)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(236, 72, 153, 0.2)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      width: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "0.85rem",
                        color: "rgba(255, 255, 255, 0.9)",
                        textAlign: "center",
                        mb: 1,
                      }}
                      component="div"
                    >
                      Ready to join our creative team? Click below to start your
                      application!
                    </Typography>
                    <Button
                      variant="contained"
                      onClick={openApplyForm}
                      startIcon={<ApplyIcon />}
                      sx={{
                        background:
                          "linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)",
                        color: "white",
                        borderRadius: "10px",
                        fontWeight: 600,
                        textTransform: "none",
                        fontSize: "0.85rem",
                        py: 0.75,
                        px: 2,
                        width: "fit-content",
                        alignSelf: "center",
                        "&:hover": {
                          background:
                            "linear-gradient(135deg, #DB2777 0%, #7C3AED 100%)",
                          transform: "translateY(-2px)",
                          boxShadow: "0 6px 20px rgba(236, 72, 153, 0.4)",
                        },
                      }}
                    >
                      Apply Now
                    </Button>
                  </Box>
                </Box>
              )}

            {/* Profession Selection Chips */}
            {isNameCollected && !isProfessionSelected && (
              <Box
                sx={{
                  animation: "fadeIn 0.5s ease-out",
                }}
              >
                <Box
                  sx={{
                    p: 2,
                    borderRadius: "18px 18px 18px 6px",
                    background: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      color: "rgba(255, 255, 255, 0.9)",
                      mb: 1,
                      fontWeight: 600,
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                    }}
                    component="div"
                  >
                    <TrendingUpIcon sx={{ fontSize: 16, color: "#8B5CF6" }} />
                    Select your profession
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    {professionButtons.map((profession) => (
                      <Chip
                        key={profession.id}
                        label={profession.title}
                        onClick={() => handleProfessionSelect(profession)}
                        icon={<Box>{profession.icon}</Box>}
                        sx={{
                          fontSize: "0.8rem",
                          fontWeight: 500,
                          background: "rgba(255, 255, 255, 0.1)",
                          backdropFilter: "blur(10px)",
                          color: "white",
                          border: `1px solid ${profession.color}40`,
                          borderRadius: "20px",
                          height: "32px",
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          "&:hover": {
                            background: `${profession.color}20`,
                            borderColor: profession.color,
                            transform: "translateY(-2px)",
                            boxShadow: `0 6px 20px ${profession.color}40`,
                          },
                          "& .MuiChip-icon": {
                            color: profession.color,
                            marginLeft: "8px",
                          },
                        }}
                      />
                    ))}
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      color: "rgba(255, 255, 255, 0.6)",
                      mt: 1,
                      textAlign: "center",
                      fontStyle: "italic",
                    }}
                    component="div"
                  >
                    Choose your role to get personalized assistance
                  </Typography>
                </Box>
              </Box>
            )}

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
                    p: 2,
                    borderRadius: "18px 18px 18px 6px",
                    background: "rgba(255, 255, 255, 0.08)",
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
                    component="div"
                  >
                    {isAwaitingMobile
                      ? "Processing your request..."
                      : isProfessionSelected
                      ? "Finding perfect solution..."
                      : "Getting ready to assist..."}
                  </Typography>
                </Box>
              </Box>
            )}

            <div ref={messagesEndRef} />
          </Box>

          {/* Quick Questions based on Profession - MODIFIED TO SHOW ONLY UNCLICKED BUTTONS */}
          {isProfessionSelected &&
            !isAwaitingMobile &&
            currentQuickQuestions.length > 0 &&
            !allButtonsClicked() && (
              <Box
                sx={{
                  p: 2,
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(20px)",
                  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                  position: "relative",
                  zIndex: 1,
                  animation: "slideUp 0.4s ease-out",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      color: "rgba(255, 255, 255, 0.9)",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                    component="div"
                  >
                    <TrendingUpIcon sx={{ fontSize: 16, color: "#8B5CF6" }} />
                    {clickedButtons.size > 0
                      ? "Explore More Options"
                      : "Quick questions for you"}
                  </Typography>
                  <Chip
                    label={`${clickedButtons.size}/${currentQuickQuestions.length}`}
                    size="small"
                    sx={{
                      fontSize: "0.7rem",
                      height: "20px",
                      background: "rgba(139, 92, 246, 0.2)",
                      color: "#8B5CF6",
                      border: "1px solid rgba(139, 92, 246, 0.3)",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    flexWrap: "wrap",
                  }}
                >
                  {getUnclickedButtons().map((questionData) => (
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

          {/* Show message when all buttons have been clicked - UPDATED: Changed styling to match other buttons but kept all original icons */}
          {isProfessionSelected && !isAwaitingMobile && allButtonsClicked() && (
            <Box
              sx={{
                p: 2,
                background: "rgba(16, 185, 129, 0.1)",
                backdropFilter: "blur(20px)",
                borderTop: "1px solid rgba(16, 185, 129, 0.2)",
                position: "relative",
                zIndex: 1,
                animation: "fadeIn 0.5s ease-out",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.85rem",
                  color: "rgba(255, 255, 255, 0.9)",
                  mb: 1.5,
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}
                component="div"
              >
                <CheckCircleIcon sx={{ fontSize: 16, color: "#10B981" }} />
                You've explored all options!
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  color: "rgba(255, 255, 255, 0.7)",
                  mb: 2,
                }}
                component="div"
              ></Typography>
              <Chip
                label="Close Chat"
                onClick={handleClose}
                icon={<CloseIcon sx={{ fontSize: 14 }} />}
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  color: "white",
                  border: "1px solid rgba(236, 72, 153, 0.4)",
                  borderRadius: "20px",
                  height: "32px",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    background: "rgba(236, 72, 153, 0.2)",
                    borderColor: "#EC4899",
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 20px rgba(236, 72, 153, 0.4)",
                  },
                  "& .MuiChip-icon": {
                    color: "#EC4899",
                    marginLeft: "8px",
                  },
                }}
              />
            </Box>
          )}

          {/* Message Input - Only show if user hasn't completed the flow */}
          {shouldShowInputField() && (
            <Box
              sx={{
                p: 2.5,
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
                <TextField
                  fullWidth
                  size="small"
                  placeholder={getPlaceholderText()}
                  value={inputMessage}
                  onChange={(e) => {
                    if (isAwaitingMobile) {
                      // Handle mobile number input with validation
                      handleMobileInput(e.target.value);
                    } else {
                      // Regular input for other cases
                      setInputMessage(e.target.value);
                    }
                  }}
                  onKeyPress={handleKeyPress}
                  multiline
                  maxRows={3}
                  disabled={isLoading}
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
                      "& input::placeholder, & textarea::placeholder": {
                        color: "rgba(255, 255, 255, 0.5)",
                        opacity: 1,
                      },
                      "&.Mui-disabled": {
                        background: "rgba(255, 255, 255, 0.05)",
                        "& fieldset": {
                          borderColor: "rgba(255, 255, 255, 0.1)",
                        },
                      },
                    },
                    "& .MuiOutlinedInput-input": {
                      paddingTop: "12px",
                      paddingBottom: "12px",
                      color: "white",
                      "&::placeholder": {
                        color: "rgba(255, 255, 255, 0.5)",
                        opacity: 1,
                      },
                      "&.Mui-disabled": {
                        color: "rgba(255, 255, 255, 0.4)",
                        WebkitTextFillColor: "rgba(255, 255, 255, 0.4)",
                      },
                    },
                  }}
                />

                <Button
                  variant="contained"
                  onClick={sendMessage}
                  disabled={!isSendButtonEnabled()}
                  sx={{
                    minWidth: "48px",
                    width: "48px",
                    height: "48px",
                    borderRadius: "16px",
                    background: isSendButtonEnabled()
                      ? "linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)"
                      : "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: isSendButtonEnabled()
                      ? "0 8px 32px rgba(236, 72, 153, 0.4)"
                      : "none",
                    "&:hover": {
                      background: isSendButtonEnabled()
                        ? "linear-gradient(135deg, #DB2777 0%, #7C3AED 100%)"
                        : "rgba(255, 255, 255, 0.15)",
                      transform: isSendButtonEnabled() ? "scale(1.05)" : "none",
                      boxShadow: isSendButtonEnabled()
                        ? "0 12px 40px rgba(236, 72, 153, 0.5)"
                        : "none",
                    },
                    "&:active": {
                      transform: "scale(0.98)",
                    },
                    "&:disabled": {
                      background: "rgba(255, 255, 255, 0.05)",
                      boxShadow: "none",
                      cursor: "not-allowed",
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
                component="div"
              >
                {isAwaitingMobile ? (
                  <>
                    <CheckCircleIcon sx={{ fontSize: 14, color: "#10B981" }} />
                    Enter mobile number to get callback
                  </>
                ) : !isNameCollected ? (
                  <>
                    <StarsIcon sx={{ fontSize: 14, color: "#F59E0B" }} />
                    Enter your name to begin
                  </>
                ) : !isProfessionSelected ? (
                  <>
                    <HandshakeIcon sx={{ fontSize: 14, color: "#EC4899" }} />
                    Select your profession above
                  </>
                ) : (
                  <>
                    <SupportAgentIcon sx={{ fontSize: 14, color: "#8B5CF6" }} />
                    {userProfession} assistance • 24/7 Support
                  </>
                )}
              </Typography>
            </Box>
          )}
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

          @keyframes pulse {
            0%,
            100% {
              boxShadow: 0 0 20px rgba(16, 185, 129, 0.8);
            }
            50% {
              boxshadow: 0 0 30px rgba(16, 185, 129, 1);
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

          @keyframes logoFloat {
            0%,
            100% {
              transform: translateY(0px) scale(1);
            }
            50% {
              transform: translateY(-5px) scale(1.02);
            }
          }

          @keyframes logoPulse {
            0% {
              background-position: 0% 50%;
              opacity: 0.8;
            }
            50% {
              background-position: 100% 50%;
              opacity: 1;
            }
            100% {
              background-position: 0% 50%;
              opacity: 0.8;
            }
          }

          @keyframes logoGlow {
            from {
              boxShadow: 0 0 15px rgba(139, 92, 246, 0.3);
              filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2)) brightness(1.1)
                contrast(1.1);
            }
            to {
              boxshadow: 0 0 25px rgba(139, 92, 246, 0.5);
              filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3)) brightness(1.2)
                contrast(1.2);
            }
          }

          @keyframes confetti {
            0% {
              transform: translateY(-100px) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(1000px) rotate(360deg);
              opacity: 0;
            }
          }

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes formSlideIn {
            from {
              opacity: 0;
              transform: scale(0.95) translateY(20px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
        `}</style>
      </Drawer>

      {/* Apply Form Component */}
      {showApplicationForm && (
        <ApplyForm
          isOpen={showApplicationForm}
          onClose={() => setShowApplicationForm(false)}
          onSuccess={handleFormSubmitted}
          userName={userName}
        />
      )}

      {/* Success Popup Dialog */}
      <Dialog
        open={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        PaperProps={{
          sx: {
            background: "white",
            borderRadius: "24px",
            overflow: "hidden",
            maxWidth: "500px",
            width: "90vw",
            boxShadow: "0 25px 70px rgba(16, 185, 129, 0.3)",
            position: "relative",
            m: { xs: 2, sm: 3 },
            border: "1px solid rgba(16, 185, 129, 0.1)",
          },
        }}
      >
        {/* Success Header */}
        <Box
          sx={{
            p: 4,
            background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
            color: "white",
            textAlign: "center",
          }}
        >
          {/* Success Icon */}
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
              border: "4px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            <TaskAltIcon sx={{ fontSize: 40, color: "white" }} />
          </Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              mb: 1,
              fontSize: { xs: "1.5rem", sm: "1.75rem" },
            }}
          >
            🎉 Application Sent!
          </Typography>
          <Typography sx={{ opacity: 0.9 }}>
            We've received your details successfully
          </Typography>
        </Box>

        <DialogContent sx={{ p: 4, textAlign: "center" }}>
          <Typography
            sx={{
              color: "#1e293b",
              fontSize: "1.1rem",
              fontWeight: 600,
              mb: 3,
            }}
          >
            Thank you, {submittedApplication?.name}!
          </Typography>

          <Typography
            sx={{
              color: "#64748b",
              mb: 4,
              lineHeight: 1.6,
            }}
          >
            Your application has been successfully submitted to our creative
            team. We'll review it and contact you shortly.
          </Typography>

          {/* Application Summary */}
          <Box
            sx={{
              background: "#f8fafc",
              borderRadius: "16px",
              p: 3,
              mb: 4,
              border: "1px solid #e2e8f0",
              textAlign: "left",
            }}
          >
            <Typography
              sx={{
                color: "#475569",
                fontWeight: 700,
                mb: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <DescriptionIcon sx={{ color: "#8B5CF6" }} />
              Application Summary
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ color: "#64748b", fontSize: "0.9rem" }}>
                  Name:
                </Typography>
                <Typography
                  sx={{ color: "#1e293b", fontWeight: 600, fontSize: "0.9rem" }}
                >
                  {submittedApplication?.name}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ color: "#64748b", fontSize: "0.9rem" }}>
                  Email:
                </Typography>
                <Typography
                  sx={{ color: "#1e293b", fontWeight: 600, fontSize: "0.9rem" }}
                >
                  {submittedApplication?.email}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ color: "#64748b", fontSize: "0.9rem" }}>
                  Phone:
                </Typography>
                <Typography
                  sx={{ color: "#1e293b", fontWeight: 600, fontSize: "0.9rem" }}
                >
                  {submittedApplication?.phone}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ color: "#64748b", fontSize: "0.9rem" }}>
                  Role:
                </Typography>
                <Typography
                  sx={{ color: "#1e293b", fontWeight: 600, fontSize: "0.9rem" }}
                >
                  {submittedApplication?.role || "Not specified"}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Next Steps */}
          <Box
            sx={{
              background: "rgba(59, 130, 246, 0.1)",
              borderRadius: "16px",
              p: 3,
              border: "1px solid rgba(59, 130, 246, 0.2)",
            }}
          >
            <Typography
              sx={{
                color: "#3B82F6",
                fontWeight: 700,
                mb: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
                justifyContent: "center",
              }}
            >
              <CelebrationIcon />
              What's Next?
            </Typography>
            <Typography
              sx={{
                color: "#475569",
                fontSize: "0.9rem",
                textAlign: "center",
                lineHeight: 1.6,
              }}
            >
              • Our team will review within 48 hours
              <br />
              • You'll receive an email confirmation
              <br />• Keep your phone handy for follow-up
            </Typography>
          </Box>
        </DialogContent>

        <DialogActions sx={{ p: 3, justifyContent: "center" }}>
          <Button
            onClick={() => setShowSuccessPopup(false)}
            variant="contained"
            sx={{
              background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
              color: "white",
              borderRadius: "16px",
              px: 4,
              py: 1.5,
              fontWeight: 700,
              fontSize: "1rem",
              textTransform: "none",
              "&:hover": {
                background: "linear-gradient(135deg, #7C3AED 0%, #DB2777 100%)",
                transform: "translateY(-2px)",
                boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)",
              },
            }}
            startIcon={<CheckCircleIcon />}
          >
            Got It!
          </Button>
        </DialogActions>

        {/* Auto-close timer indicator */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "#e2e8f0",
            overflow: "hidden",
            borderRadius: "0 0 24px 24px",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              background: "linear-gradient(90deg, #8B5CF6, #EC4899)",
              animation: "shimmer 5s linear",
              transformOrigin: "left",
            }}
          />
        </Box>
      </Dialog>
    </>
  );
}