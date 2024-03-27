"use client"

import { ChangeEvent, FormEvent, useState } from "react"

import { Message, MessageRole } from "@/types/chat"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Icons } from "@/components/icons"

import { sendMessage } from "./actions"

export default function IndexPage() {
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  }

  const handleSend = async (e: FormEvent) => {
    e.preventDefault()
    setMessages([...messages, { role: MessageRole.USER, content: message }])
    setIsLoading(true)
    const result = await sendMessage(message)
    if (result) {
      setMessages([...messages, ...result])
    }
    setIsLoading(false)
  }

  return (
    <div className="mx-auto flex size-full flex-1 flex-col px-4 pt-6 md:max-w-screen-md md:px-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="mb-6 text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl">
          Welcome to {siteConfig.name}
        </h1>
      </div>
      <div className="h-full flex-1 pb-8">
        {!messages.length ? (
          <p className="text-lg text-muted-foreground">
            How can I help you today?
          </p>
        ) : null}
        {messages.map((message, index) => (
          <div key={index} className="py-2">
            <p className="font-semibold">
              {message.role === MessageRole.USER ? "You" : "Shadmoji"}
            </p>
            <p className="whitespace-pre-wrap break-words">{message.content}</p>
          </div>
        ))}
      </div>
      <div className="sticky bottom-0 z-10 size-full bg-background pb-8 pt-2">
        <form onSubmit={handleSend} className="flex w-full items-center gap-2">
          <Textarea
            name="message"
            size="lg"
            className="resize-none"
            placeholder="Message..."
            onChange={handleChange}
          />
          <Button
            disabled={isLoading}
            type="submit"
            size="lg"
            className="w-12 px-0"
          >
            <Icons.send className="size-5" />
          </Button>
        </form>
      </div>
    </div>
  )
}
