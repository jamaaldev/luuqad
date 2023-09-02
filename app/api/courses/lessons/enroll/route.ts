import { prisma } from "@/lib/prisma"
import { CoursesTypeValid } from "@/validations/CoursesIsValid"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const lessons: CoursesTypeValid = await req.json()
    const NewCourses: CoursesTypeValid = await prisma.userCourses.create({
      data: lessons,
    })
    return NextResponse.json(
      {
        message: "Successfully added Character",
      },
      { status: 200 },
    )
  } catch (error) {
    console.log("🚀 ~ file: route.ts:16 ~ POST ~ error:", error)
  }
}
