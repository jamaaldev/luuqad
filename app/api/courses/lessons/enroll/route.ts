import { options } from "@/app/api/auth/[...nextauth]/options"
import { prisma } from "@/lib/prisma"
import { CoursesTypeValid } from "@/validations/CoursesIsValid"
import { getServerSession } from "next-auth"

import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
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
    const newAlphabetCourse: CoursesTypeValid = await req.json()
    // check 2 filter and return value or null
    const UserCourseExist: CoursesTypeValid | null =
      await prisma.userCourses.findFirst({
        where: {
          AND: [
            { user_id: newAlphabetCourse.user_id },
            { alphaBetsCourses_id: newAlphabetCourse.alphaBetsCourses_id },
          ],
        },

        select: {
          user_id: true,
          alphaBetsCourses_id: true,
        },
      })

    if (UserCourseExist) {
      // You might want to return a proper response in case of an error
      return NextResponse.json(
        {
          error: "Sorry, the Course already exist.",
        },
        { status: 409 },
      )
    }
    await prisma.userCourses.create({
      data: newAlphabetCourse,
    })
    return NextResponse.json(
      {
        message: "Successfully added newCourse",
      },
      { status: 200 },
    )
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
