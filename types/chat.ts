export interface Chat {
  id: string
  message: string
  response: string
  createdAt: string
}

export interface Message {
  role: MessageRole
  content: string
}

export enum MessageRole {
  USER = "user",
  SYSTEM = "system",
}
