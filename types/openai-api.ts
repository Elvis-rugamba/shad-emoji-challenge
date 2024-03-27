export interface ApiResponse {
  id: string
  object: string
  created: number
  model: string
  choices: ResponseChoice[]
  usage: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
  system_fingerprint: string
}

interface ResponseChoice {
  index: number
  message: {
    role: string
    content: string
  }
  logprobs: number | null
  finish_reason: string
}
