import { options } from "@/app/api/auth/[...nextauth]/options"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const session = await getServerSession(options)

    // only get what user belong
    const userCourse = await prisma.courses.findMany({
      where: { user_id: Number(session?.user?.id) },
      select: {
        id: true,
        user_id: true,
        Alphabets: true,
      },
    })
    // get all the user enroll courses
    const userAlphabets = await prisma.alphaBets.findMany({
      where: { id: { in: userCourse.map((course) => course.Alphabets.id) } },
      select: {
        Direction: true,
      },
    })
    // user chooses One Course and return data
    let getOne = userAlphabets.filter(
      (onelesson) => onelesson.Direction === "En_So",
    )

    const lessonsGetAll = await prisma.characters.findMany({
      where: {
        Direction_fk: getOne[0].Direction,
      },

      select: {
        id: true,
        Character: true,
        Transliteration: true,
        TsAUrl: true,
        State: true,
        StrengthProgress: true,
        Direction_fk: true,
      },
    })

    return NextResponse.json(lessonsGetAll)
  } catch (error) {
    console.log(error)
  }
}
