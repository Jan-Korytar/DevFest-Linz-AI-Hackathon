import { GoogleGenAI } from "@google/genai";
import { Language } from '../types';

const MATCHING_SYSTEM_INSTRUCTION = `
Task: Match user input to the closest waste category from the provided list.

Rules:
1. Closest semantic match is priority.
2. Pay strict attention to adjectives describing state (e.g., 'dirty', 'clean', 'broken', 'empty'). Match to the specific state if available in the list.
   - Example: 'dirty pizza box' should match 'Pizza box (dirty)' and NOT 'Pizza box (clean)'.
   - Example: 'dirty bottle' implies residue; check for specific waste types (e.g., 'Oil bottle') or residual waste if no 'dirty bottle' option exists.
3. Generalize specific biological items (e.g. 'horse meat' -> 'meat scraps', 'pork' -> 'meat', 'rose' -> 'flower', 'dead plant' -> 'plant waste').
4. Identify brand names (e.g. 'Coke' -> 'Can') and match to the generic item.
5. If the input is a specific model (e.g. 'iPhone 13'), match to the device category (e.g. 'Mobile phone').
6. Return just 1 best match usually.
7. Only if ambiguous, return top 3, return multiple if there is distinction between clean and dirty, e.g dirty pizza box belongs to residual waste, clean to waste paper.
8. If no match, return "null".

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
      model: 'gemini-2.5-flash',
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
      model: 'gemini-2.5-flash',
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