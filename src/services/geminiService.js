const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const MODEL = "gemini-2.0-flash";
const BASE_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

export class AssistantError extends Error {
  constructor(message, kind) {
    super(message);
    this.kind = kind; // "no-key" | "network" | "unknown" | "parse"
  }
}

async function callGemini({ systemInstruction, contents, jsonMode = false }) {
  if (!API_KEY) {
    throw new AssistantError("Missing Gemini API key.", "no-key");
  }
  const body = {
    contents,
    systemInstruction: { parts: [{ text: systemInstruction }] },
    generationConfig: jsonMode
      ? { responseMimeType: "application/json", temperature: 0.8 }
      : { temperature: 0.8 },
  };

  let res;
  try {
    res = await fetch(`${BASE_URL}?key=${API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    throw new AssistantError("Network request failed.", "network");
  }
  if (!res.ok) {
    throw new AssistantError(`Assistant request failed (${res.status}).`, "unknown");
  }
  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.map((p) => p.text).join("") ?? "";
  if (!text) {
    throw new AssistantError("The assistant returned an empty response.", "unknown");
  }
  return text;
}

/**
 * Ask a free-form question about a destination. `history` is an array of
 * { role: "user" | "model", text } from earlier turns in the conversation.
 */
export async function askAboutDestination(destination, history, question) {
  const systemInstruction = `You are a knowledgeable, concise travel assistant embedded in a travel-exploration website. The visitor is currently looking at ${destination.name}, ${destination.country}. Known facts about it: ${destination.description} Best time to go: ${destination.bestTime}. Ideal stay: ${destination.idealStay}. Notable places: ${destination.famousPlaces.map((p) => p.name).join(", ")}. Answer questions about this destination (or general travel advice related to it) in a warm, direct, well-informed tone. Keep answers to 2-4 short paragraphs at most, formatted as plain text with occasional short lists. If asked something unrelated to travel, gently redirect to travel topics.`;

  const contents = [
    ...history.map((turn) => ({
      role: turn.role,
      parts: [{ text: turn.text }],
    })),
    { role: "user", parts: [{ text: question }] },
  ];

  return callGemini({ systemInstruction, contents });
}

/**
 * Generate a structured day-by-day itinerary for a destination.
 * Returns a parsed object: { days: [{ day, title, activities: [{time, title, description}] }], tips: [string] }
 */
export async function generateItinerary(destination, { days = 3, pace = "balanced", interests = "" } = {}) {
  const systemInstruction = `You are a travel planner. Respond ONLY with strict JSON, no markdown fences, no commentary. The JSON schema is:
{
  "destination": string,
  "days": [
    {
      "day": number,
      "title": string (short theme for the day),
      "activities": [
        { "time": string (e.g. "Morning", "9:00 AM"), "title": string, "description": string (1-2 sentences) }
      ]
    }
  ],
  "tips": [string]
}
Ground every activity in real, well-known places or experiences in the destination. Keep descriptions concrete and specific, not generic.`;

  const userPrompt = `Plan a ${days}-day trip to ${destination.name}, ${destination.country}.
Context: ${destination.description}
Notable places to weave in where relevant: ${destination.famousPlaces.map((p) => p.name).join(", ")}.
Pace preference: ${pace}.
${interests ? `Traveler interests: ${interests}.` : ""}
Produce exactly ${days} day entries, each with 3-5 activities spanning the day. Include 2-4 practical tips at the end.`;

  const contents = [{ role: "user", parts: [{ text: userPrompt }] }];
  const text = await callGemini({ systemInstruction, contents, jsonMode: true });

  try {
    const cleaned = text.replace(/^```json\s*|\s*```$/g, "").trim();
    return JSON.parse(cleaned);
  } catch {
    throw new AssistantError("Couldn't parse the itinerary response.", "parse");
  }
}
