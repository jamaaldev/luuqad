import { prisma } from "@/lib/prisma"
import { CharacterTypeValid } from "@/validations/CharacterValid"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const character: CharacterTypeValid = await req.json()
    const NewCharacter: CharacterTypeValid = await prisma.characters.create({
      data: character,
    })
    return NextResponse.json(
      {
        message: "Successfully added Character",
      },
      { status: 200 },
    )
  } catch (error) {
    console.log("🚀 ~ file: route.ts:16 ~ POST ~ error:", error)
  }
}
