import { checkOpenAI } from "./01-chai.js";

const client = await checkOpenAI();
const model = "gemini-2.5-flash";

console.log(client.baseURL);

const stream = await client.chat.completions.create({
  model,
  stream: true,
  messages: [
    {
      role: "system",
      content: "You are a helpful assistant that answers in 5 lines",
    },
    {
      role: "user",
      content: "What is latest in AI",
    },
  ],
});

let last_chunk = null;

for await (const message of stream) {
  const delta = message.choices[0]?.delta?.content;
  if (delta) process.stdout.write(delta);
  last_chunk += delta;
}
