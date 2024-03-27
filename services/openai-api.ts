import { ApiResponse } from "@/types/openai-api"
import { apiConfig } from "@/config/api"

export async function openaiApi(message: string): Promise<ApiResponse> {
  try {
    const body = JSON.stringify({
      model: apiConfig.openai.model,
      messages: [
        {
          role: "system",
          content: apiConfig.openai.systemMessage,
        },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: apiConfig.openai.temperature,
      max_tokens: apiConfig.openai.maxTokens,
    })

    const requestOptions: RequestInit = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiConfig.openai.apiKey}`,
        "Content-Type": "application/json",
      },
      body,
    }

    const response = await fetch(`${apiConfig.openai.baseUrl}`, requestOptions)
    return response.json()
  } catch (error: any) {
    console.log(error)
    throw new Error(error?.message ?? error)
  }
}
