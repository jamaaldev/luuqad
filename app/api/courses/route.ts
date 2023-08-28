import { prisma } from "@/lib/prisma"
import { CreateMyFormValues } from "@/validations/AlphabetIsValid"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const alphabet: CreateMyFormValues = await req.json()
    console.log("🚀 ~ file: route.ts:7 ~ POST ~ alphabet:", alphabet)
    const NewAlphaBet: CreateMyFormValues = await prisma.alphaBets.create({
      data: alphabet,
    })
    return NextResponse.json(
      {
        message: "Successfully added Just Joking Not Yet",
      },
      { status: 200 },
    )
  } catch (error) {
    console.log("🚀 ~ file: route.ts:16 ~ POST ~ error:", error)
  }
}