import { z } from "zod"

import prisma from "@/lib/prisma"

type Sort = "asc" | "desc" | undefined

export const dynamic = "force-dynamic"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const sort: Sort = searchParams.get("sort") as Sort

  const schema = z.object({
    sort: z.enum(["asc", "desc"]).optional(),
  })

  const result = schema.safeParse({ sort })
  if (!result.success) {
    const { errors } = result.error
    return new Response(
      JSON.stringify({
        status: 400,
        message: errors.map((error) => error.message).join(", "),
      }),
      {
        status: 400,
      }
    )
  }

  const chats = await prisma.chat.findMany({
    orderBy: { createdAt: sort || "desc" },
  })

  return new Response(JSON.stringify(chats))
}
