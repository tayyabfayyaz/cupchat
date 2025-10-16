"use client";

import { useState, useEffect } from "react";
import ApiKeyDisplay from "@/app/components/ApiKeyDisplay";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

// Component that uses useSearchParams - wrapped in Suspense
function ApiKeyContent() {
  const [apiData, setApiData] = useState<{
    apiKey: string;
    agentId: string;
    apiUrl: string;
  } | null>(null);
  
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Get data from multiple sources in priority order
    const apiKey = searchParams.get('apiKey') || sessionStorage.getItem("apiKey") || "";
    const agentId = searchParams.get('agentId') || sessionStorage.getItem("agentId") || "";
    const apiUrl = searchParams.get('apiUrl') || sessionStorage.getItem("apiUrl") || "http://localhost:8000/api/chat";
    
    console.log("📦 Retrieved data:", { apiKey, agentId, apiUrl });
    
    setApiData({ apiKey, agentId, apiUrl });
    setLoading(false);
  }, [searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Loading your API key...</p>
        </div>
      </div>
    );
  }

  if (!apiData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 flex items-center justify-center">
        <div className="text-center">
          <p>No API data found. Please create an agent first.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <ApiKeyDisplay
        apiKey={apiData.apiKey}
        agentId={apiData.agentId}
        apiUrl={apiData.apiUrl}
      />
    </div>
  );
}

// Loading component for Suspense fallback
function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p>Loading API configuration...</p>
      </div>
    </div>
  );
}

// Main page component
export default function ApiKeyPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ApiKeyContent />
    </Suspense>
  );
}