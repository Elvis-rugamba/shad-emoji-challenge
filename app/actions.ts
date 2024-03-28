"use server"

import { openaiApi } from "@/services/openai-api"

import { MessageRole } from "@/types/chat"
import prisma from "@/lib/prisma"

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

    const result = await prisma.chat.create({
      data: { message, response: choice.message.content },
    })

    return [
      { role: MessageRole.USER, content: result.message },
      { role: MessageRole.SYSTEM, content: result.response },
    ]
  } catch (error) {
    throw error
  }
}
