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
        AlphaBetsCourses: true,
        alphaBetsCourses_id: true,
      },
    })
    // get all the enroll courses this user only
    const userAlphabetsCourses = await prisma.alphaBetsCourses.findMany({
      where: {
        id: { in: userCourse.map((course) => course.AlphaBetsCourses.id) },
      },
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
          isSelectedAlphabetCourse_id: true,
        },
      })
    const getOneCourse = userAlphabetsCourses.filter(
      (oneCourse) =>
        oneCourse.id === userSelectedCourse?.isSelectedAlphabetCourse_id,
    )

    const getsOneCourse = await prisma.characters.findMany({
      where: {
        Direction_fk: getOneCourse[0].Direction,
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
