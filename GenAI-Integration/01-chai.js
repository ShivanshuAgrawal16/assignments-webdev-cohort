import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY;

export const apikeyChecker = () => {
  if (!API_KEY) {
    console.error(`API KEY not found`);
    process.exit();
  }
};

export const checkOpenAI = async () => {
  const openai = (await import("openai")).default;
  const client = new openai.OpenAI({
    apiKey: API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
  });
  if (!client) {
    console.error("Error: Failed to initialize OpenAI Client");
    process.exit(1);
  }
  console.log("Client initialized successfully");
  return client;
};
