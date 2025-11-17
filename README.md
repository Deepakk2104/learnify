# **Learnify — AI-Powered Course Generator**

A smart and fast **AI course generator** that turns any topic into a complete learning plan in seconds.  
Learnify is built with **React**, **TailwindCSS**, and **Groq (Llama 3.1)** to generate structured courses with auto-fetched **YouTube video resources** — all in a smooth and responsive single-page UI.

---

## **Tech Stack**

| Category               | Technologies                     |
| ---------------------- | -------------------------------- |
| **Frontend**           | React, Vite                      |
| **AI Integration**     | Groq (Llama 3.1) API             |
| **Video Integration**  | YouTube Data API v3              |
| **UI / Styling**       | Tailwind CSS                     |
| **Animations**         | Framer Motion                    |
| **Deployment**         | Vercel                           |

---

## **How it Works**

- Enter any topic (e.g. *"React Basics"*, *"AI for Beginners"*)
- Learnify generates:
  - 📘 A 3–5 lesson structured course outline  
  - 📝 Short lesson explanations  
  - 🎥 Relevant YouTube video suggestions

> No dashboard or login required — instant AI course creation ⚡

---

## **Live Demo**

### 🌐 **Website:** _Add your Learnify deployment link here_

---

## **Features**

### **AI Course Generation**

- ⚡ Generate lessons using Groq's Llama 3.1 model
- 🎥 YouTube video integration per lesson
- 🧠 Unique lesson titles and descriptions
- 🪄 Instant content generation for any subject

### **User Experience**

- 🌗 Dark/Light mode with persistent theme
- 🎨 TailwindCSS clean UI design
- 💫 Smooth interactive animations powered by Framer Motion
- 📱 Fully responsive on mobile & desktop

---

## **Tech Stack**

- **React + Vite**
- **Groq API (Llama 3.1)**
- **YouTube Data API**
- **TailwindCSS**
- **Framer Motion**

---

## **Getting Started**

### **1. Clone the repo**

```bash
git clone https://github.com/<your-username>/learnify.git
cd learnify
2. Install dependencies
bash
Copy code
npm install
3. Add API keys
Create a .env file and add:

env
Copy code
VITE_GROQ_API_KEY=your_groq_key
VITE_YOUTUBE_API_KEY=your_youtube_data_api_key
4. Start development server
bash
Copy code
npm run dev
Project Structure
arduino
Copy code
learnify/
│
├── src/
│   ├── components/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── public/
├── package.json
├── vite.config.js
└── README.md
Build for Production
bash
Copy code
npm run build
Deploy the generated dist/ folder using:

Vercel

Netlify

GitHub Pages

Future Enhancements
📝 Edit lesson titles and descriptions
🔗 Copy/share course data
📄 Export course to PDF
🧠 Full detailed lesson content generation
📊 Learning stats based on topics

License
Licensed under the MIT License.

Author
Developed by Deepakk2104
