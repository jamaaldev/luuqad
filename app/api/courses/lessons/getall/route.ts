import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const lessonsGetAll = await prisma.courses.findMany({
      select: {
        id: true,
        user_id: true,
        Direction_fk: true,
        Character: true,
      },
    })

    return NextResponse.json(lessonsGetAll)
  } catch (error) {
    console.log(error)
  }
}
