import { NextResponse } from "next/server";

// This function runs exclusively on the BACKEND (server-side).
// Visitors can never see this code, only the answer it returns.
export async function GET() {
  const data = {
    status: "success",
    message: "🎉 Hello from your secure Backend engine!",
    serverTime: new Date().toLocaleTimeString(),
    operatingSystem: "macOS (Apple Silicon)",
  };

  return NextResponse.json(data);
}
