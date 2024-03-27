export interface Message {
  role: MessageRole
  content: string
}

export enum MessageRole {
  USER = "user",
  SYSTEM = "system",
}
