import { prisma } from "@/lib/prisma"
import { UserSelectedTypeValid } from "@/validations/UserSelectedIsValid"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const userSelected: UserSelectedTypeValid = await req.json()
    const findSelected: UserSelectedTypeValid =
      await prisma.userSelected.findFirst({
        where: { user_id: userSelected.user_id },
        select: {
          isSelected: true,
          user_id: true,
          id: true,
        },
      })
    console.log("🚀 ~ file: route.ts:11 ~ POST ~ findSelected:", findSelected)
    if (findSelected != null) {
      const updateSelected: UserSelectedTypeValid =
        await prisma.userSelected.update({
          where: {
            user_id: userSelected.user_id,
          },
          data: {
            isSelected: userSelected.isSelected,
          },
        })

      return NextResponse.json(
        {
          message: "Successfully UserSelected",
        },
        { status: 200 },
      )
    }
  } catch (error) {
    console.log("🚀 ~ file: route.ts:16 ~ POST ~ error:", error)
  }
}