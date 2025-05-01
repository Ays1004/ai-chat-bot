import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function GET(request: Request) {
  const body = await request.json();
  const { query } = body;
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: query,
  });
  return new Response(JSON.stringify({ text: response.text }), { status: 200, headers: { "Content-Type": "application/json" } });
}

export async function POST(req: Request) {
  const body = await req.json();
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: body.contents || "Default content",
  });
  return new Response(JSON.stringify({ text: response.text }), { status: 200, headers: { "Content-Type": "application/json" } });
}