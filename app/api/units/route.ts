import { getServerSession } from "next-auth/next"
import { NextResponse } from "next/server"
import { options } from "../auth/[...nextauth]/options"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

// using next js 13 api routes, send post request to create user with prisma
export async function GET() {
  try {
    const session = await getServerSession(options)
    if (!session) {
      return NextResponse.json(
        {
          error:
            "Nah, you're not authorized, what you doing here? Trying to be a hacker?",
        },
        { status: 401 },
      )
    }

    // Get all lessons
    const userSelectedCourse = await prisma.userSelected.findFirst({
      where: { user_id: Number(session?.user?.id) },
      select: {
        isSelected: true,
      },
    })
    const units = await prisma.unit.findMany({
      where: { alphabets_id: userSelectedCourse?.isSelected },
      orderBy: {
        id: "asc",
      },
    })
    console.log("👀👏💋", units)
    if (units) {
      return NextResponse.json({ units })
    }
    revalidatePath("/")
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
