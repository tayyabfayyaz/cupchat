'use client';
import * as React from "react";
import { m } from "framer-motion";
import { FileText, Brain, Bot, MessageCircle, ArrowRight, Server, Code } from "lucide-react";

const steps = [
  {
    title: "Upload Documentation",
    description: "You upload product manuals, onboarding guides, or help center content.",
    icon: <FileText className="w-8 h-8 text-blue-600 mb-2" />,
  },
  {
    title: "Knowledge Embedding",
    description: "The agent converts uploaded documents into vector embeddings using AI models.",
    icon: <Brain className="w-8 h-8 text-blue-600 mb-2" />,
  },
  {
    title: "Real-time Inference",
    description: "When a user asks a question, the agent searches vector database to find best match.",
    icon: <Bot className="w-8 h-8 text-blue-600 mb-2" />,
  },
  {
    title: "Natural Language Response",
    description: "The matched result is passed into LLM (e.g. GPT) which returns a clean, helpful response.",
    icon: <MessageCircle className="w-8 h-8 text-blue-600 mb-2" />,
  },
  {
    title: "Secure Interaction",
    description: "Each API request and chat response is encrypted & stored securely with auth.",
    icon: <Server className="w-8 h-8 text-blue-600 mb-2" />,
  },
  {
    title: "Embed in Your Product",
    description: "Developers can easily embed the AI Agent widget via JavaScript snippet or React SDK.",
    icon: <Code className="w-8 h-8 text-blue-600 mb-2" />,
  },
];

export default function WorkingPage() {
  return (
    <main className="min-h-screen bg-white text-black px-4 md:px-20 py-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">How the AI Agent Works</h1>
        <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
          Learn how our intelligent agent processes documentation, learns from it, and interacts securely with your users.
        </p>

        <div className="space-y-12">
          
          {steps.map((step, i) => (
            <m.div
              key={i}
              className="flex flex-col md:flex-row items-center justify-between gap-10 bg-gray-50 p-6 rounded-xl shadow-sm"
              initial={{ opacity: 50, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="flex items-center gap-4 md:w-1/2">
                {step.icon}
                <div>
                  <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="text-gray-400 hidden md:block" />
              )}
            </m.div>
          ))}
        </div>
      </section>
    </main>
  );
}
