import { pipeline, env } from '@xenova/transformers';

// Configuration to ensure it runs smoothly in the browser
env.allowLocalModels = false; // Force load from Hub
env.useBrowserCache = true;   // Cache the model for subsequent visits

// Singleton pattern to avoid reloading the model every time
class ImageClassifier {
  static instance: any = null;
  static modelId = 'Xenova/vit-base-patch16-224';

  static async getInstance() {
    if (this.instance === null) {
      console.log(`Loading model ${this.modelId}...`);
      // Create the image classification pipeline
      this.instance = await pipeline('image-classification', this.modelId);
    }
    return this.instance;
  }
}

export const identifyImageWithAI = async (base64Image: string): Promise<string | null> => {
  try {
    const classifier = await ImageClassifier.getInstance();
    
    // The pipeline accepts base64 data URIs directly
    const results = await classifier(base64Image);
    
    // Results look like: [{ label: 'water bottle', score: 0.99 }, ...]
    if (results && results.length > 0) {
      const topResult = results[0];
      console.log("AI Identification:", topResult);
      return topResult.label.toLowerCase();
    }
    
    return null;
  } catch (error) {
    console.error("Error identifying image with Transformers.js:", error);
    return null;
  }
};