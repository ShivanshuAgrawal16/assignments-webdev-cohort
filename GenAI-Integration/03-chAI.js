import { checkOpenAI } from "./01-chai.js";

const client = await checkOpenAI();
const model = "gemini-3.5-flash";

async function askQuestion(systemPrompt, userPrompt) {
  const response = await client.chat.completions.create({
    model,
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: userPrompt,
      },
    ],
  });
  return response.choices[0].message.content;
}

const userQuestion = "tell me a joke";

const rudeSystem = await askQuestion(
  "You are a rude customer service agent to help customers with their food orders. You respond in curt and unhelpful manner, often providing vague or dismissive answers about their orders.",
  userQuestion,
);

console.log(rudeSystem);
