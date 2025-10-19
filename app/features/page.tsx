'use client'

import * as React from "react";
import { m } from "framer-motion";
import { ShieldCheck, Bot, Settings, Eye, Layers, MessageCircleMore } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";

const features = [
  {
    icon: <Bot className="w-8 h-8 text-blue-600 mb-3" />,
    title: "Smart Query Understanding",
    desc: "AI agent uses NLP to understand real-time user queries and respond contextually.",
  },
  {
    icon: <Settings className="w-8 h-8 text-blue-600 mb-3" />,
    title: "Product Customization",
    desc: "Easily configure workflows, upload docs, and set agent behaviors without coding.",
  },
  {
    icon: <Eye className="w-8 h-8 text-blue-600 mb-3" />,
    title: "On-Screen Guidance",
    desc: "Visually highlight UI elements to walk users through product actions step-by-step.",
  },
  {
    icon: <Layers className="w-8 h-8 text-blue-600 mb-3" />,
    title: "Multi-Layered Knowledge",
    desc: "Combines help docs, FAQs, and chat history to improve answer accuracy.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600 mb-3" />,
    title: "Secure Data Handling",
    desc: "All user interactions are encrypted. Agent follows secure embedding & storage protocols.",
  },
  {
    icon: <MessageCircleMore className="w-8 h-8 text-blue-600 mb-3" />,
    title: "Conversational UI",
    desc: "Delivers fluid, human-like responses in chat with fallback escalation to human support.",
  },
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-white text-black px-4 md:px-20 py-16">
      <section>
        <h1 className="text-4xl font-bold text-center mb-4">AI Agent Features</h1>
        <p className="text-center text-lg text-gray-600 mb-16">
          Explore the advanced capabilities that power the AI onboarding assistant.
        </p>

        <m.div
          initial=""
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((item, i) => (
            <m.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <Card className="transition hover:shadow-xl hover:scale-105">
                <CardContent className="p-6">
                  {item.icon}
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            </m.div>
          ))}
        </m.div>
      </section>
    </main>
  );
}
