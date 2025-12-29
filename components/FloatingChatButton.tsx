"use client";
import { FaRocket } from "react-icons/fa";

interface FloatingChatButtonProps {
  onClick: () => void;
}

export default function FloatingChatButton({
  onClick,
}: FloatingChatButtonProps) {
  return (
    <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50">
      <button
        onClick={onClick}
        className="group relative bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 text-white px-4 py-3 md:px-6 md:py-4 rounded-full font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-0.5 md:hover:-translate-y-1 transition-all duration-300 flex items-center justify-center animate-bounce-slow overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20 group-hover:opacity-40 blur-sm transition-all duration-700 animate-ping-slow"></div>

        <div className="relative z-10 flex items-center gap-2 md:gap-3">
          <div className="relative">
            <div className="absolute -inset-1 bg-white/20 rounded-full animate-ping opacity-75"></div>
            <div className="relative text-xl md:text-2xl flex items-center justify-center w-6 h-6 md:w-8 md:h-8">
              <FaRocket className="group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <span className="font-medium text-sm md:text-base hidden sm:inline-block">
            Let's Chat
          </span>
        </div>

        <div className="absolute -top-10 md:-top-12 right-0 bg-gray-900 text-white text-xs font-medium px-2 py-1 md:px-3 md:py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
          Chat with AI Assistant
          <div className="absolute -bottom-1 right-3 md:right-5 w-2 h-2 bg-gray-900 rotate-45"></div>
        </div>
      </button>
    </div>
  );
}
