"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function DebugTest() {
  const [result, setResult] = useState<string>("");

  const testApi = async () => {
    try {
      const response = await fetch("/api/agents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Test Agent",
          instructions: "You are a helpful assistant"
        }),
      });

      const data = await response.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (error) {
      setResult(`Error: ${error}`);
    }
  };

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Debug API Test</h3>
      <Button onClick={testApi} className="mb-4">
        Test API
      </Button>
      <pre className="bg-gray-100 p-4 rounded overflow-auto">
        {result || "Click 'Test API' to see results"}
      </pre>
    </div>
  );
}