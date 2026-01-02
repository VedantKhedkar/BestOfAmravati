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
