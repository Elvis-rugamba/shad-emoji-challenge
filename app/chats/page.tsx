"use client"

import { useState } from "react"
import { fetcher } from "@/services/api"
import useSWR from "swr"

import { Chat } from "@/types/chat"
import { formatDateTime } from "@/lib/utils"
import ChatCard from "@/components/chat-card"
import ChatSkeleton from "@/components/chat-skeleton"
import SortDropdown from "@/components/sort-dropdown"

export default function ChatsPage() {
  const [sort, setSort] = useState<"asc" | "desc">()
  const { data, error, isLoading } = useSWR<Chat[]>(
    `/api/chats?sort=${sort || ""}`,
    fetcher
  )

  const handleSortChange = (value: "asc" | "desc") => {
    setSort(value)
  }

  return (
    <div className="mx-auto flex size-full flex-col px-4 pt-6 md:max-w-screen-md md:px-10">
      <div className="mb-6 flex w-full items-center justify-between gap-2">
        <h1 className="text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl">
          Chats
        </h1>
        <SortDropdown
          onChange={handleSortChange}
          options={[
            { label: "ASC", value: "asc" },
            { label: "DESC", value: "desc" },
          ]}
        />
      </div>
      <div className="flex w-full flex-col">
        {data
          ? data.map((chat) => (
              <ChatCard
                key={chat.id}
                message={chat.message}
                response={chat.response}
                date={formatDateTime(chat.createdAt)}
              />
            ))
          : null}
        {isLoading
          ? Array.from({ length: 5 }, (_, i) => i + 1).map((i) => (
              <ChatSkeleton key={i} />
            ))
          : null}
        {error ? (
          <p className="text-destructive">{error.message || error}</p>
        ) : null}
      </div>
    </div>
  )
}
