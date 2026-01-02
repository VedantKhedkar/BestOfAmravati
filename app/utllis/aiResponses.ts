export const aiResponses = {
  greetings: [
    "Hello! I'm here to help you grow your business with Best of Amravati! 🚀",
    "Hi there! Ready to take your business to the next level?",
    "Welcome! How can I assist with your business growth today?",
  ],

  what_is_boa: [
    "Best of Amravati is a digital platform that promotes trusted local businesses in Amravati.",
    "We are a digital marketing platform specializing in promoting Amravati-based businesses through creative content.",
    "BOA is your partner in digital growth - we highlight the best businesses in Amravati through professional reels and promotions.",
  ],

  services: [
    "We create and promote professional reels to give your business high digital visibility.",
    "Our service includes creating engaging promotional reels and posting them across social media platforms.",
    "We provide professional video production and multi-platform promotion for Amravati businesses.",
  ],

  pricing: [
    "Pricing depends on the promotion plan; please contact us for details.",
    "We have different packages starting from ₹3,500. Contact us for detailed pricing.",
    "Our Creative Reel Package starts at ₹3,500. For exact pricing, please reach out to our team.",
  ],

  payment_issue: [
    "For payment issues, please contact us directly at +91 89567 27311 or email bestofamravati@gmail.com",
    "Having payment trouble? Please WhatsApp or call us at +91 89567 27311 for immediate assistance.",
    "Payment issue? Don't worry! Contact our support team at +91 89567 27311 for quick resolution.",
  ],

  contact: [
    "You can contact us via WhatsApp, call, or Instagram DM.",
    "Reach us at: 📧 bestofamravati@gmail.com | 📞 +91 89567 27311",
    "Contact us via email: bestofamravati@gmail.com or call +91 89567 27311",
  ],

  hiring: [
    "We're hiring Content Creators! Responsibilities include scripting viral reels, professional shoots, and high-quality editing. Apply now!",
    "Yes, we're looking for talented Content Creators to join our team.",
    "We have openings for Content Creators who can create compelling reels.",
  ],

  default: [
    "I can help you with: pricing, services, contact info, or any business promotion queries. What would you like to know?",
    "I understand you're asking about our services. Could you be more specific? I can assist with pricing, services, contact details, or booking information.",
    "That's an interesting question! As your BOA assistant, I can provide information about our offerings, pricing, or help you get started.",
  ],
};

export const getAIResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase();

  if (
    lowerMessage.includes("hello") ||
    lowerMessage.includes("hi") ||
    lowerMessage.includes("hey")
  ) {
    return aiResponses.greetings[
      Math.floor(Math.random() * aiResponses.greetings.length)
    ];
  } else if (
    lowerMessage.includes("what is") &&
    (lowerMessage.includes("best of amravati") || lowerMessage.includes("boa"))
  ) {
    return aiResponses.what_is_boa[
      Math.floor(Math.random() * aiResponses.what_is_boa.length)
    ];
  } else if (
    lowerMessage.includes("service") ||
    lowerMessage.includes("what do you") ||
    lowerMessage.includes("provide")
  ) {
    return aiResponses.services[
      Math.floor(Math.random() * aiResponses.services.length)
    ];
  } else if (
    lowerMessage.includes("price") ||
    lowerMessage.includes("cost") ||
    lowerMessage.includes("₹") ||
    lowerMessage.includes("charge")
  ) {
    return aiResponses.pricing[
      Math.floor(Math.random() * aiResponses.pricing.length)
    ];
  } else if (
    lowerMessage.includes("payment") &&
    (lowerMessage.includes("issue") ||
      lowerMessage.includes("problem") ||
      lowerMessage.includes("trouble"))
  ) {
    return aiResponses.payment_issue[
      Math.floor(Math.random() * aiResponses.payment_issue.length)
    ];
  } else if (
    lowerMessage.includes("contact") ||
    lowerMessage.includes("email") ||
    lowerMessage.includes("phone") ||
    lowerMessage.includes("call") ||
    lowerMessage.includes("whatsapp")
  ) {
    return aiResponses.contact[
      Math.floor(Math.random() * aiResponses.contact.length)
    ];
  } else if (
    lowerMessage.includes("hiring") ||
    lowerMessage.includes("job") ||
    lowerMessage.includes("career") ||
    lowerMessage.includes("apply")
  ) {
    return aiResponses.hiring[
      Math.floor(Math.random() * aiResponses.hiring.length)
    ];
  } else {
    return aiResponses.default[
      Math.floor(Math.random() * aiResponses.default.length)
    ];
  }
};
