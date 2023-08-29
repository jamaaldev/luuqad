import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  try {
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
    console.log(error)
  }
}
