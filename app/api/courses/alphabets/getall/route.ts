import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  try {
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
    console.log(error)
  }
}
