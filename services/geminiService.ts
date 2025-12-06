import { GoogleGenAI } from "@google/genai";
import { Language } from '../types';

const MATCHING_SYSTEM_INSTRUCTION = `
Task: Match user input to closest waste category from the provided list.
Rules:
1. Closest semantic match.
2. It is best to reurn just 1. Try to always return the best match.
2. Only If ambiguous, return top 3. 
3. If no match, return "null".
Format: match1|||match2
`;

export const identifyImageWithGemini = async (base64Image: string, language: Language = 'en'): Promise<string | null> => {
  if (!process.env.API_KEY) {
    console.error("Gemini API Key is missing.");
    return null;
  }

  const langName = language === 'de' ? 'German' : 'English';
  const example = language === 'de' ? 'Plastikflasche' : 'plastic bottle';
  
  // Dynamic prompt based on language
  const PROMPT = `Identify the main waste item in this image. Return ONLY the name of the item in ${langName} (e.g., '${example}', 'newspaper'). Keep it simple and generic enough to match recycling categories.`;

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // We remove the prefix 'data:image/jpeg;base64,' if present for the API call
    const data = base64Image.includes('base64,') 
      ? base64Image.split('base64,')[1] 
      : base64Image;

    const response = await ai.models.generateContent({
      model: 'gemini-flash-lite-latest',
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: 'image/jpeg',
              data: data
            }
          },
          {
            text: PROMPT
          }
        ]
      }
    });

    const text = response.text;
    return text ? text.trim().toLowerCase() : null;
  } catch (error) {
    console.error("Error identifying image with Gemini:", error);
    return null;
  }
};

export const findBestMatchWithGemini = async (query: string, options: string[]): Promise<string[] | null> => {
  if (!process.env.API_KEY) return null;

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-flash-lite-latest',
      contents: { text: `List: ${JSON.stringify(options)}\nInput: "${query}"` },
      config: {
        systemInstruction: MATCHING_SYSTEM_INSTRUCTION,
        temperature: 0.1
      }
    });

    const text = response.text?.trim();
    if (!text || text.toLowerCase() === 'null') return null;

    // Split by the separator and clean up
    const matches = text.split('|||').map(s => s.trim()).filter(s => options.includes(s));
    
    return matches.length > 0 ? matches : null;
  } catch (error) {
    console.error("Gemini text match error:", error);
    return null;
  }
};