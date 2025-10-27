import { useState } from "react";

export default function CourseGenerator() {
  const [topic, setTopic] = useState("");
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    if (!topic.trim()) return;
    setLoading(true);

    // Temporary mock data for now
    setTimeout(() => {
      const mockLessons = [
        { title: "Introduction", description: "Learn the basics of " + topic },
        {
          title: "Deep Dive",
          description: "Explore advanced concepts of " + topic,
        },
        {
          title: "Practical Example",
          description: "Apply " + topic + " in real-world scenarios",
        },
      ];
      setLessons(mockLessons);
      setLoading(false);
    }, 1200);
  };

  return (
    <main className="w-full max-w-3xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Generate Your AI Course Instantly ⚡
      </h2>

      <div className="flex gap-3 justify-center mb-8">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter a topic (e.g. React Basics)"
          className="w-full max-w-md px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl disabled:opacity-60"
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>

      {/* Lesson output */}
      <div className="space-y-4">
        {lessons.map((lesson, i) => (
          <div
            key={i}
            className="p-4 border border-gray-300 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800/50"
          >
            <h3 className="text-xl font-semibold mb-2">{lesson.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">
              {lesson.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
