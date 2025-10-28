import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true, // only for client-side demo, remove in prod
});

export async function generateCourse(topic) {
  if (!topic.trim()) return [];

  const prompt = `
  Create a short structured course outline on "${topic}".
  Return JSON only with this structure:
  [
    { "title": "Lesson 1 title", "description": "brief overview", "videoQuery": "best YouTube query" },
    ...
  ]
  Keep it concise (3-5 lessons).
  `;

  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
  });

  // Extract JSON from model output
  const text = response.choices[0]?.message?.content || "[]";

  try {
    const jsonStart = text.indexOf("[");
    const jsonEnd = text.lastIndexOf("]") + 1;
    const jsonText = text.slice(jsonStart, jsonEnd);
    return JSON.parse(jsonText);
  } catch (err) {
    console.error("Error parsing AI output:", err);
    return [];
  }
}
