import { prisma } from "@/lib/prisma"
import { CoursesTypeValid } from "@/validations/CoursesIsValid"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const newLessons: CoursesTypeValid = await req.json()
    const checkifExist: CoursesTypeValid | null =
      await prisma.userCourses.findFirst({
        where: { alphabet_id: newLessons.alphabet_id },
        select: {
          user_id: true,
          alphabet_id: true,
          isSelected: true,
        },
      })
    if (checkifExist?.alphabet_id === newLessons.alphabet_id) {
      // You might want to return a proper response in case of an error
      return NextResponse.json(
        {
          error: "Sorry, the course already exist.",
        },
        { status: 409 },
      )
    }
    const NewCourses: CoursesTypeValid = await prisma.userCourses.create({
      data: newLessons,
    })
    return NextResponse.json(
      {
        message: "Successfully added Character",
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
