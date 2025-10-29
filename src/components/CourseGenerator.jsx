import { useState } from "react";
import { generateCourse } from "../utils/generateCourse";
import { fetchVideo } from "../utils/fetchVideo";

export default function CourseGenerator() {
  const [topic, setTopic] = useState("");
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setError("");
    setLessons([]);
    setLoading(true);

    try {
      const aiLessons = await generateCourse(topic);

      const lessonsWithVideos = await Promise.all(
        aiLessons.map(async (lesson) => {
          const video = await fetchVideo(lesson.videoQuery || lesson.title);
          return { ...lesson, video };
        })
      );

      setLessons(lessonsWithVideos);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full max-w-3xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Generate Your AI Course Instantly ⚡
      </h2>

      {/* Input + Button */}
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

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      {/* Lessons */}
      <div className="space-y-8">
        {lessons.map((lesson, i) => (
          <div
            key={i}
            className="p-6 border border-gray-300 dark:border-gray-700 rounded-2xl bg-gray-50 dark:bg-gray-800/50 shadow-sm hover:shadow-md transition-all duration-200"
          >
            {/* Lesson Title & Description */}
            <h3 className="text-2xl font-semibold text-indigo-500 mb-2">
              {lesson.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
              {lesson.description}
            </p>

            {/* Video Section */}
            {lesson.video && (
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  href={lesson.video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0"
                >
                  <img
                    src={lesson.video.thumbnail}
                    alt={lesson.video.title}
                    className="w-full sm:w-60 rounded-xl border border-gray-300 dark:border-gray-700 hover:scale-[1.02] transition-transform duration-200"
                  />
                </a>

                <div className="flex-1 flex justify-center sm:justify-start">
                  <a
                    href={lesson.video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors duration-200"
                  >
                    Click here to watch the video
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {!loading && lessons.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-10">
          Start by entering a topic above to generate your course ✨
        </p>
      )}
    </main>
  );
}
