import { prisma } from "@/lib/prisma"
import { CoursesTypeValid } from "@/validations/CoursesIsValid"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const newLessons: CoursesTypeValid = await req.json()
    // check 2 filter and return value or null
    const UserCourseExist: CoursesTypeValid | null =
      await prisma.userCourses.findFirst({
        where: {
          AND: [
            { user_id: newLessons.user_id },
            { alphabet_id: newLessons.alphabet_id },
          ],
        },

        select: {
          user_id: true,
          alphabet_id: true,
          isSelected: true,
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
    const NewCourses: CoursesTypeValid = await prisma.userCourses.create({
      data: newLessons,
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
