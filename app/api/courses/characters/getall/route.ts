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

    const charactersGetAll = await prisma.characters.findMany({
      select: {
        id: true,
        Character: true,
        Transliteration: true,
        Direction_fk: true,
        State: true,
        StrengthProgress: true,
        TsAUrl: true,
      },
    })

    return NextResponse.json(charactersGetAll)
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
