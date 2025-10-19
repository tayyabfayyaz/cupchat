"use client";

import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Copy, Check, RefreshCw, AlertCircle } from "lucide-react";

interface ApiKeyDisplayProps {
  apiKey: string;
  agentId: string;
  apiUrl: string;
}

export default function ApiKeyDisplay({ apiKey, agentId, apiUrl }: ApiKeyDisplayProps) {
  const [copied, setCopied] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [debugInfo, setDebugInfo] = useState<{
    received: {
      apiKey: string;
      agentId: string;
      apiUrl: string;
    };
    sessionStorage: string | null;
    localStorage: string | null;
    urlParams: string;
  }>({
    received: { apiKey: '', agentId: '', apiUrl: '' },
    sessionStorage: null,
    localStorage: null,
    urlParams: ''
  });

  useEffect(() => {
    setIsClient(true);
    
    // Debug: Log what we received
    console.log("🔍 ApiKeyDisplay received:", { apiKey, agentId, apiUrl });
    
    // Check sessionStorage and localStorage for comparison
    const sessionApiKey = sessionStorage.getItem("apiKey");
    const localApiKey = localStorage.getItem("apiKey");
    
    setDebugInfo({
      received: { apiKey, agentId, apiUrl },
      sessionStorage: sessionApiKey,
      localStorage: localApiKey,
      urlParams: new URLSearchParams(window.location.search).toString()
    });

    // Check if we have valid data
    if (!apiKey || !agentId) {
      console.warn("❌ Missing API key or agent ID");
      setHasError(true);
    } else {
      console.log("✅ Valid data received");
      setHasError(false);
    }
  }, [apiKey, agentId, apiUrl]);

  const copyToClipboard = async (text: string) => {
    if (!text) return;
    
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const refreshData = () => {
    // Try to get data from different sources
    const urlParams = new URLSearchParams(window.location.search);
    const newApiKey = urlParams.get('apiKey') || sessionStorage.getItem("apiKey") || localStorage.getItem("apiKey") || "";
    const newAgentId = urlParams.get('agentId') || sessionStorage.getItem("agentId") || localStorage.getItem("agentId") || "";
    
    if (newApiKey && newAgentId) {
      window.location.reload();
    }
  };

  const usageExample = `import { ChatbotToggleButton } from 'cutbot-sdk';

function MyApp() {
  return (
    <div>
      <h1>My Application</h1>
      <ChatbotToggleButton 
        apiUrl="${apiUrl || "http://localhost:8000/api/chat"}" 
        apiKey="${apiKey || "YOUR_API_KEY_HERE"}" 
      />
    </div>
  );
}`;

  if (!isClient) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-md">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (hasError || !apiKey || !agentId) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-md">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4 text-red-600">API Key Not Found</h2>
          
          <div className="mb-6 p-4 bg-yellow-50 rounded-lg text-left">
            <h3 className="font-semibold mb-2">Debug Information:</h3>
            <pre className="text-xs overflow-auto">
              {JSON.stringify(debugInfo, null, 2)}
            </pre>
          </div>

          <p className="mb-4 text-gray-600">
            We could not find your API key. This might happen if:
          </p>
          <ul className="text-left list-disc list-inside mb-6 text-gray-600 space-y-2">
            <li>You refreshed the page after generating the key</li>
            <li>The API server is not running</li>
            <li>There was an error creating your agent</li>
            <li>The data was not saved properly</li>
          </ul>
          
          <div className="flex gap-4 justify-center">
            <Button onClick={refreshData} variant="default">
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
            <Button onClick={() => window.location.href = "/"} variant="outline">
              Create New Agent
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
        🎉 Your Personal API Key is Ready!
      </h2>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            API Key
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={apiKey}
              readOnly
              className="flex-1 p-3 border rounded-lg bg-gray-50 font-mono text-sm"
            />
            <Button
              onClick={() => copyToClipboard(apiKey)}
              variant="outline"
              size="icon"
              className="h-11 w-11"
            >
              {copied ? (
                <Check className="w-5 h-5 text-green-600" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </Button>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Keep this key secure. It provides access to your AI agent.
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Agent ID
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={agentId}
              readOnly
              className="flex-1 p-3 border rounded-lg bg-gray-50 font-mono text-sm"
            />
            <Button
              onClick={() => copyToClipboard(agentId)}
              variant="outline"
              size="icon"
              className="h-11 w-11"
            >
              <Copy className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            API URL
          </label>
          <input
            type="text"
            value={apiUrl}
            readOnly
            className="w-full p-3 border rounded-lg bg-gray-50 font-mono text-sm"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">How to Use</h3>
          <div className="bg-gray-100 p-4 rounded-lg relative">
            <pre className="text-sm whitespace-pre-wrap break-words">
              {usageExample}
            </pre>
            <Button
              onClick={() => copyToClipboard(usageExample)}
              variant="outline"
              size="sm"
              className="absolute top-2 right-2"
            >
              <Copy className="w-4 h-4 mr-1" />
              Copy Code
            </Button>
          </div>
        </div>

        <div className="flex gap-4">
          <Button
            onClick={() => copyToClipboard(apiKey)}
            className="flex-1"
            variant="default"
          >
            {copied ? "Copied!" : "Copy API Key"}
          </Button>
          <Button
            onClick={() => window.location.href = "/"}
            variant="outline"
            className="flex-1"
          >
            Create Another Agent
          </Button>
        </div>

        {/* Debug section (remove in production) */}
        <details className="mt-6">
          <summary className="cursor-pointer text-sm text-gray-500">Debug Info</summary>
          <pre className="text-xs mt-2 p-2 bg-gray-100 rounded overflow-auto">
            {JSON.stringify(debugInfo, null, 2)}
          </pre>
        </details>
      </div>
    </div>
  );
}