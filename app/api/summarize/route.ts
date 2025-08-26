import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// const openai = new OpenAI({
//   apiKey: "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", // 🔴 hardcoded
//   baseURL: "https://openrouter.ai/api/v1",

// });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: Request) {
  try {
    const { questions, answers } = await req.json();

    const qaPairs = questions.map((q: string, i: number) => `Q${i + 1}: ${q}\nA${i + 1}: ${answers[i]}`).join('\n\n');

    const prompt = `
You're an AI hiring interviewer.

Here is a mock interview transcript:

${qaPairs}

Please provide:
1. A professional summary of the candidate’s performance.
2. A score from 1 to 10.
3. Final feedback or recommendation for improvement.
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: 'user', content: prompt }],
    });

    const summary = completion.choices[0].message.content;
    return NextResponse.json({ summary });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to summarize' }, { status: 500 });
  }
}
