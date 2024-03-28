import { Skeleton } from "./ui/skeleton"

interface ChatSkeletonProps {}

export default function ChatSkeleton({}: ChatSkeletonProps) {
  return (
    <div className="flex w-full gap-8 py-2 max-sm:flex-wrap">
      <div className="w-full">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="mt-2 h-4 w-[200px]" />
      </div>
      <Skeleton className="h-4 w-[140px]" />
    </div>
  )
}
