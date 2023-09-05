import { options } from "@/app/api/auth/[...nextauth]/options"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const session = await getServerSession(options)
    if (!session) {
      return NextResponse.json(
        {
          error:
            "Hey, you're not authorized, what you doing here? Trying to be a hacker?",
        },
        { status: 401 },
      )
    }

    const alphabetsGetAllDirection = await prisma.alphaBets.findMany({
      select: {
        id: true,
        Title: true,
        SubTitle: true,
        Langauge: true,
        Translate: true,
        Direction: true,
      },
    })

    return NextResponse.json(alphabetsGetAllDirection)
  } catch (error) {
    // You might want to return a proper response in case of an error
    return NextResponse.json(
      {
        error: "Sorry, something went wrong.",
      },
      { status: 500 },
    )
  }
}
