interface ChatCardProps {
  message: string
  response: string
  date: string
}

export default function ChatCard({ message, response, date }: ChatCardProps) {
  return (
    <div className="flex w-full gap-2 py-2 max-sm:flex-wrap">
      <div className="w-full">
        <p className="font-semibold">{message}</p>
        <p className="mt-1">
          {"=>"} {response}
        </p>
      </div>
      <p className="text-sm text-muted-foreground">{date}</p>
    </div>
  )
}
