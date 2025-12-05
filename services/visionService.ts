// This service is deprecated. Vision processing is now handled exclusively by geminiService.ts
// The local @xenova/transformers implementation has been removed.

export const identifyImageWithAI = async (base64Image: string): Promise<string | null> => {
  console.warn("Local vision service is disabled. Please use Gemini.");
  return null;
};
