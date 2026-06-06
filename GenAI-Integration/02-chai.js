import { checkOpenAI } from "./01-chai.js";

const client = await checkOpenAI();
const model = "gemini-3.5-flash";

// console.log(client); // Reveals API Key
console.log(client.baseURL);

const response = await client.chat.completions.create({
  model,
  messages: [
    {
      role: "system",
      content:
        "You are a helpful assistant that provides information about the OpenAI API",
    },
    {
      role: "user",
      content:
        "Where should I travel in the world ? Provide me a 3 line answer",
    },
  ],
});

console.log(response);
console.log(response.choices[0].message.content);
