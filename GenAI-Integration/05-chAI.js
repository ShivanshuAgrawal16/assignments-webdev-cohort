import { checkOpenAI } from "./01-chai.js";

const client = await checkOpenAI();
const model = "gemini-2.5-flash";

console.log(client.baseURL);

const conversation = [];

async function askQuestion(systemPrompt, userPrompt, history = []) {
  const response = await client.chat.completions.create({
    model,
    messages: [
      { role: "system", content: systemPrompt },
      ...history,
      { role: "user", content: userPrompt },
    ],
  });
  history.push({ role: "user", content: userPrompt });
  history.push({
    role: "assistant",
    content: response.choices[0].message.content,
  });

  return response.choices[0].message.content;
}

// Test
const userQuestion =
  "My name is hitesh and I make coding videos on YouTube, tell me a 1 line joke";

const response1 = await askQuestion(
  "You always respond in 1 line",
  userQuestion,
  conversation,
);

console.log(`+++++++++++++++++++ Response 1 +++++++++++++++++++++++++++++`);
console.log(response1);

const userQuestion2 = "Tell me my name";
const response2 = await askQuestion(
  "You always respond in 1 line",
  userQuestion2,
  conversation,
);

console.log(`+++++++++++++++++++ Response 2 +++++++++++++++++++++++++++++`);
console.log(response2);
