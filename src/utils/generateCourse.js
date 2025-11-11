import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true, // for client-side demo only
});

export async function generateCourse(topic) {
  if (!topic.trim()) return [];

  const prompt = `
You are an expert instructor creating a concise, high-quality course on "${topic}" for complete beginners.

Your task:
- Create **4–6 lessons** that build from basic to advanced understanding.
- Each lesson must be self-contained, educational, and practical.

For each lesson, include:
1. "title": a clear and engaging lesson title.
2. "description": a **detailed explanation that teaches the topic directly**, not just what the learner will learn.
   - Write 6–10 sentences.
   - Explain the core concept clearly.
   - Use simple examples or analogies.
   - Avoid phrases like "in this lesson you will learn".
   - Make it sound like you are actually teaching.
3. "videoQuery": a short YouTube search query that best matches the lesson topic (e.g., "React useState tutorial" or "JavaScript closures explained").

Return your entire answer **only as valid JSON** in this format:

[
  {
    "title": "Lesson 1 title",
    "description": "Actual explanation of the topic in clear, step-by-step sentences.",
    "videoQuery": "YouTube search phrase"
  }
]

Make sure the lessons flow naturally and progressively deepen understanding of "${topic}".
Avoid repeating similar explanations between lessons.
`;

  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.6, // slightly lower for more structured, consistent responses
  });

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
