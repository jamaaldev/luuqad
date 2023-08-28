import { prisma } from "@/lib/prisma"
import { AlphaBetTypeValid } from "@/validations/AlphabetIsValid"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const alphabet: AlphaBetTypeValid = await req.json()
    console.log("🚀 ~ file: route.ts:7 ~ POST ~ alphabet:", alphabet)
    const NewAlphaBet: AlphaBetTypeValid = await prisma.alphaBets.create({
      data: alphabet,
    })
    return NextResponse.json(
      {
        message: "Successfully added Alphabet",
      },
      { status: 200 },
    )
  } catch (error) {
    console.log("🚀 ~ file: route.ts:16 ~ POST ~ error:", error)
  }
}
