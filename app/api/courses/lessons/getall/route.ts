import { options } from "@/app/api/auth/[...nextauth]/options"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

export async function GET() {
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
    // only get what user belong
    const userCourse = await prisma.userCourses.findMany({
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
      (onelesson) => onelesson.Direction === "So_En",
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
    // You might want to return a proper response in case of an error
    return NextResponse.json(
      {
        error: "Sorry, something went wrong.",
      },
      { status: 500 },
    )
  }
}
