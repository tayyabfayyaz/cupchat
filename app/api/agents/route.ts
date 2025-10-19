import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, instructions } = await request.json();
    
    if (!name || !instructions) {
      return NextResponse.json(
        { error: 'Name and instructions are required' },
        { status: 400 }
      );
    }

    // Call your FastAPI backend
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/create-agent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, instructions }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`FastAPI error: ${response.status} ${response.statusText} - ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    
    return NextResponse.json({
      success: true,
      apiKey: data.api_key,
      agentId: data.agent_id,
      apiUrl: data.api_url
    });

  } catch (error: unknown) {
    console.error('Error creating agent:', error);

    let message = 'Failed to create agent';
    if (error instanceof Error && error.message) {
      message = error.message;
    } else if (typeof error === 'string') {
      message = error;
    } else if (typeof error === 'number') {
      message = String(error);
    } else if (error && typeof error === 'object') {
      try {
        message = JSON.stringify(error);
      } catch {
        // keep default message
      }
    }

    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}