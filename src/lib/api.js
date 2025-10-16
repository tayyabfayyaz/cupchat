export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

// Create a new agent
export async function createAgent(name, instructions) {
  const res = await fetch(`${API_BASE_URL}/api/agents`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, instructions }),
  });

  if (!res.ok) throw new Error("Failed to create agent");
  return await res.json();
}

// Send chat message
export async function chatWithAgent(message, apiKey) {
  const res = await fetch(`${API_BASE_URL}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": apiKey,
    },
    body: JSON.stringify({ message }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.detail || "Chat failed");
  }

  return await res.json();
}
