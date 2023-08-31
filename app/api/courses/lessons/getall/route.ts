import { options } from "@/app/api/auth/[...nextauth]/options"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const session = await getServerSession(options)
    console.log("🚀 ~ file: route.ts:8 ~ GET ~ session:", session?.user?.id)

    const lessonsGetAll = await prisma.courses.findMany({
      where: { user_id: Number(session?.user?.id) },
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
