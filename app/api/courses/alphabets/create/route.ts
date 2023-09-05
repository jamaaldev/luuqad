import { options } from "@/app/api/auth/[...nextauth]/options"
import { prisma } from "@/lib/prisma"
import { AlphaBetTypeValid } from "@/validations/AlphabetIsValid"
import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
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
    const alphabet: AlphaBetTypeValid = await req.json()
    await prisma.alphaBets.create({
      data: alphabet,
    })
    return NextResponse.json(
      {
        message: "Successfully added Alphabet",
      },
      { status: 200 },
    )
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
