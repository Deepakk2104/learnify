# Learnify — AI Course Generator

Learnify is a simple, fast AI-powered course generator. Enter any topic and get a structured mini-course with 3–5 lessons, each including a short explanation and a relevant YouTube video.

Built using React, Tailwind, Groq (Llama 3.1), YouTube API, and Framer Motion.

---

## Features

- AI course generation using Groq (Llama 3.1)
- Auto YouTube video recommendations per lesson
- Dark / Light mode with persistent theme
- Clean UI built with Tailwind CSS
- Smooth animations using Framer Motion
- Fully responsive, single-page design

---

## Tech Stack

- React (Vite)
- Tailwind CSS
- Groq API
- YouTube Data API v3
- Framer Motion

---

## Preview

(Add your deployment link or screenshot here)
Example:
https://your-site-link.vercel.app

---

## Getting Started

Clone the project:

git clone https://github.com/your-username/learnify.git
cd learnify

Install dependencies:

npm install

Create a .env file in the root directory and add:

VITE_GROQ_API_KEY=your_groq_key
VITE_YOUTUBE_API_KEY=your_youtube_key

Start the development server:

npm run dev

---

## Project Structure

src/
 ├─ components/
 │   ├─ Header.jsx
 │   ├─ CourseGenerator.jsx
 │   └─ Footer.jsx
 ├─ utils/
 │   ├─ generateCourse.js
 │   └─ fetchVideo.js
 ├─ App.jsx
 ├─ main.jsx
 └─ index.css

---

## Author

Deepak (Bubu)
Frontend Developer — React, JavaScript, AI Tools
GitHub | LinkedIn
