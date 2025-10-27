import { useState, useEffect } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="w-full py-4 border-b border-gray-300 dark:border-gray-700 flex justify-between items-center px-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold tracking-wide">
        Learnify<span className="text-indigo-500">.</span>
      </h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-3 py-1.5 text-sm font-medium rounded-xl bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:opacity-80"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}
