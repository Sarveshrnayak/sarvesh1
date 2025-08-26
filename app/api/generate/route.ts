// // import { NextResponse } from 'next/server';
// // import OpenAI from 'openai';

// // const openai = new OpenAI({
// //   apiKey: process.env.OPENAI_API_KEY, 
// // });

// // export async function POST(req: Request) {
// //   try {
// //     const { jobPost, companyProfile, resume } = await req.json();

// //     const prompt = `
// // You are an AI recruiter. Based on the following:
// // Job Post: ${jobPost}
// // Company Profile: ${companyProfile}
// // Candidate Resume: ${resume}

// // Generate a list of 5 personalized interview questions that would be relevant and insightful to ask the candidate. Questions should be concise and tailored to the candidate’s experience and the job.
// // `;

// //     const completion = await openai.chat.completions.create({
// //       model: 'gpt-3.5-turbo',
// //       messages: [{ role: 'user', content: prompt }],
// //     });

// //     const raw = completion.choices[0].message.content || '';
// //     const questions = raw.split('\n').filter((line) => line.trim().length > 0);

// //     return NextResponse.json({ questions });
// //   } catch (error: any) {
// //     console.error('Error generating questions:', error.message);
// //     return NextResponse.json({ error: 'Failed to generate questions' }, { status: 500 });
// //   }
// // }


// import { NextResponse } from "next/server";
// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: "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", // 🔴 hardcoded
//   baseURL: "https://openrouter.ai/api/v1",

// });

// export async function POST(req: Request) {
//   try {
//     const { jobPost, companyProfile, resume } = await req.json();

//     const prompt = `
// You are an AI recruiter. Based on the following:
// Job Post: ${jobPost}
// Company Profile: ${companyProfile}
// Candidate Resume: ${resume}

// Generate a list of 5 personalized interview questions that would be relevant and insightful to ask the candidate. Questions should be concise and tailored to the candidate’s experience and the job.
// `;

//     const completion = await openai.chat.completions.create({
//       model: "openai/gpt-4o-mini",
//       messages: [{ role: "user", content: prompt }],
//     });

//     const raw = completion.choices[0].message?.content || "";
//     const questions = raw
//       .split("\n")
//       .map((q) => q.trim())
//       .filter((q) => q.length > 0);

//     return NextResponse.json({ questions });
//   } catch (error: any) {
//     console.error("Error generating questions:", error);
//     return NextResponse.json(
//       { error: "Failed to generate questions" },
//       { status: 500 }
//     );
//   }
// }


// import { NextResponse } from "next/server";
// import OpenAI from "openai";

// const USE_MOCK = true; // 👈 set false when real API is available



// const openai = new OpenAI({
//   apiKey: "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", // 🔴 hardcoded
//   baseURL: "https://openrouter.ai/api/v1",

// });

// export async function POST(req: Request) {
//   try {
//     const { transcript } = await req.json();

//     if (USE_MOCK) {
//       // ✅ Fake summary for testing
//       return NextResponse.json({
//         summary:
//           "The candidate answered questions confidently, highlighted relevant experience, and showed strong motivation for the role.",
//       });
//     }

//     const prompt = `
// Summarize the following interview transcript into a concise evaluation (max 5 sentences):

// ${transcript}
// `;

//     const completion = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [{ role: "user", content: prompt }],
//     });

//     const summary = completion.choices[0].message?.content || "No summary generated.";

//     return NextResponse.json({ summary });
//   } catch (error: any) {
//     console.error("Error summarizing interview:", error);
//     return NextResponse.json(
//       { error: "Failed to summarize interview" },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: "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", // 🔴 hardcoded
  baseURL: "https://openrouter.ai/api/v1",

});

export async function POST(req: Request) {
  try {
    const { jobPost, companyProfile, resume } = await req.json();

    const prompt = `
You are an AI recruiter. Based on the following:
Job Post: ${jobPost}
Company Profile: ${companyProfile}
Candidate Resume: ${resume}

Generate a list of 5 personalized interview questions that would be relevant and insightful to ask the candidate. Questions should be concise and tailored to the candidate’s experience and the job.
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: 'user', content: prompt }],
    });

    const raw = completion.choices[0].message.content || '';
    const questions = raw.split('\n').filter((line) => line.trim().length > 0);

    return NextResponse.json({ questions });
  } catch (error: any) {
    console.error('Error generating questions:', error.message);
    return NextResponse.json({ error: 'Failed to generate questions' }, { status: 500 });
  }
}

