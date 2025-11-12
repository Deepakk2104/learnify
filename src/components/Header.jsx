/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

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
      {/* Animated Title */}
      <motion.h1
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-2xl font-bold tracking-wide"
      >
        Learnify<span className="text-indigo-500">.</span>
      </motion.h1>

      {/* Animated Dark Mode Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setDarkMode(!darkMode)}
        className="px-3 py-1.5 text-sm font-medium rounded-xl bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:opacity-80 transition-all"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </motion.button>
    </header>
  );
}
