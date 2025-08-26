# AI Interview With Talent

**AI Interview With Talent** is a smart, AI-powered mock interview simulator that uses voice and text to conduct realistic interviews. Built with Next.js, this project leverages OpenAI to ask questions, listen to your answers, and give insightful summaries.

---

##  Features

*  **AI Question Generation**: Dynamically generates questions tailored to job roles and experience levels.
*  **Voice Interview Mode**: Uses browser speech synthesis (TTS) and recognition (STT) to simulate real interviews.
*  **Text Interview Mode**: Allows candidates to type their responses manually.
*  **Progress Feedback**: Visual status for speaking, listening, and waiting states.
*  **Transcript & Summary**: Captures and summarizes all answers into a readable format using OpenAI.
*  **Final Evaluation**: Automatically creates a summary and feedback at the end of the interview.

---

##  Use Cases

* Mock interviews for job preparation
* AI assistant for HR and recruiting tools
* Educational tool to simulate behavioral/technical interviews

---

##  Tech Stack

* **Frontend**: Next.js, React, Tailwind CSS
* **Voice**: Web Speech API (TTS + STT)
* **AI**: OpenAI (GPT-3.5 / GPT-4 via `/api/summarize`)
* **Deployment**: Vercel / Localhost

---

##  Setup Instructions

1. **Clone the Repository**

```bash
git clone [https://github.com/buddha2042/ai-interview-talent.git]
cd ai-interview-talent
```

2. **Install Dependencies**

```bash
npm install
# or
yarn
# or
pnpm install
```

3. **Start the Development Server**

```bash
npm run dev
```

4. **Visit the App**

```
http://localhost:3000
```

---

## Project Demo
https://youtu.be/mhrPrZGJyDY?si=3V-jTuU9m1LGdA1Y
---

##  API Route

The app sends all answers to `/api/summarize` which:

* Accepts a list of Q\&A
* Uses OpenAI to generate a summary and score
* Returns it as feedback for the user

```ts
POST /api/summarize
{
  questions: [...],
  answers: [...]
}
```

---

##  Folder Structure

```
/pages
  /interview
    index.tsx         // Text-based interview
    voice.tsx         // Voice-based interview
/api
  summarize.ts        // AI summary logic
/public
  ...assets
```

---

##  Credits

Built by **Buddha Kharel**

* [LinkedIn](https://www.linkedin.com/in/buddha-kharel-76449a181/)
* [GitHub](https://github.com/buddha2042)
* [Video] (https://youtu.be/mhrPrZGJyDY?si=3V-jTuU9m1LGdA1Y)
---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

##  License

MIT License. Feel free to use and modify this project.
