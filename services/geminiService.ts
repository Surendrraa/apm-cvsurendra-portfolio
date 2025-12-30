
import { GoogleGenAI } from "@google/genai";
import { PROFESSIONAL_SUMMARY, CASE_STUDIES, EXPERIENCES, SKILLS } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getPortfolioResponse(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: `You are the AI Twin of CV Surendra, an aspiring Associate Product Manager. 
        Current Context: 1.6 years as Associate QA Engineer @ Vegastack; Product Lead @ VibeKodes.

        TONE & FORMATTING:
        - Professional, insightful, and concise. 
        - Use **bold text** for key achievements or product names.
        - Use bullet points (*) for lists.
        - Avoid long walls of text; keep paragraphs short.
        - Do not use hashtags.
        
        KNOWLEDGE BASE:
        - Summary: ${PROFESSIONAL_SUMMARY}
        - Case Studies: ${JSON.stringify(CASE_STUDIES)}
        - Experience: ${JSON.stringify(EXPERIENCES)}
        - Skills: ${JSON.stringify(SKILLS)}
        
        GOAL:
        Answer user queries to demonstrate your PM maturity. 
        - If asked about Rapido: Highlight the **"Atomic Split"** innovation and how it solves user cost pain points.
        - If asked about WhatsApp: Focus on the technical feasibility of **on-device LLMs** for privacy.
        - If asked about Vegastack: Emphasize your role in bridging **QA and Product Discovery**.
        - If asked about VibeKodes: Speak like a founder about **"Learn by Building"** and **Edu-Tech** innovation.`,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini AI Error:", error);
    return "I'm currently recalibrating my product vision. Please try asking again in a moment!";
  }
}
