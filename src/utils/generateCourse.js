import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true, // only for client-side demo, remove in prod
});

export async function generateCourse(topic) {
  if (!topic.trim()) return [];

  const prompt = `
You are an experienced web development instructor designing a mini-course on "${topic}".

Generate 4-6 **comprehensive, actionable lessons** that truly teach the topic in sequence (from basics to practical application).

Each lesson should include:
- A **title** (short and clear)
- A **description** (5-8 sentences) that TEACHES the concept step-by-step.
  - Include short examples or scenarios.
  - Explain *why* each concept matters.
  - Use a friendly, beginner-focused tone.
- A **videoQuery** string suggesting the exact topic to search on YouTube for that lesson.

Return **only JSON** in this format:
[
  {
    "title": "Lesson 1 title",
    "description": "Detailed, educational explanation (5-8 sentences)",
    "videoQuery": "best YouTube search phrase"
  }
]

Make sure the lessons build on one another logically like a real course.
The goal is to help a complete beginner **understand and apply** what they learn.
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
