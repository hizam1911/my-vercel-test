// app/api/calculate/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  try {
    // Vercel Server calls GoogieHost (Server-to-Server)
    // This bypasses the browser's Mixed Content block
    const phpResponse = await fetch("https://api.lenn-dev.com/testing/calculate.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await phpResponse.json();
    return NextResponse.json(data);
  } catch (error: any) {
    // Return the actual system error so you can read what Node.js is complaining about
    return NextResponse.json({ 
      error: "Bridge to PHP failed", 
      details: error.message || error 
    }, { status: 500 });
  }
}