import { checkOpenAI } from "./01-chai.js";
import { calculator, calculatorTool } from "./tools/calculator.js";

const client = await checkOpenAI();
const model = "gemini-2.5-flash";

console.log(client.baseURL);

const tools = [calculatorTool];

const messages = [
  {
    role: "system",
    content:
      "You are a helpful assistant that can perform calculations using the provided calculator tool.",
  },
  {
    role: "user",
    content: "What is the result of adding 68 + 70",
  },
];

const response = await client.chat.completions.create({
  model,
  messages,
  tool_choice: "auto",
  tools,
});

const responseMessage = response.choices[0]?.message;
console.log(responseMessage);
console.log(responseMessage.tool_calls);

messages.push(responseMessage);

if (responseMessage.tool_calls) {
  const toolCall = responseMessage.tool_calls[0];
  const toolResponse = await calculator(
    JSON.parse(toolCall.function.arguments),
  );
  console.log(`+++++++++++++Tool Response++++++++++++++++ 
    ${toolResponse}`);
  messages.push({
    role: "tool",
    tool_call_id: toolCall.id,
    content: String(toolResponse),
  });
}
