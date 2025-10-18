"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Code2, ShieldCheck, ServerCog, Copy} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function IntegrationPage() {
  const apiExample = `
POST /api/ask
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "query": "How do I onboard a new team member?",
  "context": "onboarding"
}
`;

  const embedExample = `
<script src="https://cdn.ai-onboard.com/agent.js"></script>
<script>
  AIOnboard.init({
    apiKey: "your-api-key",
    selector: "#agent-widget"
  });
</script>
<div id="agent-widget"></div>
`;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <main className="min-h-screen bg-white text-black px-4 md:px-20 py-16">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold">Secure API Integration</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-2">
          Use our REST API or JavaScript Embed to add the AI Assistant to your product with full security.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-10 items-start">
        {/* API Example */}
        <motion.div
          className="bg-gray-100 p-6 rounded-xl shadow"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <ServerCog className="text-blue-600" />
            <h2 className="text-xl font-semibold">API Endpoint</h2>
          </div>
          <pre className="bg-black text-white p-4 rounded-lg text-sm overflow-x-auto">
            {apiExample}
          </pre>
          <Button onClick={() => handleCopy(apiExample)} className="mt-4 flex items-center gap-2">
            <Copy className="w-4 h-4" /> Copy API Request
          </Button>
        </motion.div>

        {/* Embed Widget */}
        <motion.div
          className="bg-gray-100 p-6 rounded-xl shadow"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Code2 className="text-purple-600" />
            <h2 className="text-xl font-semibold">JavaScript Embed</h2>
          </div>
          <pre className="bg-black text-white p-4 rounded-lg text-sm overflow-x-auto">
            {embedExample}
          </pre>
          <Button onClick={() => handleCopy(embedExample)} className="mt-4 flex items-center gap-2">
            <Copy className="w-4 h-4" /> Copy Embed Script
          </Button>
        </motion.div>
      </section>

      {/* Security Info */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold text-center mb-6">🔐 Security Guidelines</h2>
        <div className="max-w-3xl mx-auto space-y-4 text-gray-700 text-sm">
          <div className="flex gap-2 items-start">
            <ShieldCheck className="text-green-600 w-5 h-5 mt-1" />
            <p><strong>API Key is private</strong> and must never be exposed in client-side logic. Always proxy calls through your server when handling sensitive actions.</p>
          </div>
          <div className="flex gap-2 items-start">
            <ShieldCheck className="text-green-600 w-5 h-5 mt-1" />
            <p><strong>Use HTTPS</strong> for all API communication to avoid sniffing or MITM attacks.</p>
          </div>
          <div className="flex gap-2 items-start">
            <ShieldCheck className="text-green-600 w-5 h-5 mt-1" />
            <p><strong>Rate limit</strong> requests per API key using a backend firewall or gateway.</p>
          </div>
          <div className="flex gap-2 items-start">
            <ShieldCheck className="text-green-600 w-5 h-5 mt-1" />
            <p><strong>JWT + Auth Middleware</strong> recommended if you are embedding this in a dashboard with user auth.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
