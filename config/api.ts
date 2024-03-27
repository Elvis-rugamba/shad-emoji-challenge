export type ApiConfig = typeof apiConfig

export const apiConfig = {
  openai: {
    baseUrl: process.env.OPENAI_BASE_URL,
    apiKey: process.env.OPENAI_API_KEY,
    model: "gpt-3.5-turbo",
    systemMessage:
      "You will be provided with text, and your task is to translate it into emojis. Do not use any regular text. Do your best with emojis only.",
    temperature: 0.8,
    maxTokens: 64,
  },
}
