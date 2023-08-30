import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const userlesson = await prisma.courses.findMany({})

    return NextResponse.json(userlesson)
  } catch (error) {
    console.log(error)
  }
}
