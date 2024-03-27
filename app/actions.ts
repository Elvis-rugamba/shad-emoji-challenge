"use server"

import { openaiApi } from "@/services/openai-api"

import { MessageRole } from "@/types/chat"

export async function sendMessage(message: string) {
  try {
    if (!message) {
      return
    }

    const res = await openaiApi(message)
    const choice = res.choices[0]

    if (!choice) {
      return
    }
    return [
      { role: MessageRole.USER, content: message },
      { role: MessageRole.SYSTEM, content: choice.message.content },
    ]
  } catch (error) {
    throw error
  }
}
