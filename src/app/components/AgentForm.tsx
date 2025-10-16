"use client";

import { useState } from "react";

interface AgentResponse {
  success: boolean;
  message: string;
  detail?: string;
  agent: {
    id: string;
    name: string;
  };
  apiKey: string;
  apiUrl: string;
  agentId: string;
}

export default function AgentForm() {
  const [formData, setFormData] = useState({
    name: "",
    instructions: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      console.log("🔄 Submitting form data:", formData);

      const res = await fetch("http://localhost:8000/api/agents", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("📨 Response status:", res.status);

      const data: AgentResponse = await res.json();
      console.log("✅ Full response data:", data);

      if (!res.ok) {
        throw new Error(data.message || data.detail || "Server error");
      }

      // ✅ Check for both apiKey and agentId (now directly in response)
      if (data.apiKey && data.agentId) {
        // Store credentials for later use
        sessionStorage.setItem("apiKey", data.apiKey);
        sessionStorage.setItem("agentId", data.agentId);
        sessionStorage.setItem("apiUrl", data.apiUrl);

        localStorage.setItem("apiKey", data.apiKey);
        localStorage.setItem("agentId", data.agentId);
        localStorage.setItem("apiUrl", data.apiUrl);

        setMessage("🎉 Agent created successfully!");
        console.log("✅ Agent created successfully:", {
          apiKey: data.apiKey,
          agentId: data.agentId,
          apiUrl: data.apiUrl
        });

        // Redirect to API key page with parameters
        setTimeout(() => {
          window.location.href = `/api-key?apiKey=${encodeURIComponent(data.apiKey)}&agentId=${encodeURIComponent(data.agentId)}&apiUrl=${encodeURIComponent(data.apiUrl)}`;
        }, 1000);
        
      } else {
        console.error("❌ Missing required fields in response:", data);
        throw new Error("Invalid response from server: missing API key or agent ID");
      }
    } catch (err: any) {
      console.error("❌ Submission error:", err);
      setError(`Error: ${err.message}. Make sure FastAPI is running on port 8000.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Create Your AI Agent
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Agent Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="e.g., Customer Support Bot, Sales Assistant"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Agent Instructions
          </label>
          <textarea
            name="instructions"
            placeholder="Define how your agent should behave. Example: You are a helpful customer support agent for an e-commerce store. Be polite, concise, and focus on solving customer issues..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows={6}
            value={formData.instructions}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 disabled:opacity-50 transition duration-200"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creating Agent...
            </span>
          ) : (
            "Create Agent"
          )}
        </button>
      </form>

      {message && (
        <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg">
          <p className="text-center text-green-700 font-medium">{message}</p>
          <p className="text-center text-sm text-green-600 mt-1">Redirecting to API key page...</p>
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 bg-red-100 border border-red-300 rounded-lg">
          <p className="text-center text-red-700 font-medium">{error}</p>
          <p className="text-center text-sm text-red-600 mt-2">
            Make sure your FastAPI server is running on port 8000
          </p>
        </div>
      )}

      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="font-semibold mb-2 text-blue-800">Debug Tools</h3>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => window.open("http://localhost:8000/docs", "_blank")}
            className="px-3 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
          >
            Open API Docs
          </button>
          <button
            type="button"
            onClick={() => window.open("http://localhost:8000", "_blank")}
            className="px-3 py-2 bg-green-500 text-white text-sm rounded hover:bg-green-600"
          >
            Test Server
          </button>
          <button
            type="button"
            onClick={() => window.open("http://localhost:8000/health", "_blank")}
            className="px-3 py-2 bg-purple-500 text-white text-sm rounded hover:bg-purple-600"
          >
            Health Check
          </button>
        </div>
      </div>
    </div>
  );
}