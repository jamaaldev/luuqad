import { options } from "@/app/api/auth/[...nextauth]/options"
import { prisma } from "@/lib/prisma"
import { UserSelectedTypeValid } from "@/validations/UserSelectedIsValid"
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
    // only get what this user belong
    const userCourse = await prisma.userCourses.findMany({
      where: { user_id: Number(session?.user?.id) },
      select: {
        id: true,
        user_id: true,
        Alphabets: true,
        isSelected: true,
      },
    })
    // get all the enroll courses this user only
    const userAlphabets = await prisma.alphaBets.findMany({
      where: { id: { in: userCourse.map((course) => course.Alphabets.id) } },
      select: {
        Direction: true,
        id: true,
      },
    })
    // user chooses One Course and return data
    const userSelectedCourse: UserSelectedTypeValid | null =
      await prisma.userSelected.findFirst({
        where: { user_id: Number(session.user?.id) },
        select: {
          id: true,
          user_id: true,
          isSelected: true,
        },
      })
    const getOne = userAlphabets.filter(
      (onelesson) => onelesson.id === userSelectedCourse?.isSelected,
    )

    const getsOneCourse = await prisma.characters.findMany({
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

    return NextResponse.json(getsOneCourse)
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
