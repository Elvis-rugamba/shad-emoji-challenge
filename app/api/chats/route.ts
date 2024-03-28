import prisma from "@/lib/prisma"

type Sort = "asc" | "desc" | undefined

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const sort: Sort = searchParams.get("sort") as Sort

  const chats = await prisma.chat.findMany({
    orderBy: { createdAt: sort || "desc" },
  })

  return new Response(JSON.stringify(chats))
}
