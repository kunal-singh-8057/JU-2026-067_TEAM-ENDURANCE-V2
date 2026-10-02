/*
 * Install SDK:
 * npm install @google/generative-ai
 */

import { GoogleGenerativeAI } from "@google/generative-ai";

// Use your API key from Google AI Studio
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

// ✅ Use the latest supported model
const model = genAI.getGenerativeModel({ model: "gemini-3.6-flash" });

async function run(prompt) {
  try {
    const result = await model.generateContent(prompt);
    const response = result.response.text();
    console.log(response);
    return response;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error fetching response.";
  }
}

export default run;

