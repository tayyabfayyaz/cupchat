"use client";

import { ChatbotToggleButton } from "@tayyabfayyaz931/cutbot-sdk";

export default function ChatbotClient() {
  return (
    <ChatbotToggleButton 
      apiUrl="http://localhost:8000/api/chat" 
      apiKey="sk_a9759e18f2de46e0929c3ea72f47cca3"
    />
  );
}
