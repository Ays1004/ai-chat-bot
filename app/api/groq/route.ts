import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: Request) {
   const body = await req.json();
  const response = await groq.chat.completions.create({
    messages: [
        {   role:"user",
            content: body.contents || "Default Content",
        }
    ],
    model: "llama-3.1-8b-instant"
    
  });
  return new Response(JSON.stringify({ text: response.choices[0]?.message?.content || "" }), { status: 200, headers: { "Content-Type": "application/json" } });
}


// export async function main() {
//   const chatCompletion = await getGroqChatCompletion();
//   // Print the completion returned by the LLM.
//   console.log(chatCompletion.choices[0]?.message?.content || "");
// }


// export async function getGroqChatCompletion() {
//   return groq.chat.completions.create({
//     messages: [
//       {
//         role: "user",
//         content: "Explain the importance of fast language models",
//       },
//     ],
//     model: "llama-3.3-70b-versatile",
//   });
// }
