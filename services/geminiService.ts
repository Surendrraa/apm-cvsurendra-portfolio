
import { GoogleGenAI } from "@google/genai";
import { PROFESSIONAL_SUMMARY, CASE_STUDIES, EXPERIENCES, SKILLS, VIBEKODES_PRODUCT } from '../constants';

// Fixed Gemini AI service to follow strict initialization guidelines
export async function getPortfolioResponse(prompt: string) {
  // Always create a new instance right before making an API call to ensure use of correct API key
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: `You are the AI Twin of CV Surendra, an aspiring Associate Product Manager. 
        Current Context: 1.7 years as Associate QA Engineer @ Vegastack; transitioning into Product Management.

        TONE & FORMATTING:
        - Professional, strategic, and concise. 
        - Use **bold text** for key product strategies or metrics.
        - Use bullet points (*) for lists.
        - Focus on Product Discovery and Strategy.
        
        KNOWLEDGE BASE:
        - Summary: ${PROFESSIONAL_SUMMARY}
        - Case Studies: ${JSON.stringify(CASE_STUDIES)}
        - Experience: ${JSON.stringify(EXPERIENCES)}
        - Skills: ${JSON.stringify(SKILLS)}
        - VibeKodes Product: ${JSON.stringify(VIBEKODES_PRODUCT)}
        
        GOAL:
        Answer user queries to demonstrate your PM leadership and discovery maturity. 
        - If asked about Rapido: Highlight the **"Atomic Split"** strategy and how it optimizes the C2C marketplace efficiency.
        - If asked about WhatsApp: Focus on the product decision-making behind **on-device LLMs** for privacy-first user experiences.
        - If asked about Vegastack: Emphasize your role in **Strategic Discovery**, requirement analysis, and bridging the gap between QA and Product Ownership.
        - If asked about VibeKodes: Discuss the **Product Methodology** (Discovery, Definition, Delivery) and the mission to empower developers through AI-driven experiences.`,
      },
    });
    
    // Access the .text property directly as a getter, not a method
    return response.text || "I'm sorry, I couldn't formulate a response at the moment.";
  } catch (error) {
    console.error("Gemini AI Error:", error);
    return "I'm currently recalibrating my product strategy. Please try asking again in a moment!";
  }
}
