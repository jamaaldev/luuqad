import { options } from "@/app/api/auth/[...nextauth]/options"
import { prisma } from "@/lib/prisma"
import { UserSelectedCoursesTypeValid } from "@/validations/UserSelectedCoursesIsValid"
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
    // user chooses One Course and return data
    const userSelectedCourse: UserSelectedCoursesTypeValid[] =
      await prisma.userCourses.findMany({
        where: { user_id: Number(session.user?.id) },
        select: {
          id: true,
          user_id: true,
          isSelected: true,
          alphabet_id: true,
          Alphabets: true,
        },
      })

    return NextResponse.json(userSelectedCourse)
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