"use client";

import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { cn } from "../../components/ui/lib/utils"; // utility for conditional classes
import AgentForm from "../components/AgentForm";

const tabs = [
  "Agent Form",
];

export default function DashboardLayout() {
  const [activeTab, setActiveTab] = useState("Settings");

  const renderContent = () => {
    switch (activeTab) {
      case "Settings":
        return <div>Settings content goes here.</div>;
      case "Payment":
        return <div>Payment content goes here.</div>;
      case "Agent Form":
        return <AgentForm />;
      case "Create API":
        return <div>API creation interface here.</div>;
      case "Usage Logs":
        return <div>Usage logs and analytics shown here.</div>;
      case "Support":
        return <div>Contact support or open a ticket.</div>;
      default:
        return <div>Select a tab to view content.</div>;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-6">AI Onboard</h2>
        {tabs.map((tab) => (
          <Button
            key={tab}
            variant={activeTab === tab ? "default" : "ghost"}
            className={cn("w-full justify-start hover:text-blue-600 hover:border-2", activeTab === tab && "bg-blue-600 text-white")}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Button>
        ))}
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-semibold mb-4">{activeTab}</h1>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
