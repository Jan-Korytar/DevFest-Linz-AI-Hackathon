import { GoogleGenAI } from "@google/genai";

export const identifyImageWithGemini = async (base64Image: string): Promise<string | null> => {
  if (!process.env.API_KEY) {
    console.warn("Gemini API Key is missing. Falling back to mock.");
    return null;
  }

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
            text: "Identify the main waste item in this image. Return ONLY the name of the item (e.g., 'plastic bottle', 'banana peel', 'newspaper'). Keep it simple and generic enough to match recycling categories."
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